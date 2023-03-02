import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

const HeaderDropdownLink = ({ link, items = [] }) => {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <Menu.Button className="px-4 font-medium ">
        {link.name}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item, index) => (
            <Menu.Item key={index}>
              <Link href={`${link.path}${item.path}`} passHref>
                <a className="block px-4 py-2 text-start">{item.name}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeaderDropdownLink;
