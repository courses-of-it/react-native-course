import { useState } from "react";
export const useCounter = (initial: number = 0) => {
  const [valor, setValor] = useState(initial);

  const handleChangeValue = (numero: number) => {
    setValor(valor + numero);
  };
  return {
    valor,
    handleChangeValue,
  };
};
