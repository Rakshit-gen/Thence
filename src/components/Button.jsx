import React, { useState } from 'react';

const Button = ({ backgroundColor, borderColor, textColor, hoverColor, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovered ? hoverColor : backgroundColor,
        border: `1px solid ${borderColor}`,
        color: textColor,
        padding: '1rem 1.75rem',
        fontSize: '1.125rem',
        // border: '1px solid',
        fontFamily: 'Manrope',
        borderRadius: '9999px',
        transition: 'background-color 0.2s ease',
    };

    return (
            <a
                style={buttonStyle} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {window.location.href = link}}
                className='cursor-pointer'
            >
                {label}
            </a>
    );
};

export default Button;