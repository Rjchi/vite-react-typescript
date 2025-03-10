import { useState } from "react";

import { Timer } from "./Timer";

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000);

  return (
    <div className="w-11/12 flex flex-col justify-center items-center text-center text-gray-300 font-bold bg-neutral-900">
      <h3 className="mb-2">Uso de useEffect, Desestructuración de propiedades  y useRef</h3>
      <span className="m-5">Milisegundos {1000}</span>
      <button
        className="mb-2 text-white mt-2 bg-orange-700 p-5 w-24 rounded-lg shadow-lg shadow-black"
        type="button"
        onClick={() => setMilisegundos(1000)}
      >
        1000
      </button>

      <button
        className="mb-2 text-white mt-2 bg-purple-700 p-5 w-24 rounded-lg shadow-lg shadow-black"
        type="button"
        onClick={() => setMilisegundos(2000)}
      >
        2000
      </button>
      <Timer milisegundos={milisegundos}/>
    </div>
  );
};
