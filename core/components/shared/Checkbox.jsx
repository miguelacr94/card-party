import { useId } from "react";

const Checkbox = ({ label, onChange, required = false, register,id }) => {


  return (
    <div className="flex items-start w-full space-x-2">
      <input
        id={id}
        required={required}
        type="checkbox"
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 text-pink-500 rounded outline-none form-checkbox"
        {...register}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-light">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
