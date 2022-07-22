import React from 'react';
import ReactDOM from 'react-dom/client';
import store from '@store/store.js';
import { Provider } from 'react-redux'

import '@styles/index.css';
import App from '@containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

