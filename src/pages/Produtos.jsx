import React from "react";
import Title from "../components/Title";
import Produto from "./Produto";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <section>
      <Title text="Produtos" />
      {produtos.map(produto => (
        <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map(propriedade => (
              <li key={propriedade}>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
