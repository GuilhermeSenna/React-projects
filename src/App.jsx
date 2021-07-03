import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <div className="App">
      <h1>
        Bem vindo, {nome}
        {sobrenome}
      </h1>
      <label htmlFor="nome">Nome: </label>
      <input id="nome" type="text" name="" id="" />
      <br />
      <br />
      <label htmlFor="sobrenome">Sobrenone: </label>
      <input id="sobrenomenome" type="text" name="" id="" />
    </div>
  );
}
