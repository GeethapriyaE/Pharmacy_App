import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";
import { Provider } from 'react-redux';
import  store from './Redux/Store';

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Provider store={store} initialState={initialState} reducer={reducer}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
