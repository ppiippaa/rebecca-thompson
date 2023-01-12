import React from 'react';
import { Link } from 'react-router-dom'
import './button.styles.scss'

const ButtonLocalLink = ({ href, text }) => {
    return (
        <button>
            <Link to={href}>{text}</Link>
        </button>
    );
};

export default ButtonLocalLink;