const modalBeneficios = document.getElementById("modal-beneficios");
const tbodyBeneficios = document.getElementById("tbody-beneficios");
const sNomeBeneficios = document.getElementById("m-nome-beneficios");
const sEmpresaBeneficios = document.getElementById("m-empresa-beneficios");
const sFuncaoBeneficios = document.getElementById("m-funcao-beneficios");
const sSalarioBeneficios = document.getElementById("m-salario-beneficios");
const btnSalvarBeneficios = document.getElementById("btnSalvar-beneficios");

let beneficios = [];
let idBeneficio;

function openModalBeneficios(edit = false, index = 0) {
  modalBeneficios.classList.add("active");

  modalBeneficios.onclick = (e) => {
    if (e.target.className.indexOf("modal-container") !== -1) {
      modalBeneficios.classList.remove("active");
    }
  };

  if (edit) {
    sNomeBeneficios.value = beneficios[index].nome;
    sEmpresaBeneficios.value = beneficios[index].empresa;
    sFuncaoBeneficios.value = beneficios[index].funcao;
    sSalarioBeneficios.value = beneficios[index].salario;
    idBeneficio = index;
  } else {
    sNomeBeneficios.value = "";
    sEmpresaBeneficios.value = "";
    sFuncaoBeneficios.value = "";
    sSalarioBeneficios.value = "";
  }
}

function editBeneficio(index) {
  openModalBeneficios(true, index);
}

function deleteBeneficio(index) {
  beneficios.splice(index, 1);
  setBeneficiosBD();
  loadBeneficios();
}

function insertBeneficio(beneficio, index) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${beneficio.nome}</td>
    <td>${beneficio.empresa}</td>
    <td>${beneficio.funcao}</td>
    <td>${beneficio.salario}</td>
    <td class="acao">
      <button onclick="editBeneficio(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteBeneficio(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbodyBeneficios.appendChild(tr);
}

btnSalvarBeneficios.onclick = (e) => {
  if (
    sNomeBeneficios.value == "" ||
    sEmpresaBeneficios.value == "" ||
    sFuncaoBeneficios.value == "" ||
    sSalarioBeneficios.value == ""
  ) {
    return;
  }

  e.preventDefault();

  if (idBeneficio !== undefined) {
    beneficios[idBeneficio].nome = sNomeBeneficios.value;
    beneficios[idBeneficio].empresa = sEmpresaBeneficios.value;
    beneficios[idBeneficio].funcao = sFuncaoBeneficios.value;
    beneficios[idBeneficio].salario = sSalarioBeneficios.value;
  } else {
    beneficios.push({
      nome: sNomeBeneficios.value,
      empresa: sEmpresaBeneficios.value,
      funcao: sFuncaoBeneficios.value,
      salario: sSalarioBeneficios.value,
    });
  }

  setBeneficiosBD();

  modalBeneficios.classList.remove("active");
  loadBeneficios();
  idBeneficio = undefined;
};

function loadBeneficios() {
  beneficios = getBeneficiosBD();
  tbodyBeneficios.innerHTML = "";
  beneficios.forEach((beneficio, index) => {
    insertBeneficio(beneficio, index);
  });
}

const getBeneficiosBD = () =>
  JSON.parse(localStorage.getItem("dbbeneficios")) ?? [];
const setBeneficiosBD = () =>
  localStorage.setItem("dbbeneficios", JSON.stringify(beneficios));

loadBeneficios();
