import { useState } from "react";

export default function contador() {
  const [number, setNumber] = useState(0);

  const aumentarValor = () => {
    setNumber(number + 1);
  };

  const diminuirValor = () => {
    setNumber(number - 1);
  };

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }}>
      <h1>Contador</h1>
      <div>{number}</div>
      <button onClick={() => aumentarValor()}>Aumentar</button>
      <button onClick={() => diminuirValor()}>Diminuir</button>
    </div>
  );
}
