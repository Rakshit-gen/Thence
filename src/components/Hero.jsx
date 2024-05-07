import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <main>
        {/*  */}
        <section className='flex flex-col items-center justify-center mt-16'>
            <div>
                <h3 className='text-[36px] text-[#2DA950] font-Grace font-normal'>Success Stories</h3>
            </div>
            <div className='w-[658px]'>
                <h1 className='text-[56px] font-semibold font-Manrope text-center'>Every success journey we've encountered.</h1>
            </div>
        </section>

        {/*  */}
        <section className='flex flex-row items-center mt-20'>
            {/*  */}
            <div className='relative'>
                <img
                    src="/hero.svg"
                    alt="hero section"
                    className='rounded-[60px] w-[520px] relative left-[200px]'
                />
                <img
                    src="/spark.svg"
                    alt="spark"
                    className='w-[80px] relative -top-[380px] left-[60px] -rotate-[21deg] z-10'
                />
                <div className='relative bg-white rounded-2xl shadow-2xl w-[267px] h-[220px] flex flex-col justify-around px-8 -top-[450px] left-[70px]'>
                    <h2 className='font-Manrope font-semibold text-[64px]'>40%</h2>
                    <p className='text-[#828282] font-Manrope'>Achieved reduction in project execution time by optimising team availability</p>
                </div>
                <div className='relative bg-white w-[245px] h-[90px] rounded-full shadow-2xl flex flex-row justify-evenly items-center -top-[420px] left-[150px]'>
                    <div>
                        <img
                            src="/rocket.svg"
                            alt="rocket"
                            className='w-[52px]'
                        />
                    </div>
                    <div>
                        <h2 className='font-Manrope font-semibold text-[24px]'>10 DAYS</h2>
                        <p className='text-[#828282] font-Manrope'>Staff Deployment</p>
                    </div>
                </div>
                <div className='relative bg-[#002E18] rounded-[28.36px] w-[290px] h-[239px] shadow-2xl flex flex-col justify-evenly p-[30px] -top-[580px] left-[500px]'>
                    <div className='flex flex-row gap-3'>
                        <h2 className='text-white font-Manrope text-[63px] font-semibold'>$0.5</h2>
                        <h3 className='font-Manrope text-[#A6A3A0] font-medium mt-12'>MILLION</h3>
                    </div>
                    <div>
                        <p className='font-Manrope text-[#CCCCCC] text-[18px]'>Reduced client expenses by saving on hiring and employee costs.</p>
                    </div>
                </div>
            </div>
            
            {/*  */}
            <div className='absolute z-50 right-[100px] top-[550px]'>
                <h2 className='text-[40px] font-Manrope font-semibold w-[400px]'>Enhance fortune 50 company’s insights teams research capabilities</h2>
                <img
                    src="/dot.svg"
                    className='mt-8 mb-20'
                />
                <Button
                    backgroundColor="#1C1C1C"
                    borderColor=""
                    textColor="#FFFFFF"
                    hoverColor="#4E4E4E"
                    label="Explore More"
                    link="/"
                />
            </div>
        </section>
    </main>
  )
}

export default Hero