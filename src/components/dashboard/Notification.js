import React, { Component } from 'react';
import moment from 'moment'

const Notification = (props) => {
    const { data } = props;


    return (
        <div className="notification">

            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {data && data.map(notification => {
                            return (
                                <li key={notification.id}>
                                    <span className="pink-text">{notification.user}</span>
                                    <span>{notification.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Notification;