import Button from "../shared/Button";
import Img from "../shared/Img";
import Wrapper from "../shared/Wrapper";
import AOS from 'aos';
import { useEffect } from "react";
import { Icons } from "../../utils/icons";



const CustomInvitations = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);



  return (
    <section className="md:p-10 p-4">
      <Wrapper>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div data-aos="fade-right" className="flex flex-col items-start col-span-7 space-y-4">
            <div className="flex flex-col">
              <span className="text-lg font-medium text-gray-600">Diseñamos para ti</span>
              <h2 className="text-2xl font-bold text-primary">
                Invitaciones personalizadas
              </h2>
            </div>
            <p className="font-light text-gray-600">
              Si deseas una invitación digital con un diseño personalizado bajo tus colores y gustos gráficos,
              o quieres crear tu invitación
              con un concepto diferente y
              único, podemos ayudarte a
              hacerlo realidad! Contacta
              con nuestro equipo y te
              guiaremos en la creación de
              la invitación perfecta para tu
              evento.
            </p>
           
            <Button className="px-8 font-medium text-white uppercase space-x-2 flex items-center">
             <span>{Icons.User}</span><span>Personaliza tu invitación</span> 
            </Button>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="flex items-center justify-center col-span-5 md:space-x-4 ">
            <Img

              src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
              className="object-contain max-h-[400px]"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CustomInvitations;
