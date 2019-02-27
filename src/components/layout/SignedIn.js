import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedIn = () => {
    return (
        <ul>
            <li> <NavLink to='/create'>New Post</NavLink> </li>
            <li> <NavLink to='/logout'>Logout</NavLink> </li>
            {/* <li> <NavLink to='/'></NavLink> </li> */}
        </ul>
    );
}

export default SignedIn;