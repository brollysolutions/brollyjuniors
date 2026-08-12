import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { initAnalytics } from './lib/analytics.js';
import './styles/global.css';

const container = document.getElementById('root');

const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* A production build ships prerendered HTML, so the markup is already there and
   React only needs to attach to it. The dev server serves an empty shell and
   still needs a full client render. Checking for children covers both without
   a build-time flag. */
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, tree);
} else {
  ReactDOM.createRoot(container).render(tree);
}

initAnalytics();
