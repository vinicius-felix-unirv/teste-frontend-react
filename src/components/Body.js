import React, { useState } from 'react';
import './Body.css';

const Body = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {

        if (username === 'usuario' && password === 'senha') {

            console.log('Login bem-sucedido!');
        } else {
            setErrorMessage('Nome de usuário ou senha incorretos.');
        }
    };

    return (
        <div className="body-right">
            <div className="login-form">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="input-group">
                    <label htmlFor="username">Usuário:</label>
                    <input
                        id="username"
                        type="email"
                        placeholder="email@exemplo.com.br"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Entrar</button>
                <div className="links">
                    <a href="#">Cadastrar novo usuário</a>
                    <a href="#">Esqueci minha senha</a>
                </div>
            </div>
        </div>
    );
};

export default Body;
