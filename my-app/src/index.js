import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { PersistGate } from "redux-persist/es/integration/react";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from "./services/history";
import configureStore from "./config/store";
const { store, persistor } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>

            <Router  history={history} >
                <App />
            </Router>
        </PersistGate>
    </Provider>,

 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
