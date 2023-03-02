import React from 'react'
import InvitationCard from '../shared/InvitationCard'
import Carousel from 'react-material-ui-carousel'

const MostWanted = () => {
    return (
        <div className='text-gray-600 w-full text-center flex flex-col justify-center items-center md:py-24 mt-12'>
            <h1 className='font-medium text-[25px] md:text-[30px]  text-center md:w-[400px] px-2'>Descubre nuestros productos mas destacados</h1>
            <div className='flex flex-col md:flex-row md:w-11/12 w-full md:mt-24 mt-8'>
                <div className='sm:w-3/6 w-full flex flex-col items-center justify-center'>
                    <h3 className='text-[30px]'>Title</h3>
                    <p className='md:w-[500px] text-[18px] md:text-[20px]  px-4 md:text-center text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga rem corrupti magnam,
                        quas, ipsam eligendi quisquam fugiat reiciendis eum temporibus, facilis distinctio doloribus.
                        Cupiditate corrupti accusantium optio sunt quos explicabo.
                    </p>
                </div>
                <div  className='sm:w-3/6 w-full bg-primary  flex justify-center md:p-8 p-4 md:rounded-xl mt-8 md:mt-0 '>

                    <div className="w-[800px]  ">
                        <Carousel indicators={false} animation='slide' >
                            {[1, 2, 3, 4].map((a,i) => (
                                <InvitationCard key={i} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostWanted