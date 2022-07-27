import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import FreeGameProvider from './context/FreeGameProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FreeGameProvider>
        <App />
      </FreeGameProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
