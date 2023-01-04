import React from 'react';
import './button.styles.scss';

const Button = ( { text, fontColor, backgroundColor, href } ) => {
    return (
        <button><a href="">{text}</a></button>
    );
};

export default Button;