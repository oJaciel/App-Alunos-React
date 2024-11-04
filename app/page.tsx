'use client';

import { useState } from "react";

export default function Home() {
  return (
    <div>
      <h1>Bem vindo</h1>
      <p>Bem vindo ao React</p>
      <CapsLockComponent texto="transforme o texto" />

      <br/>
      <br/>

      <Contador />

    </div>
  );
}


export function CapsLockComponent(props: {texto:string}) {
  let capsText = props.texto.toUpperCase();
  return <p>{capsText}</p>
}


export function Contador() {

  const [num, setNum] = useState(1)

  function incrementar() {
    setNum(num + 1)
    console.log(num)
  }

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
