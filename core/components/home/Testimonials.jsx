import React from 'react'
import { TestimonialsData } from '../../utils/data'
import Carousel from 'react-material-ui-carousel'
const Testimonials = () => {
    return (
        <div className=' bg-primary w-full p-6'>
            <h1 className='text-[30px] text-white font-medium text-center  md:pb-12 mb-6'>Testimonios </h1>
            <div className='md:w-11/12 w-full flex md:flex-row flex-col space-y-6 md:space-y-0'>
                <div className='md:w-3/6 w-full flex justify-center items-center flex-col '>
                    <div className='md:w-[500px] md:text-center text-start text-white'>
                        <p className='text-white font-regular text-[20px]'>
                            Algunos testimonios de nuestros clientes
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis modi tempore eveniet sint aspernatur, possimus cupiditate totam consequatur molestias ducimus? Numquam, iusto tenetur exercitationem maxime eligendi quasi voluptatem perspiciatis eum!</p>

                    </div>

                </div>
                <div className='md:w-3/6 w-full'>
                    <div className=' md:w-[650px] md:px-4 w-full'>
                        <Carousel className={' m-auto'} >
                            {TestimonialsData.map((c, i) => {
                                return (
                                    <div key={i} className='md:w-[600px] md:h-[300px] flex md:flex-row flex-col md:space-x-4 items-center bg-white
                                                            shadow-lg rounded-lg border border-primary-light p-8'>
                                        <div className='md:w-3/6  w-full flex justify-center '>
                                            <div className='bg-gray-600 rounded-full w-[150px] h-[150px]'>
                                                <img
                                                    src={c.img}
                                                    className="w-full h-full"
                                                />
                                            </div>

                                        </div>
                                        <div className='md:w-4/6 w-full'>
                                            <h4 className='text-primary font-medium text-[30px]'>{c.Nombre}</h4>
                                            <p className='text-gray-[600] font-light text-[20px]'>{c.text}</p>
                                        </div>
                                    </div>
                                )
                            })

                            }
                        </Carousel>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Testimonials