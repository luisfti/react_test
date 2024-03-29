import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

const filmes = ["teste1", "teste2", "teste3"];

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

function handleClick(e) {
  console.log(e.target.value);
}

const Teste = () => {
  const active = true;
  if (active) {
    return <p>CONST</p>;
  } else {
    return null;
  }
};

const App = () => {
  // const dados = produtos;
  // const total = dados.compras.map((item) => Number(item.preco.replace("R$", ""))).reduce((a, b) => a + b);

  return (
    <>
      {/* <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? " Ativa" : " Inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 && <p>Voce gastou demais</p>}

      <ul>
        {filmes.map(filme => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>

      {dados
        .filter(({ preco }) => Number(preco.replace("R$", "")) > 1500)
        .map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <h1>{preco}</h1>
            <ul>
              {cores.map((cor) => (
                <li key={cor} style={{ backgroundColor: cor, color: "white" }}>
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button onClick={handleClick} value={10}>Clique</button> */}
      <Header />
      <Teste />
      <Form />
      <Footer />
    </>
  );
};

export default App;
