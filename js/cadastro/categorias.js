class Categorias {
	constructor() {
		this.id = 1;
		this.arrayCategorias = [];
	}

	salvar() {
		let categoria = this.lerDados();

		if (this.validaCampos(categoria)) {
			this.adicionar(categoria);
		}

		this.listarTabela();
		this.cancelar();
	}

	listarTabelaCategorias() {
		let tbody = document.querySelector("tbodyCategorias");

		tbody.innerHTML = "";

		for (let i = 0; i < this.arrayCategorias.length; i++) {
			let tr = tbody.insertRow();

			let td_id = tr.insertCell();
			let td_nome = tr.insertCell();
			let td_dataCriacao = tr.insertCell();
			let td_descricao = tr.insertCell();
			let td_acoes = tr.insertCell();

			td_id.innerHTML = this.arrayCategorias[i].id;
			td_nome.innerHTML = this.arrayCategorias[i].nome;
			td_dataCriacao.innerHTML = this.arrayCategorias[i].dataCriacao;
			td_descricao.innerHTML = this.arrayCategorias[i].descricao;

			td_id.classList.add("center");
			td_nome.classList.add("center");
			td_dataCriacao.classList.add("center");
			td_descricao.classList.add("center");

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

	adicionar(categoria) {
		this.arrayCategorias.push(categoria);
		this.id++;
	}

	lerDados() {
		let categoria = {};

		categoria.id = this.id;
		categoria.nome = document.querySelector("#categoriaNome").value;
		categoria.dataCriacao = document.querySelector("#categoriaDataCraicao").value;
		categoria.descricao = document.querySelector("#categoriaDescricao").value;

		return categoria;
	}

	validaCampos(categoria) {
		let msg = "";

		if (categoria.nome == "") {
			msg += "Informe o nome da categoria";
		}

		if (categoria.dataCriacao == "") {
			msg += "Informe a data de criação da categoria";
    }

    if(categoria.descricao == "") {
      msg += "Informe a descricao da categoria";
    }

    if(msg != "") {
      alert(msg);
      return false;
    }

    return true;
	}

  cancelar() {
    document.querySelector("#categoriaNome").value = "";
    document.querySelector("#categoriaDataCraicao").value = "";
    document.querySelector("#categoriaDescricao").value = "";
  }

  mostrarTabela() {
    let img_noData = document.querySelect(".svg_nodata");
    let tabelaCategoria = document.querySelect(".container_tabela_categoria");

    console.log("chamando mostrar tabela categoria")
    img_noData.style.display = "none";
    tabelaCategoria.style.display = "block";
  }
}

