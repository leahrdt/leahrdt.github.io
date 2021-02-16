class Formulario extends Observable{
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
  


    
    <div class="container-fluid">
    <div class="row">
    
    <div class="col-md-5 col-12">
    <h2  ID="formTitle" data-aos="fade-in" data-aos-delay="150" class="display-4">Formulario desarrollado con HTML, CSS y JavaScript. Validado con clases CSS y Javascript a travez de exp-regulares</h2>

    </div>


    <div class="divForm col-md-7 col-12">
    <form  id="contact" action="" name="registro" method:"post" >

    <label class="labelForm" for="contactName">Nombre *</label>
    <input 
    id="contactName"
    name= "contactName"
    type="text" 
    pattern="[a-z A-Z ñ Ñ]{2,50}"
    title= "Su nombre debe contener solamente letras, al menos 2 caracteres y como maximo 50"
    >
    <span class="validation">Su nombre debe contener solamente letras, al menos 2 caracteres y como maximo 50</span>

    <label class="labelForm" for="contactApellido">Apellido *</label>
    <input 
    id="contactApellido"
    name= "contactApellido"
    type="text" 
    pattern="[a-z A-Z ñ Ñ]{2,50}"
    title= "Su appelido debe contener solamente letras, al menos 2 caracteres y como maximo 50"
    >
    <span class="validation">Su nombre debe contener solamente letras, al menos 2 caracteres y como maximo 50</span>

    <label class="labelForm" for="contactEmail">Correo *</label>
    <input 
    id="contactEmail"
    name= "contactEmail"
    type="email">
    <div class="validation">Ingrese una direccion de correo Valida, respetando la siguiente estructura "usuario@dominio" </div>

    <label class="labelForm" for="contactTel">Telefono *</label>
    <input 
    id="contactTel"
    name= "contactTel"
    type="tel" 
    pattern="[0-9]{6,17}"
    title="ingrese su numero, sin simbolooooos, el mismo debe contener entre 6 y 17 digitos"
    
    > 
    <div class="validation">Ingrese un numero de telefono  </div>

    <label class="labelForm" for="contactBirth">Fecha de Naciomiento *</label>
    <input 
    id="contactBirth"
    name= "contactBirth"
    type="date" 
    max="2021-09-01"
    value="2002-09-01"
    min="1920-09-01"
    >
    <div class="validation">Ingrese su fecha de nacimiento </div>


    <label class="labelForm" for="terminos">Aceptar terminos y condiciones (*)  <span id="terminos"></span></label>
    <input 
    id= "terminos"
    name="terminos"
    type="checkbox" 
    >
    <div class="validation">Debe aceptar los terminos y condiciones </div>


    <label class="labelForm" for="consulta" requiered="required">Consulta</label>
    <textarea name="consulta" id="consulta" cols="30" rows="10" minlength="10" maxlength="200" ></textarea>
    <button>ENVIAR CONSULTA</button>
    <div class="validation">Todos los campos con asterisco (*) son obligatorios </div>

    </form>
    </div>
    </div>
    </div>

    `;
  }



}

/*

function addEventListener(evento, callback){

//evento = "submit"
//callback = function(e){ ... this ... }

  //this = nodo form

  // escuchando evento "submit" para this
  let objetoEvento = { 
    target: un_nodo
    ...
  }
  callback.call(this, objetoEvento);

}


*/