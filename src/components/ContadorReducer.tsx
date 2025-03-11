import { useReducer } from "react";

/**
 * ESTADO INICIAL
 *
 * Este estado inicial no se modifica jamas
 * ya que los estados en React se tratan como
 * no mutables
 */
const initialState = {
  contador: 0,
};

/**
 * ACTIONS
 *
 * Estas son las acciones que el REDUCER recibe como
 * parametros | (lo utilizamos como Or)
 */
type ActionType =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "custom"; payload: number };

/**
 * REDUCER
 *
 * Para modificar el estado utilizamos una función
 * reducer (aqui va la logica) y solo debe recibir dos
 * argumentos
 */
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        /** Operador Spread - Operador de propagación */
        ...state, // Copia que no mantiene la referencia original
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };
    case "custom":
      return {
        ...state,
        contador: action.payload,
      };

    /**
     * Siempre retornamos el state
     */
    default:
      return state;
  }
};

export const ContadorReducer = () => {
  /**
   * DISPATCH
   *
   * Esta función la utilizamos para disparar acciones
   */
  const [state, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <div className="text-white p-5 w-full flex flex-col justify-center items-center">
      <h3 className="font-bold pb-2 ">Uso de useReducer</h3>
      <h2>Contador: {state.contador && state.contador}</h2>
      <div className="flex flex-row w-full justify-around">
        <button
          className="text-white mt-2 bg-yellow-900 p-5 w-32 rounded-lg shadow-lg shadow-black"
          type="button"
          onClick={() => dispatch({ type: "incrementar" })}
        >
          Incrementar
        </button>
        <button
          className="text-white mt-2 bg-yellow-700 p-5 w-32 rounded-lg shadow-lg shadow-black"
          type="button"
          onClick={() => dispatch({ type: "decrementar" })}
        >
          Decrementar
        </button>
        <button
          className="text-white mt-2 bg-cyan-900 p-5 w-32 rounded-lg shadow-lg shadow-black"
          type="button"
          onClick={() => dispatch({ type: "custom", payload: 90 })}
        >
          Custom
        </button>
      </div>
    </div>
  );
};
