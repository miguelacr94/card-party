import { useForm } from "react-hook-form";
import { currency } from "../../utils/helpers";
import Button from "../shared/Button";
import Checkbox from "../shared/Checkbox";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import React, { useContext } from 'react'
import { ContextCard } from '../../providers/products/context';
import { itemAlreadyInCart, saveCart } from "../../providers/products/actions";
import useCart from "../../utils/hoocks/useCart";


const ProductDetailsForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const { addToCart } = useCart()

  const onSubmit = (data) => addToCart(data);








  return (
    <div className="flex flex-col w-full space-y-10">
      <div className="flex flex-col w-full space-y-2">
        <h2 className="text-3xl font-bold text-primary">Invitación Cars</h2>
        <span className="text-lg font-semibold text-primary">
          {currency(20000)}
        </span>
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col w-full space-y-5">
          <Input
            type="text"
            label="Nombre del Cumpleañero/a:"
            required
            register={register("name")}
          />
          <Input
            type="number"
            label="Edad a Cumplir:"
            required
            register={register("age")}
          />
          <Input
            type="text"
            label="Dirección de la Celebración:"
            required
            register={register("address")}
          />
          <Input
            type="date"
            label="Fecha de la Celebración:"
            required
            register={register("date")}
          />
          <Input
            type="time"
            label="Hora de la Celebración:"
            required
            register={register("time")}
          />
          <Input
            type="tel"
            label="Nro. de WhatsApp para envió de la invitación:"
            placeholder="Introduzca su código de país: ejemplo: +57"
            required
            register={register("whatsapp")}
          />
          <Input
            type="email"
            label="Email:"
            placeholder="(para envío de invitación)"
            required
            register={register("email")}
          />
          <Input
            type="file"
            accept="image/png, image/jpeg"
            label="Si desea agregar fotografía, adjuntarla aquí:"
            placeholder="(para envío de invitación)"
            register={register("image")}
          />
          <Textarea
            type="text"
            label="Texto adicional: (opcional)"
            register={register("extraText")}
          />
          <label className="text-sm font-semibold text-black">
            Acepta las políticas <span className="text-red-500">*</span>
          </label>
          <Checkbox
            label="Acepto que los datos colocados por mi parte en el formulario, están correctos."
            required
            register={register("accept1")}
          />
          <Checkbox
            label="Verifico que he leído las políticas de entregas, características y notas importante del producto."
            required
            register={register("accept2")}
          />
          <Button>
            <span className="font-bold text-white">Enviar</span>
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default ProductDetailsForm;
