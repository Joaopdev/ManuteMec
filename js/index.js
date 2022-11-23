
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



const esconderFormularios = function () {
  formularioCategoria.style.display = "none"
  formularioFornecedor.style.display = "none";
  formularioPecas.style.display = "none";
  formularioOficina.style.display = "none";
  formularioServico.style.display = "none";
} 


function validacao() {
  let email = document.querySelector("#inputEmail");
  let senha = document.querySelector("#inputSenha");
  let telaLogin = document.querySelector(".telaLogin");
  let telaHome = document.querySelector(".home");

  if (email.value != "admin@admin.com" || senha.value != "admin123") {
    
    console.log("Entrou na validacao. Email ou senha errados")
  }

  else {
    console.log("Senha e email corretos");
    telaLogin.style.display = "none";
    telaHome.style.display = "block";
  }
}

function abrirCardLogin() {
  let card = document.querySelector(".container_login")
  let botao = document.querySelector("#botao_home");
  let backgroundImage = document.querySelector("#backgroundImage");
  backgroundImage.style.filter = "brightness(10%) ";

  if (card.style.display = "none") {
    card.style.transition = "ease-in 1s";
    card.style.display = "flex";
    botao.style.visibility = "hidden";
  }
  else {
    card.style.display = "flex"
  }
}



let esqueciSenha = document.querySelector("#esqueci_senha");
esqueciSenha.addEventListener("click", () => {
  alert("Essa função ainda não foi implementada. Tente usar e-mail: admin@admin e senha: \"123456teste\" para teste");
})

let novoCadastro = document.querySelector("#novo_cadastro");
novoCadastro.addEventListener("click", function () {
  alert("Essa função ainda não foi implementada. Tente usar e-mail: admin@admin e senha: \"123456teste\" para teste");
})



