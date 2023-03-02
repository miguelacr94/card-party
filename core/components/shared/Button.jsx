import Link from "next/link";

const Button = ({ color = "bg-primary", className = "", children }) => {
  return (
    <button className={`px-3 py-2 rounded-md ${color} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

export const LinkButton = ({
  color = "bg-primary",
  className = "",
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <a
        className={`px-3 py-2  hover:bg-primary-Hover rounded-md w-full justify-center flex items-center ${color} ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};
