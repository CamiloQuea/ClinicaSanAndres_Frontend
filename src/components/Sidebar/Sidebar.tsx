import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faAddressCard,
  faFolderTree,
  faPerson,
  faUserDoctor,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import SidebarItem from "./SidebarItem";

const sidebarItems = [
  {
    group: "Dashboard",
    elements: [
      {
        name: "Dashboard",
        path: "dashboard",
        icon: faChartLine,
      },
    ],
  },
  {
    group: "Historias",
    elements: [
      {
        name: "Registrar",
        path: "registrar-historia",
        icon: faAddressCard,
      },
      {
        name: "Buscar",
        path: "buscar-historia",
        icon: faFolderTree,
      },
    ],
  },
  {
    group: "Personas",
    elements: [
      {
        name: "Pacientes",
        path: "pacientes",
        icon: faPerson,
      },
      {
        name: "Doctores",
        path: "doctores",
        icon: faUserDoctor,
      },
    ],
  },
  {
    group: "Sesión",
    elements: [
      {
        name: "Cerrar Sesión",
        path: "login",
        icon: faArrowRightFromBracket,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-full">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded h-full dark:bg-neutral-900">
        <div className="mt-3 mb-6">
          <img
            className="h-24 mx-auto rounded-full"
            src="https://i1.sndcdn.com/artworks-FRIqYPtESjPf6jwJ-mEXsUg-t500x500.jpg"
            alt="medic_img"
          />
          <h1 className="text-white text-center my-2">Usuario</h1>
        </div>

        <div className="space-y-3">
          {sidebarItems.map((group, index) => (
            <div key={index}>
              <span className="text-gray-500 font-semibold">{group.group}</span>
              {group.elements.map((el, index) => (
                <SidebarItem
                  key={index}
                  icon={el.icon}
                  name={el.name}
                  path={el.path}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
