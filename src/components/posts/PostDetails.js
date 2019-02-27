import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const PostDetails = (props) => {
    const { post } = props;
    // const postId = props.match.params.id;

    if (post) {
        return (
            <div className="post-summary">
                <div className="post">
                    <div className="post__title">{post.title}</div>
                    <div className="post__body">{post.content}</div>
                    <div className="post__date">{`Posted by  ${post.authorFirstName} ${post.authorLastName} 3 December 2018`} </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center"><p>Loading post...</p></div>
        )
    }
}

const mapStateToStore = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    return {
        post //teraz w porpsach jest wlasciwosc post która przechowuje dane o poscie o pobranym z url id.
    }
}

export default compose(
    connect(mapStateToStore),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails);