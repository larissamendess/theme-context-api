import { useContext } from "react";
import { AulaContext } from "./contexts/aulaContext";
import "./styles.css";

export default function App() {
  const { mudarTema, setMudarTema } = useContext(AulaContext);

  return (
    <div
      className="App"
      style={{
        background: mudarTema ? "red" : "white",
        color: mudarTema ? "white" : "black",
      }}
    >
      <h1>Aula Context API</h1>
      <button onClick={() => setMudarTema(!mudarTema)}>Mudar tema</button>
    </div>
  );
}
