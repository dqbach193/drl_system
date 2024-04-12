import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DRLContextProvider } from "./context/DRLContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DRLContextProvider>
        <App />
      </DRLContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


