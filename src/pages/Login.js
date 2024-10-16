import React, { useState, useEffect } from 'react';
import '../styles/Login.css';

function Login(){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser('');
        setPassword('');

        if(user === "adm" && password === "123"){
            sessionStorage.setItem("ADM", true);
            window.location.href = "/PI-II";
        } 
    };

    useEffect(() => {
        document.getElementById("user").focus();
    }, []);

    return (
        <div className="login-container">
            <header>
                <h2>Acesso ADM</h2>
            </header>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="user">Usuário:</label>
                    <input
                        id="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" aria-label="Enviar formulário de login">Login</button>
            </form>
        </div>
    );
};

export default Login;
