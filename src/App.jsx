import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";
import ButtonModal from "./components/ButtonModal";
import Modal from "./components/Modal";
import Produto from "./pages/Produto";
import ProdutoTeste from "./pages/ProdutoTeste";
import { GlobalStorage } from "./components/GlobalContext";
import Produto3 from "./pages/Produto3";
import useLocalStorage from "./components/useLocalStorage";
import useFetch from "./components/useFetch";

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

const App = () => {
  // const dados = produtos;
  // const total = dados.compras.map((item) => Number(item.preco.replace("R$", ""))).reduce((a, b) => a + b);

  // const { pathname } = window.location;

  // let Component;
  // if (pathname === "/produtos") {
  //   Component = Produtos;
  // } else {
  //   Component = Home;
  // }

  // const [modal, setModal] = React.useState(false);

  // const [dados, setDados] = React.useState(null);
  // const [carregando, setCarregando] = React.useState(null);

  // async function handleClick(e) {
  //   setCarregando(true);
  //   const response = await fetch(
  //     `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
  //   );
  //   const json = await response.json();
  //   setDados(json);
  //   setCarregando(false);
  // }

  // const [contar, setContar] = React.useState(0);
  // const [dados, setDados] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
  //     .then(response => response.json())
  //     .then(json => setDados(json));
  // }, []);

  // const [produto, setProduto] = React.useState(null);

  // React.useEffect(() => {
  //   const produtoLocal = window.localStorage.getItem("produto");
  //   if (produtoLocal !== "null") setProduto(produtoLocal);
  // }, []);

  // React.useEffect(() => {
  //   if (produto !== "null") window.localStorage.setItem("produto", produto);
  // }, [produto]);

  // function handleClick({ target }) {
  //   setProduto(target.innerText);
  // }

  // const [comentarios, setComentarios] = React.useState([]);
  // const [input, setInput] = React.useState("");
  // const inputElement = React.useRef();

  // function handleClick() {
  //   setComentarios(comentarios => [...comentarios, input]);
  //   setInput("");
  //   inputElement.current.focus();
  // }

  // const [dados, setDados] = useLocalStorage("Produto", "");

  // function handleClick({ target }) {
  //   setDados(target.innerText);
  // }
  // const { request, data, loading, error } = useFetch();

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const { response, json } = await request(
  //       "https://ranekapi.origamid.dev/json/api/produto/"
  //     );
  //   }
  //   fetchData();
  // }, [request]);

  // if (error) return <p>{error}</p>;
  // if (loading) return <p>Carregando...</p>;
  // if (data)

  const [nome, setNome] = React.useState();
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

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
          <button onClick={handleClick} value={10}>Clique</button> 
        <Header />
        <Form />
        <Footer />
        <Header />
        <Component />
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} /> */}
      {/* <button style={{ margin: ".5rem" }} onClick={handleClick}>
          tablet
        </button>
        <button style={{ margin: ".5rem" }} onClick={handleClick}>
          smartphone
        </button>
        <button style={{ margin: ".5rem" }} onClick={handleClick}>
          notebook
        </button>
        {carregando && <p>Carregando...</p>}
        {!carregando && dados && <ProdutoTeste dados={dados} />} */}
      {/* {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
        <button onClick={() => setContar(contar + 1)}>{contar}</button> */}

      {/* <h1>Preferência: {produto}</h1>
        <button style={{ marginRight: "1rem" }} onClick={handleClick}>
          notebook
        </button>
        <button onClick={handleClick}>smartphone</button>
        <Produto produto={produto} /> */}

      {/* <ul>
          {comentarios.map(comentario => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button> */}

      {/* <GlobalStorage>
          <Produto3 />
        </GlobalStorage> */}
      {/* <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button> */}
      {/* {data.map(dado => (
          <div key={dado.id}>{dado.nome}</div>
        ))} */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <button>Enviar</button>
      </form>
    </>
  );
  // else return null;
};

export default App;
