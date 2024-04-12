import React from "react";

const ProdutoTeste = ({ dados }) => {
  console.log(dados);
  return (
    <section>
      <h1>{dados.nome}</h1>
      <h4 style={{ color: "grey" }}>R$ {dados.preco}</h4>
      <p>{dados.descricao}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </section>
  );
};

export default ProdutoTeste;
