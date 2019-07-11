import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";
import UserJokes from "./components/UserJokes";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <div>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/signup" component={SignUpForm} />
                    <Route path="/user" component={UserJokes} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;