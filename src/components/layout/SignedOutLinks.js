import React from 'react';
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul>
            <li> <NavLink exact to='/signin'>Login</NavLink> </li>
            <li> <NavLink exact to='/signup'>Signup</NavLink> </li>
        </ul>
    );
}

export default SignedOutLinks;