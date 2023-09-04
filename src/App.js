// para inciar no crome use yarn start

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
    <section>
      <h1>Counter</h1>
      <p>{number}</p>
      <button onClick={decrease}>- </button>
      <button onClick={increase}>+</button>

    </section>
  );
}
