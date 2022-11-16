class Veiculo {
	constructor() {
		this.id = 1;
		this.arrayVeiculos = [];
	}

	salvar() {
		let veiculo = this.lerDados();

		if (this.validaCampos(veiculo)) {
			this.adicionar(veiculo);
		}

		this.listarTabela();
		this.cancelar();
	}

	listarTabela() {
		let tbody = document.querySelector("tbody");

		tbody.innerHTML = "";

		for (let i = 0; i < this.arrayVeiculos.length; i++) {
			let tr = tbody.insertRow();

			let td_id = tr.insertCell();
			let td_modelo = tr.insertCell();
			let td_placa = tr.insertCell();
			let td_cor = tr.insertCell();
			let td_acoes = tr.insertCell();

			td_id.innerText = this.arrayVeiculos[i].id;
			td_modelo.innerText = this.arrayVeiculos[i].veiculo;
			td_placa.innerText = this.arrayVeiculos[i].placa;
			td_cor.innerText = this.arrayVeiculos[i].cor;

			td_id.classList.add("center");
			td_placa.classList.add("center");
			td_cor.classList.add("center");
			td_acoes.classList.add("acoes");

			let imgEdit = document.createElement("img");
			imgEdit.src = "img/edit.svg";

			let imgList = document.createElement("img");
			imgList.src = "img/list.svg";

			let imgDelete = document.createElement("img");
			imgDelete.src = "img/delete.svg";

			td_acoes.appendChild(imgList);
			td_acoes.appendChild(imgEdit);
			td_acoes.appendChild(imgDelete);
		}
	}

	adicionar(veiculo) {
		this.arrayVeiculos.push(veiculo);
		this.id++;
	}

	lerDados() {
		let veiculo = {};

		veiculo.id = this.id;
		veiculo.modelo = document.querySelector("#modelo").value;
		veiculo.placa = document.querySelector("#placa").value;
		veiculo.cor = document.querySelector("#cor").value;

		return veiculo;
	}

	validaCampos(veiculo) {
		let msg = "";

		if (veiculo.modelo == "") {
			msg += " Informe o modelo do veículo \n";
		}

		if ((veiculo.placa = "")) {
			msg += " Informe a placa do veículo \n";
		}

		if (veiculo.cor == "") {
			msg += " Informe a cor do veículo \n";
		}

		if (msg != "") {
			alert(msg);
			return false;
		}

		return true;
	}

	cancelar() {
		document.querySelector("#veiculo").value = "";
		document.querySelector("#placa").value = "";
		document.querySelector("#cor").value = "";
	}

	mostrarTabela() {
		let img_noData = document.querySelector(".svg_nodata");
		let tabelaVeiculo = document.querySelector(".container_tabela_veiculo");
		let formularioVeiculo = document.querySelector(".formularioVeiculo");
		
		console.log("chamando funcao mostrarTabela()");

		

		veiculo.esconderFormularios();
	}

	

	criarNovoVeiculo() {
		console.log("criar novo veiculo")
		let section_flipCard = document.querySelector("#flip-card");
		let div_flipCardInner = document.querySelector("#flip-card-inner");
		let formularioVeiculo = document.querySelector(".formularioVeiculo");
		

		section_flipCard.style.transform = "rotateY(0deg)";
		div_flipCardInner.style.transform = "rotateY(180deg)";
		formularioVeiculo.style.display = "block";

		veiculo.esconderFormularios();


	}

	esconderFormularios() {
		let arrayFieldset = document.getElementsByTagName("fieldset");
		let formularioVeiculo = document.querySelector(".formularioVeiculo");


		Array.from(arrayFieldset).map(index => {
			if(index.style.display != "none") {
				index.style.display = "none";
				formularioVeiculo.style.display = "block";

			}
		})
	}
}

var veiculo = new Veiculo();


