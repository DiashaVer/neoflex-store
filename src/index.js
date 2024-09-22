import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./styles/main.css"
import "./styles/cart.css"
import "./styles/consumer.css";


// Создаем корневой элемент, к которому будет привязано приложение
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
