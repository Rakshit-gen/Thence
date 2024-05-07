import React, { useState } from 'react';

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
        <a href={link} 
           style={buttonStyle} 
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
        >
            {label}
        </a>
    );
};

export default Button;