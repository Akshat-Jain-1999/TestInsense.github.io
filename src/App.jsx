import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Notification from './Notification';
import Settings from './Settings';
import Recent from './Recent';
import Footer from './Footer';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
const App =() =>{
    return (
        <>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component ={Home} />
            <Route exact path="/settings" component ={Settings} />
            <Route exact path="/notification" component ={Notification} />
            <Route exact path="/recent" component ={Recent} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
        <Footer/>
        </>
    )
}


export default App;