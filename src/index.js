// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
// ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback function');

ReactDOM.render(
    <App/>,
    document.getElementById('root'));