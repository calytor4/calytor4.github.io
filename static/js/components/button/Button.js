import React from 'react';
import './Button.scss';

const Button = ({
    className,
    handleClick,
    title
}) => {
    return ( <
        button className = {
            `btn ${className}`
        }
        onClick = {
            handleClick
        } > {
            title
        } <
        /button>
    );
};

export default Button;