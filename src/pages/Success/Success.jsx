import React, { useState, useEffect } from 'react';

const Success = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1)
        {
          clearInterval(countdownInterval);
          window.location.href = '/';
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <main>
      <div>
        <img
          src="logo.svg"
          alt="logo"
          className='w-[127px] h-[47px] mt-[31.89px] ml-[52.22px]'
        />
      </div>
      <div className='flex flex-col items-center justify-between pb-4'>
        <div className='flex flex-col items-center justify-evenly w-[718px] h-[357px] mt-20'>
          <img
            src="check.svg"
            alt="checkmark"
            className='w-[80px] h-[80px] mb-12'
          />
          <h2 className='font-Grace text-[#2DA950] text-center text-[36px]'>Success Submitted</h2>
          <h1 className='text-[56px] font-Manrope text-center font-medium'>Congratulations</h1>
          <p className='text-[27px] font-Manrope text-[#727272] font-normal text-center'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
        </div>
        <div className='mt-28'>
          <p className='text-[20px] font-Manrope text-[#727272] font-normal text-center'>
            Redirecting you to Homepage in <span className='font-semibold text-black'>{countdown} Seconds</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Success;
