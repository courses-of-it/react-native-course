import { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);

  const handlePlus1 = (numero: number) => {
    setValor(valor + numero);
  };
  const handleMinus1 = (numero: number) => {
    setValor(valor - numero);
  };
  return (
    <div>
      <h3>
        Contador: <small>{valor}</small>
        <br />
        <button className="btn btn-primary m-1" onClick={() => handlePlus1(1)}>
          +1
        </button>
        <button className="btn btn-danger  m-1" onClick={() => handleMinus1(1)}>
          -1
        </button>
      </h3>
    </div>
  );
};
