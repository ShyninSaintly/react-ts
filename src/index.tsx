import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import App from "./App.tsx";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

