class Categorias {
  constructor() {
    this.id = 1;
    this.arrayCategorias = [];
  }

  salvar() {
    let categoria = this.lerDados();

    if(this.validaCampos(categoria)) {
      this.adicionar(categoria)
    }

    this.listarTabela();
    this.cancelar();
  }

  listarTabelaCategorias() {
    let tbody = document.querySelector("tbodyCategorias");
  }
}