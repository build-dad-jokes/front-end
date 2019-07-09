import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm/LoginForm";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact={true} component={Home} />
                <Route path="/login" component={LoginForm} />
            </BrowserRouter>
        );
    }
}

export default App;