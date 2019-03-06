import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    render() {
        const { authError, auth } = this.props;

        if (auth.uid) {
            return <Redirect to='/' />
        }
        else {
            return (
                <div className="signin-container">
                    <h3 className="title">Sign In <span>Now</span></h3>
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="email" id="email" type="email" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="password" id="password" type="password" className="validate" onChange={this.handleChange} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>

                            <button type="submit" className="waves-effect waves-light btn red lighten-1 right">Sign In</button>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);