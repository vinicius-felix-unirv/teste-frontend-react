// src/components/Header.js
import React from 'react';
import './Header.css'; // Para estilização do componente

const Header = () => {
    return (
        <div className="header-left">
            <img
                src="/img/logo.png"
                alt="Logo da Universidade"
                className="university-logo"
            />
        </div>
    );
};

export default Header;
