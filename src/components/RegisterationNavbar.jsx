import React from 'react'
import { X } from 'lucide-react';

const RegisterationNavbar = () => {
  return (
    <nav className='flex justify-center mt-8'>
        <div className='flex flex-row justify-between items-center w-[95%]'>
            <div>
                <img src="logo.svg" alt="logo" className='w-[127.94px] h-[47.39px]' />
            </div>
            <a href="/">
                <div className='flex items-center justify-center w-16 h-16 border-2 rounded-full'>
                    <X className='w-8 h-8' />
                </div>
            </a>
        </div>
    </nav>
  )
}

export default RegisterationNavbar