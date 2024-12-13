// para inciar no chrome use yarn start

import { useState } from "react";

export default function App() {
  //    let numero = 10
  const [number, setNumber] = useState(0);


  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    setNumber(number - 1);
  }

  
  return (
<div style={{
    display: 'flex',
    justifyContent: 'center', // Centraliza horizontalmente
    alignItems: 'center',    // Centraliza verticalmente
    height: '100vh',         // Ocupa toda a altura da tela
}}>
  <div style={{
      width: '200px',
      border: '2px solid black', // Espessura, estilo e cor da borda
      padding: '10px',           // Espaço interno
  }}>
      <h1>Counter</h1>
      <p>{number}</p>
      <button onClick={decrease}>- </button>
      <button onClick={increase}>+</button>
  </div>
</div>


  );
}
