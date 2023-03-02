import React, { useContext } from 'react'
import { ContextCard } from '../../providers/products/context';
import { readCart, saveCart } from '../../providers/user/actions';

const useCart = () => {

    const { cart, setCart } = useContext(ContextCard)

    const removeFromCart = (item) => { // funcion encargada de remover los articulos del carro de compra


        const items = readCart() || []
        const newCart = items.filter(e => e.id != item.id); // filtra los datos desiguales y los almacena 
        saveCart(newCart);
        setCart(newCart);

    };

    const addToCart = (data) => {

        const id = { id: 123 + cart.length };

        const product = {
            id: 1234,
            name: 'tarjeta 1',
            price: 20000,
            image: "https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg",
            description: 'algoo...'
        }

        // toma el objeto del producto seleccionado y adicional le agrega la cantidad  
        const dato = {};
        // if (!itemAlreadyInCart(dato?.id)) {
        dato = Object.assign(id, data);
        setCart([...cart, dato]);  //almacena en el Context del carro de compra
        saveCart([...cart, dato]); // almacena producto en  el localStorage

        // } else {
        // alert('ya existe');
        // }
    };


    return { removeFromCart, addToCart }
}

export default useCart