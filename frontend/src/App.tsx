import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    const [me, setMe] = useState<string>();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        axios.get("api/users/me")
            .then(response => response.data)
            .then(setMe)
    }, [])

    if (!me) {
        return <>Loading...</>;
    }

    const login = () => {
        axios.get("api/users/me", {auth: {username, password}})
            .then(response => response.data)
            .then(setMe)
    }

    const logout = () => {
        axios.get("api/users/logout")
            .then(response => response.data)
            .then(() => setMe('anonymousUser'))
    }

    if (me === 'anonymousUser') {
        return <>
            <input type={"text"} value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type={"text"} value={password} onChange={ev => setPassword(ev.target.value)}/>
            <button onClick={login}>Login!</button>
        </>
    }

    return <>
        hi {me}
        <button onClick={logout}>Logout!</button>
    </>
}

export default App;
