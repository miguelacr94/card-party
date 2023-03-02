import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { BannerH, BannerV } from '../../../utils/data'
import Img from '../Img'

const BannerHome = () => {


    return (
        <div className='w-full  h-auto'>

            <Carousel className='hidden md:block' indicators={false} interval={10000} duration={1000} animation='slide' >
                {
                    BannerH.map((item, i) => {
                        return (
                            <>
                                <div key={i} className={`min-h-[600px] w-full  ${item?.bg} `}>
                                    <Img
                                        src={item.img}
                                    />
                                </div>

                            </>


                        )
                    })
                }
            </Carousel>


            <Carousel className='block md:hidden' indicators={false} >
                {
                    BannerV.map((item, i) => {
                        return (
                            <>
                                <div key={i} className={`h-auto w-full  ${item?.bg} `}>
                                    <Img
                                        src={item.img}
                                    />
                                </div>

                            </>


                        )
                    })
                }
            </Carousel>

        </div>

    )
}

export default BannerHome