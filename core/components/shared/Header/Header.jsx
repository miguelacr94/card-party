import { countCartItem } from "../../../providers/products/actions";
import { ContextCard } from "../../../providers/products/context";
import { Icons } from "../../../utils/icons";
import { routes } from "../../../utils/routes";
import Wrapper from "../Wrapper";
import HeaderDropdownLink from "./HeaderDropdownLink";
import HeaderLink from "./HeaderLink";
import InitialLinks from "./InitialLinks";
import React, { useContext } from 'react'
import useOpen from "../../../utils/hoocks/useOpen";

const Header = () => {
  const { cart, setCart } = useContext(ContextCard);
  const { useOpenMenu, useOpenCart, isOpen, isOpenCart } = useOpen();

  return (
    <div className="w-full">
      <div className="z-10 w-full flex justify-between w-full md:px-10 px-6 py-5 bg-white  md:mt-11 mt-0 fixed shadow-lg border-t-8 md:border-t-0 border-primary">
        <Wrapper>
          <div className="block md:hidden w-3/6">
            <button onClick={() => useOpenMenu()} className="text-primary text-[20px]">
              {Icons.hamburguer}
            </button>
          </div>

          <h1 className="text-2xl font-bold text-primary  md:w-auto text-center">LOGO</h1>

          <div className="hidden md:block md:w-5/6">
            <ul className="flex justify-center w-full items-center text-gray-700 whitespace-nowrap ">
              {routes.map((r, i) =>
                r.hasOwnProperty("subItems") ? (
                  <HeaderDropdownLink key={i} link={r} items={r.subItems} />
                ) : (
                  <>

                    <HeaderLink key={i} link={r} />
                    {/* <InitialLinks /> */}


                  </>
                )
              )}
            </ul>
          </div>

          <div onClick={() => useOpenCart()} className="relative  w-3/6  md:w-1/6 flex justify-end  ">
            {cart.length > 0 &&
              <p className="absolute transform translate-x-4 -translate-y-4 rounded-full bg-primary
             text-white h-6 w-6 flex items-center justify-center">{cart.length}</p>

            }
            <p className="text-primary text-xl">{!isOpenCart ? Icons.cart : Icons.close2}</p>
          </div>
        </Wrapper>
      </div>

    </div>

  );
};

export default Header;
