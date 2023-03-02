import Link from "next/link";
import { Routes } from "../../../utils/routes";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import Wrapper from "../Wrapper";
import AOS from 'aos';

import { useEffect } from "react";

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="md:p-10 p-4 bg-secondary h-full">
        <div data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" className="grid grid-cols-1 md:grid-cols-5">
          <h2 className="col-span-2 text-4xl font-bold text-primary md:text-start text-center">LOGO</h2>
          <div className="grid md:grid-cols-1 grid-cols-1 col-span-3 md:gap-10 gap-4 md:grid-cols-3  mt-4 md:mt-0 ">
            <div className="flex flex-col space-y-2 text-center md:text-start">
              <strong className="font-semibold text-gray-900">
                Categorías
              </strong>
              <ul className="text-primary ">
                <li>
                  <Link href={Routes.invitations}>
                    <a>Tipos de invitaciones</a>
                  </Link>
                </li>
                <li>
                  <Link href={Routes.celebrations}>
                    <a>Tipos de celebraciones</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-start">
              <strong className="font-semibold text-gray-900">
                Importante
              </strong>
              <ul className="text-primary">
                <li>Políticas de privacidad</li>
                <li>Políticas y condiciones</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-start">
              <strong className="font-semibold text-gray-900">
                Nuestras redes sociales
              </strong>
              <ul className="flex space-x-4 text-primary justify-center md:justify-start">
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
          </div>
        </div>
    
    </div>
  );
};

export default Footer;
