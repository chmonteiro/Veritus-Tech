import React from 'react';
import ReactDOM from 'react-dom/client';
// globals.css vem ANTES do App: é a camada base, e o CSS dos componentes
// (importado dentro de App) precisa vencer os empates de especificidade.
import './styles/globals.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
