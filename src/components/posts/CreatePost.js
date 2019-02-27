import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';

class CreatePost extends Component {
    state = {
        title: '',
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createPost(this.state)

    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }

    render() {

        return (
            <div className="create-post-container">
                <h3 className="title">Create Post <span>Now</span></h3>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="post_title" name="title" type="text" className="validate" onChange={this.handleChange} />
                                <label htmlFor="post_title">Post title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea" name="content" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                                <label htmlFor="textarea">Post Content</label>
                            </div>
                        </div>
                        <button type="submit" className="waves-effect waves-light btn red lighten-1 right">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost)