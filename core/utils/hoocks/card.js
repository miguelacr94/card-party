import React,{useContext} from 'react'
import { ContextCard } from '../../providers/products/context';

const {cart, setCart} = useContext(ContextCard);

export const addToCart = (data) => {

    // toma el objeto del producto seleccionado y adicional le agrega la cantidad 
    const cantidad = {
        cant: 1
    }
    const dato = {};

    if (!itemAlreadyInCart(data.id)) {
        dato = Object.assign(data);
        setCart([...cart, dato]);  //almacena en el Context del carro de compra
        saveCart([...cart, dato]); // almacena producto en  el localStorage

    } else {
        // closeModal();
    }
};
