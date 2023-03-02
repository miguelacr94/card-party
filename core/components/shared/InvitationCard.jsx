import { useRouter } from "next/router";
import { ShoppingCart } from "react-feather";
import { currency } from "../../utils/helpers";
import { Routes } from "../../utils/routes";
import Img from "./Img";
import { RoundedLinkButton } from "./RoundedButton";

const InvitationCard = ({ key }) => {
  const router = useRouter();


  return (
    <div className="card max-h-full h-full max-w-[700px]
     relative  shadow-2xl 
       group transition-invitation-card flex  rounded-xl overflow-hidden bg-white px-1 md:px-0">
      <div className="w-2/6 flex justify-center items-center ">
        <Img
          className="object-cover duration-700 transform group-hover:scale-100"
          src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
        />
      </div>

      <RoundedLinkButton
      
        className="absolute duration-700 transform md:translate-y-full bottom-2 md:right-16 right-4 translate-y-1  md:group-hover:-translate-y-12 z-10"
        title="Añadir al carrito"
        href={Routes.toDetail("123")}
        icon={<ShoppingCart />}
      />
      <div className="bottom-0 w-4/6 flex flex-col gap-2 p-4 duration-500 transform bg-gray-50 
      ">
        <h3 className="text-xl font-semibold text-title">Title {key}</h3>
        <span>{currency(20000)}</span>
        <p className="text-base font-light md:text-center text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fugit
          ex quis facilis aperiam fuga.
        </p>
      </div>
    </div>
  );
};

export default InvitationCard;
