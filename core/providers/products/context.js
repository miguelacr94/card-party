import { createContext, useContext, useEffect, useState } from "react";
import { countCartItem, getProduct, readCart } from "./actions";


export const ContextCard = createContext(null);



export default function CardContext({ children }) {

    const [product, setProduct] = useState(false);
    const [cart, setCart] = useState([

    ]);

    const [purchaseModal, setPurchaseModal] = useState(false);
    const [detailPurchase, setDetailPurchase] = useState(null);

    const [showCart, setMenuCart] = useState(false);


   

    useEffect(() => {

        if (countCartItem() <= 0) {
            localStorage.setItem('cart', JSON.stringify([]));
        } else {
            let _cart = readCart() || []
            if (_cart?.length > 0) {
                setCart(_cart);
            }
        }

        // localStorage.setItem('cart', JSON.stringify([]));

    }, []);


    return (

        <ContextCard.Provider value={
            {
                product, cart, setCart, purchaseModal, setPurchaseModal,
                detailPurchase, setDetailPurchase,
                showCart, setMenuCart
            }}>
            {

                children
            }

    
        </ContextCard.Provider>
    )

}