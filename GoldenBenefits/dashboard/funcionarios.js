const modalFuncionarios = document.querySelector("#modal-funcionarios");
const tbodyFuncionarios = document.querySelector("#tbody-funcionarios");
const sNomeFuncionarios = document.querySelector("#m-nome-funcionarios");
const sEmpresaFuncionarios = document.querySelector("#m-empresa-funcionarios");
const sFuncaoFuncionarios = document.querySelector("#m-funcao-funcionarios");
const btnSalvarFuncionarios = document.querySelector("#btnSalvar-funcionarios");

let funcionarios = [];
let idFuncionario;

function openModalFuncionarios(edit = false, index = 0) {
  modalFuncionarios.classList.add("active");

  modalFuncionarios.onclick = (e) => {
    if (e.target.className.indexOf("modal-container") !== -1) {
      modalFuncionarios.classList.remove("active");
    }
  };

  if (edit) {
    sNomeFuncionarios.value = funcionarios[index].nome;
    sEmpresaFuncionarios.value = funcionarios[index].empresa;
    sFuncaoFuncionarios.value = funcionarios[index].funcao;
    idFuncionario = index;
  } else {
    sNomeFuncionarios.value = "";
    sEmpresaFuncionarios.value = "";
    sFuncaoFuncionarios.value = "";
  }
}

function editFuncionario(index) {
  openModalFuncionarios(true, index);
}

function deleteFuncionario(index) {
  funcionarios.splice(index, 1);
  setFuncionarios();
  loadFuncionarios();
}

function insertFuncionario(funcionario, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${funcionario.nome}</td>
    <td>${funcionario.empresa}</td>
    <td>${funcionario.funcao}</td>
    <td class="acao">
      <button onclick="editFuncionario(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteFuncionario(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbodyFuncionarios.appendChild(tr);
}

btnSalvarFuncionarios.onclick = (e) => {
  if (
    sNomeFuncionarios.value == "" ||
    sEmpresaFuncionarios.value == "" ||
    sFuncaoFuncionarios.value == ""
  ) {
    return;
  }

  e.preventDefault();

  if (idFuncionario !== undefined) {
    funcionarios[idFuncionario].nome = sNomeFuncionarios.value;
    funcionarios[idFuncionario].empresa = sEmpresaFuncionarios.value;
    funcionarios[idFuncionario].funcao = sFuncaoFuncionarios.value;
  } else {
    funcionarios.push({
      nome: sNomeFuncionarios.value,
      empresa: sEmpresaFuncionarios.value,
      funcao: sFuncaoFuncionarios.value,
    });
  }

  setFuncionarios();

  modalFuncionarios.classList.remove("active");
  loadFuncionarios();
  idFuncionario = undefined;
};

function loadFuncionarios() {
  funcionarios = getFuncionarios();
  tbodyFuncionarios.innerHTML = "";
  funcionarios.forEach((funcionario, index) => {
    insertFuncionario(funcionario, index);
  });
}

const getFuncionarios = () =>
  JSON.parse(localStorage.getItem("dbfuncionarios")) || [];
const setFuncionarios = () =>
  localStorage.setItem("dbfuncionarios", JSON.stringify(funcionarios));

loadFuncionarios();
