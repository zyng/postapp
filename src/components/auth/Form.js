import React, { Component } from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
import CreatePost from '../posts/CreatePost'

class Form extends Component {
    state = {
        type: this.props.match.path,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        postTitle: '',
        postText: '',
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
        } else if (this.state.type === '/create') {
            console.log({ title: this.state.postTitle, content: this.state.postText });
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
            case '/create':
                formType = <CreatePost handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
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