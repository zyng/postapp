import React, { Component } from 'react';

class PostSummary extends Component {
    state = {}
    render() {
        return (

            <>
                <div className="post">
                    <div className="post__title">Post title 1</div>
                    <div className="post__body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil ea ratione consectetur a sequi omnis consequatur, quos voluptate corporis maiores aliquid sed debitis perferendis quo ipsa delectus architecto enim!</div>
                    <div className="post__date">3 December 2018</div>
                </div>
            </>
        );
    }
}

export default PostSummary;