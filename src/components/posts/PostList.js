import React from 'react';
import PostSummary from "./PostSummary";
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    const postList = posts && posts.map(post => <Link to={`/post/${post.id}`}><PostSummary key={post.id} title={post.title} content={post.content} /></Link>)
    return (
        <div className="post-list">
            {postList}
        </div>
    );
}

export default PostList;