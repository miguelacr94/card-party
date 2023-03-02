
const Textarea = ({
  type = "text",
  placeholder = "",
  onChange,
  className = "",
  label,
  rows = 1,
  register,
  id
}) => {
 

  return (
    <div className="flex flex-col w-full space-y-1">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-black">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`p-2 bg-white outline-none rounded-md ring-1 ring-gray-100 focus:ring-gray-300 duration-300 font-light placeholder:text-sm ${className}}`}
        type={type}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        {...register}
      />
    </div>
  );
};

export default Textarea;
