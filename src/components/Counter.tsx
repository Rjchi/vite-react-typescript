import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const Incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  }

  return (
    <div className="w-11/12 h-[90%] flex flex-col justify-center items-center text-center text-gray-300 font-bold bg-neutral-700">
      <div className="bg-purple-800 w-full h-full flex flex-col justify-center items-center">
        <h3>Counter con UseState</h3>
      </div>
      <div className="bg-orange-900 w-full h-full flex flex-col justify-center items-center">
        <span className="bg-black p-4 m-2"> valor: { counter }</span>
        <button className="bg-yellow-950 p-5 w-24 rounded-lg shadow-lg shadow-black" type="button" onClick={ () => Incrementar() }>
         1 +
        </button>
        <button className="mt-2 bg-yellow-950 p-5 w-24 rounded-lg shadow-lg shadow-black" type="button" onClick={ () => Incrementar(2) }>
         2 +
        </button>

        <button className="mt-2 bg-yellow-950 p-5 w-24 rounded-lg shadow-lg shadow-black" type="button" onClick={ () => setCounter(0) }>
         Reset
        </button>
      </div>
    </div>
  )
}
