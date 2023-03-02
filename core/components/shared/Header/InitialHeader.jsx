import React from 'react'
import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'
import WhatsappIcon from '../Icons/WhatsappIcon'
import InitialLinks from './InitialLinks'

export const InitialHeader = () => {
    return (
        <div className='bg-primary h-11 w-full fixed top-0 z-30 flex justify-end items-center px-12 hidden md:block'>
            <div className='w-5/6 flex justify-start h-full items-center'>
                <ul className="flex space-x-4 text-white">
                    <li>
                        <FacebookIcon size="1.5em" />
                    </li>
                    <li>
                        <InstagramIcon size="1.5em" />
                    </li>
                    <li>
                        <WhatsappIcon size="1.5em" />
                    </li>
                </ul>
            </div>
            <InitialLinks />
        </div>
    )
}
