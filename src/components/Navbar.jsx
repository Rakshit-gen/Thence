import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='h-[80px] border-[#EAEAEA] border-[1px] rounded-full mt-[24px] mx-[24px]'>
        <div className='flex flex- justify-between mx-4'>
            <div className='mt-5 mx-6'>
                <img src="/logo.svg" alt="" />
            </div>
            <div className='flex flex-row mt-3 gap-4'>
            <Button
                backgroundColor="#000000"
                borderColor="#EAEAEA"
                label="Get Projects"
                textColor="#1C1C"
                hoverColor="#F1F1F1"
            />
            <Button
                backgroundColor="#1C1C1C"
                borderColor="#256418"
                label="Onboard Talent"
            />
            </div>
        </div>
    </nav>
  )
}

export default Navbar