import React, { Component } from 'react';
import Notification from './Notification'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    state = {}
    render() {
        const { posts } = this.props;

        return (
            <div className="dashboard">
                <PostList posts={posts} /> {/* wyciagnieta tablice postow przekazuje jako props do komponentu PostList. */}
                <Notification />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,   // odnosi się do reducera rootReducer, pozniej wybieram właściwośc post, która odnosi się do reducera Post, który zwraca state w ktorym znajduję się tablica posts, w której umieszczone są pojedyncze posty.

    }
}

export default connect(mapStateToProps)(Dashboard); //teraz w propsach Dashboard będzie znajdować się props: posts, czyli tablica postów.