// src/App.js
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css'; // Para estilização geral

const App = () => {
  return (
    <div className="app-container">
      <div className="main-content">
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default App;
