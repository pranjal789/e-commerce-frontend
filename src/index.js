import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';
import store from "./store"
import {Provider} from "react-redux";
const options = {
  position: 'bottom center',  
  timeout: 2000
}
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
    </Provider>
,
  document.getElementById('root')
);
