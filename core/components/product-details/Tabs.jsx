
import Img from "../shared/Img";
import Share from "../shared/Share";

const ProductDetailsdiv = () => {
  return (
    <div className="flex flex-col w-full space-y-5">
      <div className="md:max-w-[300px] md:max-h-[400px] flex justify-center items-center">
        <Img
          className="object-cover duration-700 transform group-hover:scale-100"
          src="https://m.media-amazon.com/images/I/612p7h3gqoL._SY679_.jpg"
        />
      </div>
      <Share />
      <div>
        <div className="flex space-x-1">
          <div>
            <span className="font-semibold">Características</span>
          </div>
          <div>
            <span className="font-semibold">Importante</span>
          </div>
          <div>
            <span className="font-semibold">Entrega</span>
          </div>
        </div>

        <div className="py-1 pl-8">
          <ul className="flex flex-col space-y-4">
            <li className="list-disc">Tipo de Formato: JPG Y PDF</li>
            <li className="list-disc">Orientación: Vertical</li>
            <li className="list-disc">Dimensiones: 1080(w) × 1920 (h) px</li>
          </ul>
        </div>
        <div className="py-1 pl-8">
          <ul className="flex flex-col space-y-4">
            <li className="list-disc">
              Los datos de personalización es solo por la información que se
              solicita para el evento, no se hacen modificaciones adicionales,
              en cuanto diseño, color y tipo de letra.
            </li>
            <li className="list-disc">
              Si deseas agregar fotografía, debes adjuntarlo en formato JPG.
            </li>
            <li className="list-disc">
              NO HACEMOS ningún tipo de edición de la fotografía, solo quitar el
              fondo.
            </li>
            <li className="list-disc">
              En caso de requerir alguna información adicional o ver la
              posibilidad de hacer algún cambio en el diseño publicado, con
              gusto puede escribirnos a través de nuestras vías de contacto.
            </li>
          </ul>
        </div>
        <div className="py-1 pl-8">
          <ul className="flex flex-col space-y-4">
            <li className="list-disc">
              Se entrega un archivo digital en formato JPG Y PDF.
            </li>
            <li className="list-disc">
              Se envía a través del correo electrónico y copia vía WhatsApp
              Tiempo de entrega 2 a 3 días hábiles a partir de la aprobación del
              pago y envío de información.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsdiv;
