import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.password === this.state.passwordConfirm) {
            this.props.signUp({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        }
        else {
            console.log('nope');

        }

    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    render() {

        const { auth, authError } = this.props;

        if (auth.uid) {
            return <Redirect to='/' />
        }
        else {
            return (
                <div className="signup-container">
                    <h3 className="title">Sign Up <span>Now</span></h3>
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" name="firstName" type="text" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" name="lastName" type="text" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="password" name="password" type="password" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="password_confirm" name="passwordConfirm" type="password" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="password_confirm">Password (Confirm)</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" name="email" type="email" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <button type="submit" className="waves-effect waves-light btn red lighten-1 right">Sign Up</button>
                            <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);