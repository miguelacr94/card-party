import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import useOpen from '../../../../utils/hoocks/useOpen';
import { Icons } from '../../../../utils/icons'
import { Routes } from '../../../../utils/routes';

const MenuMobil = () => {

    const router = useRouter();
    const { isOpen, useOpenMenu } = useOpen();
    const [show, setShow] = useState(false);

    const routes = (route) => {
        useOpenMenu();
        router.replace(route)
    }

    const typeCard = [
        {
            text: 'Animada',
            route: `${Routes.invitations}/animated`
        },
        {
            text: 'Estática',
            route: `${Routes.invitations}/static`
        },
        {
            text: 'Interactiva',
            route: `${Routes.invitations}/interactive`
        },

    ]


    return (
        <div className='text-white text-[20px] space-y-4 mt-10'>
            <div onClick={() => routes(Routes.home)} className='flex items-center space-x-2 border-b border-white h-10'>
                <i>{Icons.Home}</i>
                <p>Inicio</p>

            </div>

            <a onClick={() => routes(Routes.home + '/#typeCards')} className='flex items-center space-x-2 border-b border-white h-10'>
                <i>{Icons.Home}</i>
                <p>Tipo de celebraciones</p>

            </a>
            <div className=' border-b border-white min-h-10'>
                <div onClick={() => setShow(!show)} className='flex space-x-2 items-center'>
                    <i>{Icons.Home}</i>
                    <p>Invitaciones</p>
                </div>


                <div className={`${show ? 'h-24' : 'h-0'} animate-fadeIn duration-300  overflow-hidden `}>
                    {typeCard.map((r, i) => {
                        return (
                            <div className='flex space-x-2 text-[15px] font-light  items-center mt-2 ' onClick={() => routes(r.route)} key={i}>
                                <i>{Icons.Home}</i>
                                <p className=''>{r.text}</p>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
            <div onClick={() => routes(Routes.home)} className='flex items-center space-x-2 border-b border-white h-10'>
                <i>{Icons.Home}</i>
                <p>Kit Gráficos</p>

            </div>
            <div onClick={() => routes(Routes.home)} className='flex items-center space-x-2 border-b border-white h-10'>
                <i>{Icons.Home}</i>
                <p>Cursos</p>

            </div>


        </div>
    )
}

export default MenuMobil