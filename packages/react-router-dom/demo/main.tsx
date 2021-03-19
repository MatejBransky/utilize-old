import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from '@utilize/react-router-dom';
import App from './modal-gallery';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
