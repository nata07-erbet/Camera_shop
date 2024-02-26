import ReactDOM from 'react-dom/client';
// import { HistoryRouter } from './project/components/history-router/history-router';
// import { browserHistory } from './src-browser-history';
import React from 'react';
import { App } from './project/components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
