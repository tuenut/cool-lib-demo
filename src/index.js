import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import { SWRConfig } from "swr";

import { App } from './components/App';

import swrConfig from "./swrDataHooks/config";

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";


ReactDOM.render(
  <React.StrictMode>

    <HashRouter>
      <SWRConfig value={swrConfig}>

        <App/>

      </SWRConfig>
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
