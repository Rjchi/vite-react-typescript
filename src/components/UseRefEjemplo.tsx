/**
 * El useRef no se renderiza por cada click que hacemos en el boton
 * sino que el internamente va llevando la cuenta de los clicks y en
 * el momento que demos click en el que utiliza useState automaticamente
 * vemos el valor que tenia guardado el useRef
 */
import { useEffect, useRef, useState } from "react";

export const UseRefEjemplo = () => {
  // Definiendo los hooks:
  //     - useRef para el contador que no causa re-renderizado
  //     - useState para el contador de renderizados
  //     - Ambos con tipos TypeScript explícitos

  const contadorRef = useRef<number>(0);
  const [renderCount, setRenderCount] = useState<number>(0);

  // Implementando los efectos:
  //     - useEffect para contar los renderizados
  //     - useEffect para mostrar el valor actual de contadorRef

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    console.log("Valor actual de contadorRef:", contadorRef.current);
  }, [contadorRef.current]);

  // Implementando los manejadores:
  //     - incrementarRef: solo actualiza el ref
  //     - incrementarEstado: actualiza el estado y causa re-renderizado
  //     - Ambos son funciones void

  const incrementarRef = (): void => {
    contadorRef.current += 1;
  };

  const incrementarEstado = (): void => {
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-md mx-auto">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">
          Demostración de useRef vs Re-renderizado
        </h2>
        <p className="text-sm text-muted-foreground">
          Observa cómo useRef no causa re-renderizado
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Contador con useRef (no causa re-renderizado)
          </h3>
          <div className="flex items-center gap-4">
            <button className="p-4 bg-yellow-700 text-white" onClick={incrementarRef}>
              Incrementar Ref
            </button>
            <span className="text-sm">Valor: {contadorRef.current}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            Contador de Renderizados (con useState)
          </h3>
          <div className="flex items-center gap-4">
            <button className="p-4 bg-yellow-700 text-white" onClick={incrementarEstado}>
              Incrementar Estado
            </button>
            <span className="text-sm">Veces renderizado: {renderCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
