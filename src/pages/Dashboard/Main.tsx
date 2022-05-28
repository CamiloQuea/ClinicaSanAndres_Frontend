import React from "react";
import { Dashboard } from "../../layouts/Dashboard";

export default function Main() {
  console.log("Main");
  return (
    <Dashboard>
      <div className="bg-neutral-800 h-full w-full flex  justify-center">
        <div className="container my-8 mx-4">
          <div className="flex flex-wrap lg:flex-nowrap  justify-center">
            <div className="flex flex-col justify-around  bg-white dark:text-gray-200 dark:bg-neutral-900 shadow-xl h-44 rounded-xl w-full lg:w-80 px-4 py-8">
              <h4 className="text-gray-500 font-semibold">Total Pacientes</h4>
              <div className="flex h-auto  items-center justify-between" >
                <div className="text-5xl">uwu</div>
                <div className="text-lg rounded-full p-4 shadow-lg cursor-pointer bg-neutral-800">Icono</div>
              </div>
            </div>

          </div>

          
          
        </div>
      </div>
    </Dashboard>
  );
}
