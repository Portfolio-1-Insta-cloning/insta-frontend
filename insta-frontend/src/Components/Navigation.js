import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to = "/login">Log In</NavLink>
            <NavLink to = "/signup">Sign Up</NavLink>
        </div>
    )
}

export default Navigation;