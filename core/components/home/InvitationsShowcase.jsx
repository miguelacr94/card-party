import { useEffect } from "react";
import { Routes } from "../../utils/routes";
import { LinkButton } from "../shared/Button";
import Img from "../shared/Img";
import Wrapper from "../shared/Wrapper";
// import MainLayout from "../core/layouts/MainLayout";
import AOS from 'aos';
import { Icons } from "../../utils/icons";



const InvitationsShowcase = () => {


  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);



  return (
    <section className="md:p-24 p-4 bg-opacity-10 bg-primary ">
      <Wrapper>
        <div className="md:grid md:grid-cols-1 md:gap-10 md:grid-cols-12">
          <div data-aos="fade-right" className="flex items-center justify-center col-span-7 space-x-4">
            <div className="flex flex-col w-full space-y-3 ">
              <Img
                src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
                className="object-contain max-h-[500px] rounded-lg overflow-hidden"
              />
              <LinkButton
                href={`${Routes.invitations}/animated`}
                className="text-white space-x-2"
              >
               <span>{Icons.User}</span> <span>Animadas</span>
              </LinkButton>
            </div>
            {/* <div className="flex flex-col w-full space-y-3">
              <Img
                src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
                className="object-contain max-h-[500px] rounded-lg overflow-hidden"
              />
              <LinkButton
                href={`${Routes.invitations}/interactive`}
                className="text-white"
              >
                Interactivas
              </LinkButton>
            </div> */}
            <div className="flex flex-col w-full space-y-3 ">
              <Img
                src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
                className="object-contain max-h-[500px] rounded-lg overflow-hidden"
              />
              <LinkButton
                href={`${Routes.invitations}/static`}
                className="text-white space-x-2"
              >
                  <span>{Icons.User}</span> <span>Estáticas</span>
                
              </LinkButton>
            </div>
          </div>
          <div className="flex flex-col items-start md:col-span-5 space-y-4 mt-6 md:mt-0">
            <span className="text-lg font-medium text-gray-600">
              Selecciona entre nuestras diversas opciones
            </span>
            <h2 className="text-3xl font-bold text-primary">
              Invitaciones Prediseñadas
            </h2>
            <div>
              <p className="text-base font-light">
                Haz de tu invitación una
                experiencia inolvidable
                para los invitados con la
                gran variedad de diseños
                que tenemos para ti.
              </p>
              <p className="text-base font-light">
                En este tipo invitaciones, podràs elegir diseños ya elaborados
                por nosotros, con la posibilidad de cambiar los datos del
                evento.
              </p>
              <p className="text-base font-light">
                Puedes elegir entre Invitaciones:
              </p>
            </div>
            <ul className="pl-4 list-disc space-y-4 md:space-y-0 text-gray-600">
              <li>Estáticas (Constituidas por imágenes sin movimientos -JPG)</li>
              <li>Animadas (Video con duración aproximado entre 30 seg a 1:00 min - MP4)</li>
              {/* <li>Interactiva (Tendrá link)</li> */}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default InvitationsShowcase;
