import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISidebarItem {
  icon: any;
  name: string;
  path: string;
}

const SidebarItem = ({ icon, name, path }: ISidebarItem) => {
  return (
    <div>
      <a
        href={"/" + path}
        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <FontAwesomeIcon
          icon={icon}
          className="w-5 h-5 text-gray-500  dark:text-gray-400  "
        />
        <span className="ml-3 md:block hidden">{name}</span>
      </a>
    </div>
  );
};

export default SidebarItem;
