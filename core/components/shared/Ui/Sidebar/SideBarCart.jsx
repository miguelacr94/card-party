import React from 'react'
import useOpen from '../../../../utils/hoocks/useOpen';
import { Icons } from '../../../../utils/icons';
import CartContent from '../Menu/CartContent';

const SideBarCart = () => {

    const { isOpenCart, useOpenCart } = useOpen();

    return (
        <header
            // ref={ref}
            className={`fixed md:top-16 top-20  md:mt-[52px] z-[60] flex flex-col w-11/12 md:max-w-[400px]
     h-full  bg-primary 
     duration-300 shadow-2xl p-4 ${isOpenCart ? "right-0" : "-right-full"
                }`}
        >


            <CartContent />


        </header>
    )
}

export default SideBarCart