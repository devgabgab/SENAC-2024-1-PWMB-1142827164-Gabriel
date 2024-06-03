const modalReembolso = document.getElementById("modal-reembolso");
const tbodyReembolso = document.getElementById("tbody-reembolso");
const sNomeReembolso = document.getElementById("m-nome-funcionario-reembolso");
const sEmpresaReembolso = document.getElementById("m-empresa-reembolso");
const sNomeBeneficioReembolso = document.getElementById(
  "m-nome-beneficio-reembolso"
);
const sValorBeneficioReembolso = document.getElementById(
  "m-valor-beneficio-reembolso"
);
const btnSalvarReembolso = document.getElementById("btnSalvar-reembolso");

let reembolsos = [];
let idReembolso;

function openModalReembolso(edit = false, index = 0) {
  modalReembolso.classList.add("active");

  modalReembolso.onclick = (e) => {
    if (e.target.className.indexOf("modal-container") !== -1) {
      modalReembolso.classList.remove("active");
    }
  };

  if (edit) {
    sNomeReembolso.value = reembolsos[index].nome;
    sEmpresaReembolso.value = reembolsos[index].empresa;
    sNomeBeneficioReembolso.value = reembolsos[index].beneficio;
    sValorBeneficioReembolso.value = reembolsos[index].valor;
    idReembolso = index;
  } else {
    sNomeReembolso.value = "";
    sEmpresaReembolso.value = "";
    sNomeBeneficioReembolso.value = "";
    sValorBeneficioReembolso.value = "";
  }
}

function editReembolso(index) {
  openModalReembolso(true, index);
}

function deleteReembolso(index) {
  reembolsos.splice(index, 1);
  setReembolsosBD();
  loadReembolsos();
}

function insertReembolso(reembolso, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${reembolso.nome}</td>
    <td>${reembolso.empresa}</td>
    <td>${reembolso.beneficio}</td>
    <td>${reembolso.valor}</td>
    <td>Aceito</td>
    <td class="acao">
      <button onclick="editReembolso(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteReembolso(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbodyReembolso.appendChild(tr);
}

btnSalvarReembolso.onclick = (e) => {
  if (
    sNomeReembolso.value == "" ||
    sEmpresaReembolso.value == "" ||
    sNomeBeneficioReembolso.value == "" ||
    sValorBeneficioReembolso.value == ""
  ) {
    return;
  }

  e.preventDefault();

  if (idReembolso !== undefined) {
    reembolsos[idReembolso].nome = sNomeReembolso.value;
    reembolsos[idReembolso].empresa = sEmpresaReembolso.value;
    reembolsos[idReembolso].beneficio = sNomeBeneficioReembolso.value;
    reembolsos[idReembolso].valor = sValorBeneficioReembolso.value;
  } else {
    reembolsos.push({
      nome: sNomeReembolso.value,
      empresa: sEmpresaReembolso.value,
      beneficio: sNomeBeneficioReembolso.value,
      valor: sValorBeneficioReembolso.value,
    });
  }

  // Definindo o status como "aceito"
  reembolsos[reembolsos.length - 1].status = "Aceito";

  setReembolsosBD();

  modalReembolso.classList.remove("active");
  loadReembolsos();
  idReembolso = undefined;
};

function loadReembolsos() {
  reembolsos = getReembolsosBD();
  tbodyReembolso.innerHTML = "";
  reembolsos.forEach((reembolso, index) => {
    insertReembolso(reembolso, index);
  });
}

const getReembolsosBD = () =>
  JSON.parse(localStorage.getItem("dbreembolsos")) ?? [];
const setReembolsosBD = () =>
  localStorage.setItem("dbreembolsos", JSON.stringify(reembolsos));

loadReembolsos();
