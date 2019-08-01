import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="ui small image">
            <Link to="/">
                <img src={logo} />
            </Link>
        </div>
    );
}

export default Logo;