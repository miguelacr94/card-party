import { createContext, useContext, useEffect, useState } from "react";
import { countCartItem, getProduct, readCart } from "./actions";


export const ContextUser = createContext(null);



export default function UserContext({ children }) {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);



    return (

        <ContextUser.Provider value={
            {
                isOpen, setIsOpen, isOpenCart, setIsOpenCart
            }}>
            {

                children
            }


        </ContextUser.Provider>
    )

}