import "./App.css";
import Saludo from "./componentes/Saludar";
import Boton from "./componentes/boton";
import Reloj from "./componentes/reloj";
import { useState } from "react";

function App() {
  const mostrarItem = (item) => {
    console.log("Item seleccionado:", item);
  };
  const [contador, setContador] = useState(0);
  return (
    <>
      <div>
        <Saludo nombre="Ing. Alvaro Pabon" edad={25} />
      </div>
      <div>
        <h2>Contador: {contador}</h2>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        <Boton />
      </div>
      <div>
        <button onClick={() => mostrarItem("Manzana")}>Manzana</button>
        <button onClick={() => mostrarItem("Pera")}>Pera</button>
      </div>
      <Reloj />
    </>
  );
}

export default App;
