import React, { useEffect, useState } from 'react';
import InputField from './InputField';
import Success from '../pages/success/Success';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsValidEmail(validateEmail(event.target.value));
    };
    
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    useEffect(() => {
        setIsValidEmail(validateEmail(email));
    }, [email]);

    const handleSubmit = () => {
        if (name.trim() === '' || email.trim() === '')
            setWarningMessage('Please fill out all fields.');
        else if (!isValidEmail)
            setWarningMessage('Please enter a valid email address.');
        else window.location.href = '/Success';
    };

    return (
        <main className='flex items-center justify-center mt-[40px]'>
            <div className='w-[588px] h-[538px] flex flex-col items-center justify-center '>
                <div>
                    <h2 className='text-[36px] font-Grace text-[#2DA950] text-center'>Registration Form</h2>
                    <h1 className='text-[56px] font-Manrope font-semibold text-center'>Start your success Journey here!</h1>
                </div>
                <div className='flex flex-col items-center mt-8 justify-evenly gap-[36px]'>
                    <InputField
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleNameChange}
                        backgroundColor="#EFEFEF"
                        focusedBorderColour="#537FF1"
                        focusedBackgroundColour="#F5F8FF"
                        textColor="#000000"
                    />
                    <InputField
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        backgroundColor="#EFEFEF"
                        focusedBorderColour="#537FF1"
                        focusedBackgroundColour="#F5F8FF"
                        textColor="#000000"
                    />
                </div>
                {warningMessage && <div className="text-red-500">{warningMessage}</div>}
                {/* <button
                    className={`w-[417px] pt-[26.11px] pr-[49.61px] pb-[26.11px] pl-[41.78px] rounded-full mt-10 font-Manrope font-semibold text-[18px] text-white
                        ${
                            name.trim()!=='' && email.trim()!=='' && isValidEmail ? 'bg-[#2DA950] hover:bg-[#1E8449] cursor-pointer' : 'bg-[#C9C9C9] cursor-not-allowed'
                        }`}
                    onClick={handleSubmit}
                    disabled={name.trim() === '' || email.trim() === '' || !isValidEmail}
                >
                    Submit
                </button> */}
                <a href="/Success">
                    <button>Submit</button>
                </a>
            </div>
        </main>
    );
};

export default RegistrationForm;
