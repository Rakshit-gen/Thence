import React, { useState } from 'react';

const InputField = ({ backgroundColor, textColor, type, placeholder, focusedBackgroundColour, focusedBorderColour }) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const inputStyle = {
        backgroundColor: backgroundColor,
        width: 417,
        height: 75,
        color: textColor,
        padding: '1rem 1.75rem',
        border: `1px solid ${isFocused ? focusedBorderColour : 'transparent'}`,
        background: isFocused ? focusedBackgroundColour : backgroundColor,
        fontFamily: 'Manrope',
        borderRadius: '9999px',
        transition: 'all 0.2s ease',
        fontSize: 24,
        fontWeight: 500,
    };

    return (
        <input
            type={type}
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
        />
    );
};

export default InputField;