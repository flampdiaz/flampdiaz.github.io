import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './asset/css/bootstrap.min.css'
import './asset/css/fonts.css'
import './asset/css/base.css'

import './asset/css/section/navbar.css'
import './asset/css/section/header.css'
import './asset/css/section/portfolio.css'
import './asset/css/section/about.css'
import './asset/css/section/experience.css'
import './asset/css/section/contact.css'
import './asset/css/section/footer.css'

import './asset/css/agency.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
