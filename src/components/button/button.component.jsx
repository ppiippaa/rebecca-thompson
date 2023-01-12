import React from 'react';
import './button.styles.scss';

const Button = ( { text, href } ) => {
    return (
        <button>
            <a href={href}>{text}</a>
        </button>
    );
};

export default Button;