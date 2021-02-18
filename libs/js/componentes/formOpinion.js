class formOpinion extends Observable{
  constructor({titulo, textoEnviar="Enviar", elemRoot}) {
    super();
    this.titulo = titulo;
    this.elemRoot = elemRoot;
    this.textoEnviar = textoEnviar;

    this.render();
    this.form = elemRoot.querySelector("form");
 
    this.form.addEventListener("submit", this.enviar.bind(this));
  }

  render() {
    this.elemRoot.innerHTML = `
    <form>
        <h2>¿Qué te pareció?</h2>
        <label >
        <div  >
            <textarea name="resenia"></textarea>
            </div>
        </label>
        <div class="row"> 
        <div class="col-9"> 
        <label>
            Calificada como
            <select name="tipo">
                <option value="buena">Buena</option>
                <option value="regular">Regular</option>
                <option value="mala">Mala</option>
            </select>
            </div>
            <div class="col-1">
        </label>
        <button>${this.textoEnviar}</button>
        </div>
        </div>
    </form>`;
  }

  enviar(e) { 
    e.preventDefault();
    let areaResenia = this.form.elements.resenia;
    let cboTipo = this.form.elements.tipo;
    
    let miResenia = new Resenia(areaResenia.value, cboTipo.value);
    // console.log(miResenia, this.titulo);
    this.notify(cboTipo.value, miResenia);

    this.form.reset();
  }

}
