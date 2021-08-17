import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { valor, handleChangeValue } = useCounter(1000000);
  return (
    <div>
      <h3>
        Contador con hook: <small>{valor}</small>
        <br />
        <button
          className="btn btn-primary m-1"
          onClick={() => handleChangeValue(1)}
        >
          +1
        </button>
        <button
          className="btn btn-danger  m-1"
          onClick={() => handleChangeValue(-1)}
        >
          -1
        </button>
      </h3>
    </div>
  );
};
