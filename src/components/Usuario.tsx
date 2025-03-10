import { useState } from "react";

interface User {
  id: string;
  username: string;
  password: string;
}

/**----------------------------------------
 * Indicamos al objeto el tipo con :User
 * ----------------------------------------*/
const UsuarioTemporal: User = {
  id: "1232213",
  username: "Rosa",
  password: "23204hhho",
};

const Usuario = () => {
  const [user, setUser] = useState<User>(UsuarioTemporal);

  const login = () => {
    setUser({
      id: "1231",
      username: "Camila",
      password: "3342424",
    });
  };

  return (
    <div className="w-11/12 flex flex-col justify-center items-center text-center text-gray-300 font-bold bg-neutral-700">
      <h3>Evento onclick, operador ternario y visualizador de objetos en el DOM</h3>
      <button
        className="text-white mt-2 bg-yellow-950 p-5 w-24 rounded-lg shadow-lg shadow-black"
        type="button"
        onClick={() => login()}
      >
        login
      </button>
      {!user ? (
        <div>
          <h1>EL USUARIO NO EXISTE</h1>
        </div>
      ) : (
        <pre className="mt-3 p-3 bg-purple-950">{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default Usuario;
