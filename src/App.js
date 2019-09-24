import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch, NavLink} from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import HistorySample from "./HistorySample";
import CounterBox from "./CounterBox";
import ColorContext from "./ColorContext";
import {CounterProvider} from "./counter";

function App() {

    return (
        <div className="App">
            <CounterProvider>
                <CounterBox/>
            </CounterProvider>

        </div>
    );
}

export default App;
