import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';

import './styles.css';


class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { email, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props;

        return (
            <div className="login-form-wrapper" onSubmit={this.onSubmit}>
                <form name="loginForm">
                    <div className="form-group">
                        <label>Username</label>
                        <input name="email" onChange={e => this.setState({ email: e.target.value })} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" onChange={e => this.setState({ password: e.target.value })} />
                    </div>

                    <div className="login-button">
                        <button type="submit" className="btn" onClick={this.onSubmit}>
                            Login
                        </button>
                    </div>

                    {isLoginPending && <div>Please wait...</div>}
                    {isLoginSuccess && <div>Welcome Back!</div>}
                    {loginError && <div>{loginError.message}</div>}
                </form>
            </div>
        );

    }

    onSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);