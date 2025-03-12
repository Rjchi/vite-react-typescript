import { ChangeEvent, useState } from "react";

/**
 * Hook para gestionar los formularios con <T extends object> garantizamos
 * que T es un objeto permitiendo acceder a sus propiedades (propiedades
 * de initState) de manera segura.
 *
 * @template T - Tipo de los campos del formulario
 * @param {T} initState - Campos del formulario
 *
 * @returns {Object} Un objeto con:
 *   - formulario: T - Estado actual del formulario
 *   - handleChange: Function - Función para manejar cambios en los campos
 */
const useForm = <T extends object> (initState: T) => {
  const [formulario, setFormulario] = useState<T>(initState);

  /**
   * Maneja los cambios en los campos del formulario
   *
   * @param {ChangeEvent<HTMLInputElement>} e - Evento de cambio del input
   *
   * @returns {void}
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value, // campo - valor
    });
  };

  return {
    formulario,
    handleChange,
  };
}

export default { useForm };
