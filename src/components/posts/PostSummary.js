import React from 'react'


const PostSummary = ({ title, content }) => {
    return (
        <div className="post">
            <div className="post__title">{title}</div>
            <div className="post__body">{content}</div>
            <div className="post__date">3 December 2018</div>
        </div>
    );
}

export default PostSummary;