import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form-wrapper">
                <form name="loginForm">
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <br/>
                    <label>Password:</label>
                    <input type="password" name="password" />

                    <input type="submit" value="Login" />
                 </form>
              </div>
        );

    }
}

export default LoginForm;