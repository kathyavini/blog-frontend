import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ScrollToTop } from './hooks/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/blog-frontend/">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
