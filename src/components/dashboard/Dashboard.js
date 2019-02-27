import React, { Component } from 'react';
import Notification from './Notification'
import PostList from '../posts/PostList'

class Dashboard extends Component {
    state = {}
    render() {
        return (


            <div className="dashboard">
                <PostList />
                <Notification />
            </div>




        );
    }
}

export default Dashboard;