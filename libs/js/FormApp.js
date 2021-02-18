const formRegistro = document.forms.registro;

const inputNombre  = formRegistro.contactName;
const inputApellido  = formRegistro.contactApellido;
const inputEmail   = formRegistro.contactEmail;
const inputTel   = formRegistro.contactTel;
const chkTerminos  = formRegistro.elements.terminos;

inputNombre.addEventListener('blur', e => blurControl(inputNombre, validarNombre));
inputApellido.addEventListener('blur', e => blurControl(inputApellido, validarApellido));
inputEmail.addEventListener('blur',  e => blurControl(inputEmail, validarEmail));
inputTel.addEventListener('blur',  e => blurControl(inputTel, validarTel));
chkTerminos.addEventListener("blur", e => blurCheck(chkTerminos));


formRegistro.addEventListener("submit", e => {
  blurControl(inputNombre, validarNombre);
  blurControl(inputNombre, validarApellido);
  blurControl(inputEmail, validarEmail);
  blurControl(inputTel, validarTel);
  blurCheck(chkTerminos);
  if(
    inputNombre.classList.contains("con-error") ||
    inputApellido.classList.contains("con-error") ||
    inputEmail.classList.contains("con-error") ||
    inputTel.classList.contains("con-error") ||
    chkTerminos.classList.contains("con-error")
  ){
    e.preventDefault();
  }
  else( 
    alert("Formulario Perfectamente validado! muchas gracias, va a ser redirigido a la pagina principal!")

  )

});

//---------------------------------------------------------------

function blurControl(nodo, validacion){
  if(validacion(nodo.value)){
    nodo.classList.remove("con-error");
  }
  else{
    nodo.classList.add("con-error");
  }
}

function blurCheck(nodo){
  if(validarCheckbox(nodo)){
    nodo.classList.remove("con-error");
  }
  else{
    nodo.classList.add("con-error");
  }
}



