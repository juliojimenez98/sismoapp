import React from "react";

function Card({ item }) {
  return (
    <div className="lg:flex shadow rounded-lg border m-12 border-gray-400">
      <div className="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
        <div className="text-center tracking-wide">
          <div className="text-white font-bold text-2xl ">
            <p>Fecha</p>
          </div>
          <div className="text-white font-normal text-xl">{item.Fecha}</div>
        </div>
      </div>
      <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div className="flex flex-row lg:justify-start justify-center">
          <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            <i className="far fa-clock"></i> 1:30 PM
          </div>
          <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            Agencia : {item.Agencia}
          </div>
        </div>
        <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
          <p>{item.RefGeografica}</p>
        </div>

        <div className="font-semibold text-sm pt-1 text-center lg:text-left px-2">
          <p>{item.Magnitud}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
