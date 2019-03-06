import React from 'react'
import moment from 'moment'


const PostSummary = ({ title, content, authorLN, authorFN, createdAt }) => {

    const time = moment(createdAt.toDate().toString()).calendar()
    return (
        <div className="post">
            <div className="post__title">{title}</div>
            <div className="post__body">{content}</div>
            <div className="post__date"><p>Posted by {`${authorFN} ${authorLN}`}</p>{time}</div>
        </div>
    );
}

export default PostSummary;