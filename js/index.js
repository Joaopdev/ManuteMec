
let formularioVeiculo = document.querySelector(".formularioVeiculo");
let formularioCategoria = document.querySelector(".formularioCategoria");
let formularioFornecedor = document.querySelector(".formularioFornecedor");
let formularioPecas = document.querySelector(".formularioPecas");
let formularioOficina = document.querySelector(".formularioOficina");
let formularioServico = document.querySelector(".formularioServico");

let img_noData = document.querySelector(".svg_nodata");

let btn_formularioVeiculo =	document.querySelector(".btn-formVeiculo");
let btn_formularioCategoria =	document.querySelector(".btn-formCategoria");
let btn_formularioFornecedor = document.querySelector(".btn-formFornecedor");
let btn_formularioPecas = document.querySelector(".btn-formPecas");
let btn_formularioOficina = document.querySelector(".btn-formOficina");
let btn_formularioServico = document.querySelector(".btn-formServico");



export const esconderFormularios = function () {
  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";
} 


btn_formularioVeiculo.addEventListener("click", function() {

  img_noData.style.display = "none";
  
  formularioVeiculo.style.display = "none"
  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";

  if (formularioVeiculo.style.display === "none") {
    formularioVeiculo.style.display = "block";
  } else {
    formularioVeiculo.style.display = "block";
  }
});


btn_formularioCategoria.addEventListener("click", function() {

  img_noData.style.display = "none";

  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";

  if (formularioCategoria.style.display === "none") {
    formularioCategoria.style.display = "block";
  } else {
    formularioCategoria.style.display = "block";
  }
});


btn_formularioFornecedor.addEventListener("click", () => {
  img_noData.style.display = "none";

  formularioVeiculo.style.display = "none"
  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";

  if (formularioFornecedor.style.display === "none") {
    formularioFornecedor.style.display = "block";
  } else {
    formularioFornecedor.style.display = "block";
  }
});



btn_formularioPecas.addEventListener("click", () => {
  img_noData.style.display = "none";

  formularioVeiculo.style.display = "none"
  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";

  if (formularioPecas.style.display === "none") {
    formularioPecas.style.display = "block";
  } else {
    formularioPecas.style.display = "block";
  }
});

btn_formularioOficina.addEventListener("click", () => {
  img_noData.style.display = "none";

  formularioVeiculo.style.display = "none"
  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";

  if (formularioOficina.style.display = "none") {
    formularioOficina.style.display = "block";
  } else {
    formularioOficina.style.display = "block";
  }
});

btn_formularioServico.addEventListener("click", () => {
  img_noData.style.display = "none";
  
  formularioVeiculo.style.display = "none"
  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";

  if (formularioServico.style.display = "none") {
    formularioServico.style.display = "block";
  } else {
    formularioServico.style.display = "block";
  }
});




