import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { store } from './store'

import theme from './theme';

import App from './App';

ReactDOM.render(
    <Provider store={store} >
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <App />
        </ThemeProvider >
        <ToastContainer />
    </Provider >,
    document.getElementById('root')
);
