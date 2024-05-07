import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Button = ({ backgroundColor, borderColor, textColor, hoverColor, label, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovered ? hoverColor : backgroundColor,
        border: borderColor,
        color: textColor,
        padding: '1rem 1.75rem',
        fontSize: '1.125rem',
        border: '1px solid',
        fontFamily: 'Manrope',
        borderRadius: '9999px',
        transition: 'background-color 0.2s ease',
    };

    return (
        <BrowserRouter>
            <Link 
                style={buttonStyle} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {window.location.href = link}}
                className='cursor-pointer'
            >
                {label}
            </Link>
        </BrowserRouter>
    );
};

export default Button;