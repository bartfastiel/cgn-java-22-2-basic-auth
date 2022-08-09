import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    const [me, setMe] = useState<string>();

    useEffect(() => {
        axios.get("api/users/me")
            .then(response => response.data)
            .then(setMe)
    }, [])

    if (!me) {
        return <>Loading...</>;
    }

    return <>
        hi {me}
    </>
}

export default App;
