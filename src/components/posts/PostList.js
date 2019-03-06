import React from 'react';
import PostSummary from "./PostSummary";
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    const postList = posts && posts.map(post => <Link key={post.id} to={`/post/${post.id}`}><PostSummary title={post.title} content={post.content} authorFN={post.authorFirstName} authorLN={post.authorLastName} createdAt={post.createdAt} /></Link>) /* zamiast wypisywac wszystkie mozna przekazac po prostu caly post */
    return (
        <div className="post-list">
            {postList}
        </div>
    );
}

export default PostList;