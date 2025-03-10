import { useEffect, useRef, useState } from "react";

/**
 * Aqui indicamos que tipo de argumento recibe
 * este componente
 */
type TimerArgs = {
  milisegundos: number;
  segundos?: number; // Es Opcional
};

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setSegundos] = useState<number>(0);

  const ref = useRef<NodeJS.Timeout>();

  /**
   * Tiene dependencias para saber cuando ejecutar el
   * useEffect nuevamente
   */
  useEffect(() => {
    /**
     * Limpiamos cada vez que los milisegundos cambien
     */
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => setSegundos((s) => s + 1), milisegundos);
  }, [milisegundos]);

  return (
    <div>
      <h4>
        Timer: <small>{segundos}</small>
      </h4>
    </div>
  );
};
