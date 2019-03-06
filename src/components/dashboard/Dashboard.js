import React, { Component } from 'react'
import Notification from './Notification'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    state = {}
    render() {
        const { posts, auth, notifications } = this.props;

        if (!auth.uid) {
            return <Redirect to='/signin' />
        } else {
            return (
                <div className="dashboard">
                    <PostList posts={posts} /> {/* wyciagnieta tablice postow przekazuje jako props do komponentu PostList. */}
                    <Notification data={notifications} />
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts,   // odnosi się do reducera rootReducer, pozniej wybieram właściwośc post, która odnosi się do reducera Post, który zwraca state w ktorym znajduję się tablica posts, w której umieszczone są pojedyncze posty.
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
// export default connect(mapStateToProps)(Dashboard);

export default compose(
    connect(mapStateToProps), //teraz w propsach Dashboard będzie znajdować się props: posts, czyli tablica postów.
    firestoreConnect([
        { collection: 'posts', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)