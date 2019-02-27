import React, { Component } from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'


class Form extends Component {
    state = {
        type: this.props.match.path,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }

    componentDidUpdate() {
        if (this.state.type !== this.props.match.path) {
            this.setState({ type: this.props.match.path });
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.type === '/signup') {
            console.log(this.state);
        } else if (this.state.type === '/signin') {
            console.log(this.state.email, this.state.password);
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    render() {
        let formType;

        switch (this.state.type) {
            case '/signin':
                formType = <SignIn handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                break;
            case '/signup':
                formType = <SignUp handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                break;
            default:
                formType = <p>Ups..Something went wrong.</p>
        }
        return (
            formType
        );
    }
}

export default Form;