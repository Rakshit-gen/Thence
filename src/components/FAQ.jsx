import React, { useState } from 'react'
import Divider from './Divider'
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';

const FAQ = () => {

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleAccordion1 = () => setIsOpen1(!isOpen1);
  const toggleAccordion2 = () => setIsOpen2(!isOpen2);
  const toggleAccordion3 = () => setIsOpen3(!isOpen3);
  const toggleAccordion4 = () => setIsOpen4(!isOpen4);
  const toggleAccordion5 = () => setIsOpen5(!isOpen5);

  return (
    <section className='flex items-center justify-center -mt-28'>
      <main className='bg-[#E8EEE7] w-[96%] h-fit rounded-[36px] -mt-96 flex flex-row'>
        <div className='pt-[80px] pl-[80px]'>
          <h3 className='font-Grace text-[32px] text-[#9E9D9D] font-normal'>What’s on your mind</h3>
          <h2 className='font-Manrope text-[60px] text-[#1C1C1C] font-semibold'>Ask Questions</h2>
        </div>
        <div className='w-[45%] mt-[128px] mx-auto'>
          <div className='flex flex-col justify-between mb-4'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-[20px] font-Manrope font-semibold text-[#1C1C1C] w-[65%]'>Do you offer freelancers?</p>
              {isOpen1 ? <Minus onClick={toggleAccordion1} className='cursor-pointer text' /> : <Plus onClick={toggleAccordion1} className='cursor-pointer text' />}
            </div>
            {isOpen1 && (
              <div>
                <p className='text-[15px] text-[#617275] font-Manrope font-medium mt-4 mb-2'>Yes, we offer freelancers! Explore our opportunities and benefits for freelancers. Reach out for more details on collaboration.</p>
              </div>
            )}
          </div>
          <Divider />
          <div className='flex flex-col justify-between mt-4 mb-4'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-[20px] font-Manrope font-semibold text-[#1C1C1C] w-[65%]'>What's the guarantee that I will be satisfied with the hired talent?</p>
              {isOpen2 ? <Minus onClick={toggleAccordion2} className='cursor-pointer text' /> : <Plus onClick={toggleAccordion2} className='cursor-pointer text' />}
            </div>
            {isOpen2 && (
              <div>
                <p className='text-[15px] text-[#617275] font-Manrope font-medium mt-4 mb-2'>Rest assured, our stringent selection process ensures talented individuals tailored to your needs, ensuring satisfaction and success in every collaboration.</p>
              </div>
            )}
          </div>
          <Divider />
          <div className='flex flex-col justify-between mt-4 mb-4'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-[20px] font-Manrope font-semibold text-[#1C1C1C] w-[65%]'>Can I hire multiple talents at once?</p>
              {isOpen3 ? <Minus onClick={toggleAccordion3} className='cursor-pointer text' /> : <Plus onClick={toggleAccordion3} className='cursor-pointer text' />}
            </div>
            {isOpen3 && (
              <div>
                <p className='text-[15px] text-[#617275] font-Manrope font-medium mt-4 mb-2'>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
              </div>
            )}
          </div>
          <Divider />
          <div className='flex flex-col justify-between mt-4 mb-4'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-[20px] font-Manrope font-semibold text-[#1C1C1C] w-[65%]'>Why should I not go to an agency directly?</p>
              {isOpen4 ? <Minus onClick={toggleAccordion4} className='cursor-pointer text' /> : <Plus onClick={toggleAccordion4} className='cursor-pointer text' />}
            </div>
            {isOpen4 && (
              <div>
                <p className='text-[15px] text-[#617275] font-Manrope font-medium mt-4 mb-2'>Gain personalized attention, cost efficiency, and a tailored approach by choosing our platform. Skip agency fees and bureaucracy for a seamless talent acquisition experience.</p>
              </div>
            )}
          </div>
          <Divider />
          <div className='flex flex-col justify-between mt-4 mb-6'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-[20px] font-Manrope font-semibold text-[#1C1C1C] w-[65%]'>Who can help me pick a right skillset and duration for me?</p>
              {isOpen5 ? <Minus onClick={toggleAccordion5} className='cursor-pointer text' /> : <Plus onClick={toggleAccordion5} className='cursor-pointer text' />}
            </div>
            {isOpen5 && (
              <div>
                <p className='text-[15px] text-[#617275] font-Manrope font-medium mt-4 mb-2'>Our expert advisors are dedicated to assisting you in selecting the ideal skill set and duration tailored to your project's unique requirements.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  )
}

export default FAQ