import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.scss';
import '../node_modules/modern-normalize/modern-normalize.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
