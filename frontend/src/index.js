import React from 'react';
import ReactDOM from 'react-dom';

// Styles and Bootstrap Import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import './styles/App.css';
import './styles/css/main.css'


import App from './App';

import { Provider } from './Context';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
