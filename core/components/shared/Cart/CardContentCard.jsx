import React, { useContext } from 'react'
import { ContextCard } from '../../../providers/products/context'
import { currency } from '../../../utils/helpers';
import useCart from '../../../utils/hoocks/useCart';
import { Icons } from '../../../utils/icons';
import Img from '../Img';

const CardContentCard = () => {

    const { cart } = useContext(ContextCard);
    const { removeFromCart } = useCart();

    console.log(cart);
    return (
        <div className='max-h-[400px]  overflow-auto'>
            {cart && cart.map((p, index) => {
                return (
                    <div key={index} className="flex mt-4 flex-wrap justify-center items-center border-b border-white">
                        <div className='w-5/12 p-2'>
                            <Img

                                src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
                                className="object-contain max-h-[400px] overflow-hidden rounded-lg"

                            />
                        </div>

                        <div className="w-7/12 h-40  flex  " key={index}>
                            <div className=" justify-start items-start w-5/6">
                                <p className="text-start text-[20px] font-medium  text-dark-light">titulo tarjeta</p>
                                <p className='py-2 h-24 text-sm'>descripción</p>
                                <p className="mt-3 font-medium text-dark-light text-cart text-start">{currency(20000)}</p>

                            </div>


                            <div className="mt-2 flex flex-wrap md:justify-start md:items-start">

                                <div className="ml-2">
                                    <button
                                        onClick={() => removeFromCart(p)}
                                        className="rounded-full w-8 h-8 border border-red flex justify-center items-center text-red">
                                        {Icons.close2}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-line md:w-full bg-grey-line mt-4 m-auto " />
                        <hr className='mt-8' />
                    </div>

                )
            })}
        </div>
    )
}

export default CardContentCard