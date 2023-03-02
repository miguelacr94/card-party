import { useRouter } from 'next/router'
import React,{useContext} from 'react'
import { ShoppingCart } from 'react-feather'
import { ContextCard } from '../../providers/products/context'
import { currency } from '../../utils/helpers'
import { Routes } from '../../utils/routes'
import Img from '../shared/Img'
import { RoundedLinkButton } from '../shared/RoundedButton'
import StarRating from '../shared/Ui/StartRating'

const Card = ({ data, key }) => {

    const router = useRouter();



    return (
        <div key={key} className='rounded-lg shadow-xl border overflow-hidden'>
            <div>
                <Img
                    className="object-cover duration-700 transform group-hover:scale-100"
                    src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
                />
            </div>
            <div className='p-2'>
                <p className='text-gray-600 font-light'>{'animada'}</p>
                <p className='text-primary font-medium text-[20px]'>{'Nombre tarjeta' + data} </p>
                <div className='flex'>
                    <div className='w-4/6'>
                        <div>
                            <StarRating
                                rating={4}
                            />
                        </div>
                        <span className='text-gray-600'>{currency(20000)}</span>
                    </div>
                    <div className='w-2/6 '>
                        <button
                            onClick={() => router.push(Routes.toDetail("123"))}
                            className='text-white flex justify-center
                         items-center bg-primary w-[40px] h-[40px] rounded-full hover:scale-110'>
                            <ShoppingCart />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card