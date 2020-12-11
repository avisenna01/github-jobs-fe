import React, { useState } from 'react';
import styles from '../styles/login.module.scss'


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submit = () => {
        console.log(username, password)
    }

    return (
        <div className={styles.login__container}>
            <div className={styles.box}>
                <h1>
                    Login
                </h1>
                <label>Username </label>
                <input placeholder="Username" onChange={handleUsername} value={username}></input>
                <label>Password</label>
                <input placeholder="Password" onChange={handlePassword} value={password} ></input>
                <button onClick={submit}>Login</button>
            </div>
        </div>
    )
}

export default Login;