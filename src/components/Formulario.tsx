import { ChangeEvent, useState } from "react";

export const Formulario = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  /**
   * Hace el seguimiento a los cambios del formulario
   * el ChangeEvent es de tipo generico se reconoce por
   * las llaves (<T = Element>) al poner el cursor encima.
   *
   * @param {ChangeEvent} e - Evento del formulario
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value, // email | password - valor
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h3 className="text-white font-bold">Custom Hooks</h3>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-gray-700 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md bg-gray-700 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-sm/6 text-white">
          <pre>{JSON.stringify(formulario)}</pre>
        </div>
      </div>
    </div>
  );
};
