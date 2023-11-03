import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppContext from './context/AppContext/AppContext';
import AppState from './context/AppContext/AppState';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState>
);
