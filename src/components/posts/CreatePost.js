import React from 'react';

const CreatePost = (props) => {
    const { handleChange, handleSubmit } = props;
    return (
        <div className="create-post-container">
            <h3 className="title">Create Post <span>Now</span></h3>
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="post_title" name="postTitle" type="text" className="validate" onChange={handleChange} />
                            <label htmlFor="post_title">Post title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea" name="postText" className="materialize-textarea" onChange={handleChange} ></textarea>
                            <label htmlFor="textarea">Post Content</label>
                        </div>
                    </div>
                    <button type="submit" className="waves-effect waves-light btn red lighten-1 right">Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;