import React from 'react';
import ReactDOM from 'react-dom';

// Styles and Bootstrap Import
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
