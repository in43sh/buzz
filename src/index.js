import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import './scss/main.css';

// Create the root element and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// Register or unregister the service worker for offline capabilities
serviceWorker.unregister(); // Change to 'register()' if needed
