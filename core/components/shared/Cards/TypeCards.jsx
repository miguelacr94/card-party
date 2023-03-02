import React from 'react'
import { Icons } from '../../../utils/icons'
import AOS from 'aos';
import { useEffect } from 'react';
import { CardType } from '../../../utils/data';
const TypeCards = () => {



    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);



    return (
        <div className='w-full'>
            <p className='text-center h-14 flex items-center 
             justify-center text-primary text-4xl font-semibold '>Invitaciones Digitales</p>

            <div className='w-full flex md:flex-row flex-col md:h-[500px] mt-12'>
                <div className='w-full md:w-3/6 bg-primary-Hover flex flex-col justify-center items-center space-y-4 p-4 '>
                    <h2 className='text-white text-[30px] '>Nuestras tarjetas</h2>
                    <p className='max-w-[500px] text-center text-white text-[18px]'>
                        La gran ventaja que encontrarás con nuestras invitaciones digitales es que puedes
                        enviarla desde y hacia cualquier lugar del mundo en
                        cuestión de minutos y a
                        través de la red social de tu
                        preferencia
                    </p>
                </div>
                <div className='w-full md:w-3/6 bg-gray-300 flex justify-center items-center'>
                    <div className='mt-2 grid gap-4 lg:grid-cols-3 grid-cols-2 p-4 md:p-4 overflow-hidden'>


                        {CardType.map((c, i) => {
                            return (
                                <div
                                    key={i}
                                    data-aos="fade-up"
                                    data-aos-duration={`${i}000`}
                                    className='duration-300 transition ease-in-out delay-150 
                                 hover:-translate-y-0   bg-white rounded-lg text-gray-600 shadow-sm
                                   h-14 flex items-center justify-center  cursor-pointer w-full 
                                   space-y-0.5 border-b-2  px-4 hover:text-white hover:bg-primary 
                                  
                                   '>

                                    <p className='flex items-center space-x-2  text-center '>
                                        <span className='text-2xl'>{c.icon}</span>
                                        <span>{c.name}</span>
                                    </p>
                                </div>
                            )
                        })

                        }
                    </div>

                </div>

            </div>


        </div>
    )
}

export default TypeCards