import React, { Component } from 'react';
import PostSummary from "./PostSummary";

const PostList = ({ posts }) => {
    const postList = posts && posts.map(post => <PostSummary key={post.id} title={post.title} content={post.content} />)
    return (
        <div className="post-list">
            {postList}
        </div>
    );
}

export default PostList;