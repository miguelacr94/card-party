import Link from "next/link";

const RoundedButton = ({
  onClick,
  icon,
  className = "",
  title,
  color = "bg-secondary",
}) => {
  return (
    <button
      className={`rounded-full p-3 text-white ${className} ${color}`}
      title={title}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default RoundedButton;

export const RoundedLinkButton = ({
  href,
  icon,
  className = "",
  title,
  color = "md:bg-secondary bg-primary",
}) => {
  return (
    <Link href={href} passHref>
      <a
        className={`rounded-full p-3 text-white ${className} ${color}`}
        title={title}
      >
        {icon}
      </a>
    </Link>
  );
};
