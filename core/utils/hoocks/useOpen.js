import React, { useState, useContext } from 'react'
import { ContextUser } from '../../providers/user/context'

const useOpen = () => {

    const { isOpen, setIsOpen } = useContext(ContextUser);
    const {isOpenCart, setIsOpenCart} = useContext(ContextUser);

    const useOpenMenu = () => {
        setIsOpen(!isOpen)
    }

    const useOpenCart = () => {
        setIsOpenCart(!isOpenCart)
    }

    return { useOpenMenu, isOpen, useOpenCart, isOpenCart  };

}

export default useOpen