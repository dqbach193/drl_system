import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DRLContextProvider } from "./context/DRLContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DRLContextProvider>
      <App />
    </DRLContextProvider>
  </React.StrictMode>
);


