// import { useId } from "react";

const Input = ({
  type = "text",
  placeholder = "",
  onChange,
  className = "",
  label,
  accept,
  required = false,
  register,
  id
}) => {
  // const id = useId();

  return (
    <div className="flex flex-col w-full space-y-1">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-black">
          {label}{" "}
          {required && (
            <span title="Este campo es requerido" className="text-red-500">
              *
            </span>
          )}
        </label>
      )}
      <input
        id={id}
        required={required}
        className={`p-2 bg-white outline-none rounded-md ring-1 ring-gray-100 focus:ring-gray-300 duration-300 font-light placeholder:text-sm ${className}}`}
        type={type}
        accept={accept}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        {...register}
      />
    </div>
  );
};

export default Input;
