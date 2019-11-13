import React, { useState } from 'react';

//Styles
import styles from '../css/login.module.css'

const Login = (props: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className={styles.container} style={{display: props.display}}>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            
        </div>
    )
}

export default Login
