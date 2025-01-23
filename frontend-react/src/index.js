import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Archivo de estilos globales (opcional)
import App from './App'; // Importa el componente principal de la aplicación

// Crear el contenedor raíz del DOM y montar el componente principal App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
