import React from 'react'
import { StepsData } from '../../utils/data'
import AOS from 'aos';
import { useEffect } from 'react';

const Steps = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);



    return (
        <div className=' flex flex-col  md:h-[600px] items-center'>
            <h1 className='text-white text-[30px] font-medium text-center z-10 mt-12'>¿Como puedo adquirir mis tarjetas?</h1>
            <div className='w-full h-[300px] bg-primary absolute' />


            <div className='flex md:flex-row flex-col w-full md:mt-24 mt-8 md:space-x-4 md:w-11/12 space-y-4 md:space-y-0 px-2 '>
                {StepsData.map((s, i) => {
                    return (
                        <div

                            key={i}
                            className={`${i == 1 ? 'md:-translate-y-12' : ''} transform w-full md:w-3/6 flex bg-white
                        flex-col justify-center items-center h-[400px] p-6 shadow-lg border border-primary-light rounded-xl`}>
                            <h3 className='text-[30px] font-regular text-gray-600'>{s.title}</h3>

                            <div className='w-[150px] h-[150px] bg-gray-100 my-6'>

                            </div>

                            <p className='text-center text-[18px] text-gray-500 '>{s.text}</p>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Steps