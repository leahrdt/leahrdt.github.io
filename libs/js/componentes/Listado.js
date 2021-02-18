class Listado {
  constructor({elemRoot, titulo=""}){
    this.elemRoot = elemRoot;
    this.titulo = titulo
    this.items = [];
    this.render();
  }
  render(){
    this.elemRoot.innerHTML = `
    <h2 id="tituloLista" class=" display-4 ">${this.titulo}</h2>
    <ul>
    ${
      this.items.map(
        r => `<li class="${r.clasificacion}">${r.resenia}</li>`
      ).join('')
    }
    </ul>
    `;
  }
  agregar(objResenia){
    this.items.push(objResenia);
    this.render();
  }
}