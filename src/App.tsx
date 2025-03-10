import { ContadorReducer } from "./components/ContadorReducer";
// import { Counter } from "./components/Counter"; // Con export
// import { TimerPadre } from "./components/TimerPadre";
// import { UseRefEjemplo } from "./components/UseRefEjemplo";

// import Usuario from "./components/Usuario"; // Con export default

function App() {
  return (
    <>
      <div className="bg-blue-950 w-full flex flex-col justify-center items-center">
        {/* <Counter />
        <Usuario />
        <TimerPadre /> */}
        {/* <UseRefEjemplo /> */}
        <ContadorReducer />
      </div>
    </>
  );
}

export default App;
