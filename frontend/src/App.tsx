import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [me, setMe] = useState<string>();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function fetchMe() {
        axios.get("api/users/me")
            .then(response => response.data)
            .then(setMe)
    }

    function fetchHello() {
        axios.get("api/hello")
    }

    useEffect(() => {
        fetchMe();
        axios.interceptors.response.use(response => response, error => {
            const status = error.response ? error.response.status : null
            if (status === 401 && !error.config.auth) {
                toast("Sitzung abgelaufen")
                fetchMe()
            }
            return Promise.reject(error);
        })
    }, [])

    const login = () => {
        axios.get("api/users/me", {auth: {username, password}})
            .then(response => response.data)
            .then(setMe)
            .catch(() => toast("Falsch"))
    }

    const logout = () => {
        axios.get("api/users/logout")
            .then(response => response.data)
            .then(() => setMe('anonymousUser'))
    }

    return <>
        {
            me ? (
                me === 'anonymousUser' ?
                    <>
                        <input type={"text"} value={username} onChange={ev => setUsername(ev.target.value)}/>
                        <input type={"text"} value={password} onChange={ev => setPassword(ev.target.value)}/>
                        <button onClick={login}>Login!</button>
                    </> : <>
                        hi {me}
                        <button onClick={fetchHello}>Get!</button>
                        <button onClick={logout}>Logout!</button>
                    </>
            ) : "Loading..."
        }
        <ToastContainer/>
    </>
}

export default App;
