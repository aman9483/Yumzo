import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux/Store.js'; // Import your Redux store
import StoreContextProvider from './context/StoreContext.jsx'; // Import the correct Context provider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Redux Provider */}
    <StoreContextProvider> {/* Context Provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContextProvider>
  </Provider>
);
