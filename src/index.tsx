import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import store, { StoreContext } from './stores';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
);
