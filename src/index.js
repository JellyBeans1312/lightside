import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from "react-router-dom";

const router = (
  <Router>
    <App/>
  </Router>
)

/* istanbul ignore next */
ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
