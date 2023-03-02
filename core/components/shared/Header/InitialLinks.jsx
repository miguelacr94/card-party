import React from 'react'
import { Icons } from '../../../utils/icons'

const InitialLinks = () => {
    return (
        <div className='space-x-6 font-semibold text-white text-md flex'>
            <a  className='cursor-pointer '>Nosotros</a>
            <a  className='cursor-pointer '>Contáctenos</a>
            {/* <a className='flex items-center justify-center cursor-pointer'><span className='mr-1 '>{Icons.cart}</span>Mi carrito</a> */}
        </div>
    )
}

export default InitialLinks