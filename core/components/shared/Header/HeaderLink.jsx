import Link from "next/link";

const HeaderLink = ({ link }) => {
  return (
    <li className="px-4 font-medium text-gray-700">
      <Link href={link.path} passHref>
        <a>{link.name}</a>
      </Link>
    </li>
  );
};

export default HeaderLink;
