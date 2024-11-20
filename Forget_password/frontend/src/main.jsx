import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true, // Enables v7's relative splat path resolution
        v7_startTransition: true,  // Enables state transition wrapping for v7
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
