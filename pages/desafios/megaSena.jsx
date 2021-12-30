import { useEffect, useState } from "react";
import { megaSena } from "../../function/megaSena";
import NumberDisplay from "../components/numberDisplay";

export default function megaSena1() {
  const [numberSorteado, setNumberSorteado] = useState(megaSena());
  const [quantidade, setQuantidade] = useState([]);

  useEffect(() => {
      setNumberSorteado(megaSena())
  }, [])

  const gerarNumeros = () => {
    return numberSorteado.map((number) => (
      <NumberDisplay key={number} number={number} />
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "15px",
          fontSize: "28px",
        }}
      >
        {gerarNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={quantidade}
          onChange={(e) => setQuantidade(+e.target.value)}
        />
        <button onClick={() => setNumberSorteado(megaSena(quantidade))}>
          Gerar Número
        </button>
      </div>
    </div>
  );
}
