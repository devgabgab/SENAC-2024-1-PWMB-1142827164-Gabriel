const clientes = [
  {
    emailCliente: "Goldenbenefits@example.com",
    senhaCliente: "golden1234",
    nomeCliente: "Golden",
    urlAvatarCliente: "Assets/perfil.jpg",
    nomeArquivoAvatarCliente: "perfil.jpg",
  },
];

localStorage.setItem("Clientes", JSON.stringify(clientes));
