// import { TiposBasicos } from "./typescript/TiposBasicos";
// import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
const App = () => {
  const nombre: string | number = "Fernando";
  const poderes: string[] = ["hola", "que", "tal"];

  return (
    <div className="mt-2">
      <h1>Introducion a ts react</h1>
      <hr />
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      <Login />
    </div>
  );
};

export default App;
