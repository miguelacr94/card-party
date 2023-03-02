import React, { useContext } from 'react'
import { ContextCard } from '../../../../providers/products/context'
import { getTotal } from '../../../../providers/user/actions'
import { Icons } from '../../../../utils/icons'
import CardContentCard from '../../Cart/CardContentCard'

const CartContent = () => {
    const { cart, setCart } = useContext(ContextCard)
    return (
        <div className='text-white text-[20px] space-y-4 mt-0'>
            <h1 className='text-center'>Mis tarjetas</h1>
            <CardContentCard />
            <div>
                <div className='flex justify-between px-6 mt-4'>
                    <p className='text-dark-light text-xl font-medium'>Total:</p>
                    <p className='text-dark-light font-medium'> ${cart.length > 0 ? 0 : 0}</p>
                </div>
            </div>
            <div className="mt-9 h-20 flex justify-center items-center">
                <button
                    disabled={cart.length <= 0}
                    onClick={''}
                    className="w-5/6 hover:bg-black hover:text-white text-dark-light h-10  disabled:opacity-75
                     rounded-md border border-black font-bold font-sans" >Pagar</button>
            </div>
        </div>
    )
}

export default CartContent