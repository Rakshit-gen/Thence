import React from 'react'

const Footer = () => {
  return (
    <section className='z-[200] flex items-center justify-center mt-8 mb-4'>
      <footer className='bg-[#F5F5F5] w-[96%] h-[144px] rounded-[40px] flex flex-row justify-between items-center px-8'>
        <div>
          <p className='text-[18px] font-Manrope text-[#1C1C1C] font-medium'>&copy; Talup 2023. All rights reserved</p>
        </div>
        <div className='flex flex-row gap-6'>
          <a href="/">
            <p className='text-[18px] font-Manrope text-[#1C1C1C] font-normal underline'>Terms & Conditions</p>
          </a>
          <a href="/">
            <p className='text-[18px] font-Manrope text-[#1C1C1C] font-normal underline'>Privacy Policy</p>
          </a>
        </div>
      </footer>
    </section>
  )
}

export default Footer