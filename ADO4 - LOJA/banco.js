const clientes = [
  {
    emailCliente: "gabriel123@example.com",
    senhaCliente: "senha1234",
    nomeCliente: "Gabriel",
    urlAvatarCliente: "Assets/perfil.jpg",
    nomeArquivoAvatarCliente: "perfil.jpg",
  },
];

const produtos = [
  {
    idProduto: 1,
    nomeProduto: "Shampo Clear Men",
    descricaoProduto: "Shampo Masculino",
    valorUnitarioProduto: 19.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "Assets/shampo.png",
    nomeArquivoImgProduto: "shampo.png",
  },
  {
    idProduto: 2,
    nomeProduto: "Condicionador Eudora",
    descricaoProduto: "Condicionador Feminino",
    valorUnitarioProduto: 19.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "Assets/condicionador.png",
    nomeArquivoImgProduto: "condicionador.png",
  },
  {
    idProduto: 3,
    nomeProduto: "Creme Elseve",
    descricaoProduto: "Creme para pentear nutritivo",
    valorUnitarioProduto: 29.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "Assets/creme.jpg",
    nomeArquivoImgProduto: "creme.jpg",
  },
  {
    idProduto: 4,
    nomeProduto: "Creme WidiCare",
    descricaoProduto: "Creme para pentear cabelos ondulados",
    valorUnitarioProduto: 30.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "Assets/creme-pentear.jpg",
    nomeArquivoImgProduto: "creme-pentear.jpg",
  },
  {
    idProduto: 5,
    nomeProduto: "Secador",
    descricaoProduto: "Secador de última geração",
    valorUnitarioProduto: 299.99,
    qtdEstoqueProduto: 50,
    urlImgProduto: "Assets/secador.jpg",
    nomeArquivoImgProduto: "secador.jpg",
  },
];

localStorage.setItem("Clientes", JSON.stringify(clientes));
localStorage.setItem("Produtos", JSON.stringify(produtos));