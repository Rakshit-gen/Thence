import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='h-[80px] border-[#EAEAEA] border-[1px] rounded-full mt-[24px] mx-[24px]'>
        <div className='flex justify-between mx-4 flex-'>
            <div className='mx-6 mt-5'>
                <img src="/logo.svg" alt="" />
            </div>
            <div className='flex flex-row gap-4 mt-3'>
            <Button
                backgroundColor="#FFFFFF"
                borderColor="#EAEAEA"
                label="Get Projects"
                textColor="#000000"
                hoverColor="#EAEAEA"
                link="/"
            />
            <Button
                backgroundColor="#1C1C1C"
                borderColor="#1C1C1C"
                label="Onboard Talent"
                textColor="#FFFFFF"
                hoverColor="#4E4E4E"
                link="/"
            />
            </div>
        </div>
    </nav>
  )
}

export default Navbar