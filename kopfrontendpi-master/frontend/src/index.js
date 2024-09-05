import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './defaults.css';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css'
import store from './store';
import {Provider} from 'react-redux'
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
   
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
