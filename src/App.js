import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch, NavLink} from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import HistorySample from "./HistorySample";

function App() {
    const activeStyle = {
        background: 'black',
        color: 'white',
    };

    return (
        <div className="App">
            <ul>
                <li>
                    <Link to={"/"}>home</Link>
                </li>
                <li>
                    <Link to={"/about"}>about</Link>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profile/geonu">
                    <Link to={"/profile/geonu"}>건우</Link>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profile/geonho"git>
                    <Link to={"/profile/geonho"}>건호</Link>
                    </NavLink>
                </li>
                <li>
                    <Link to={"/history"}>history</Link>
                </li>
            </ul>
            <hr/>
            <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path={["/about", "/info"]} component={About}/>
            <Route path="/profile/:username" component={Profile}/>
            <Route path="/history" component={HistorySample}/>
            <Route render={({location}) => (
                <div>
                    <h2>이 페이지는 존재하지 않습니다</h2>
                    <p>{location.pathname}</p>
                </div>
            )}/>
            </Switch>
        </div>
    );
}

export default App;
