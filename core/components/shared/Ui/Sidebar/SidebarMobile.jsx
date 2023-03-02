import React from 'react'
import useOpen from '../../../../utils/hoocks/useOpen';
import { Icons } from '../../../../utils/icons';
import MenuMobil from '../Menu/MenuMobil';

const SidebarMobile = () => {

    const { isOpen, useOpenMenu } = useOpen();

    return (
        <header
            // ref={ref}
            className={`fixed top-20 z-[60] flex flex-col w-full 
             h-full  bg-primary md:hidden 
             duration-300 shadow-2xl p-4 ${isOpen ? "left-0" : "-left-full"
                }`}
        >
            <div className='w-full flex justify-end'>
                <button className='text-white text-[25px]' onClick={() => useOpenMenu()}>{Icons.close2}</button>
            </div>

            <MenuMobil />


        </header>
    )
}

export default SidebarMobile