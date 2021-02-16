function validarNombre(cadenaNombre){
    return /^[A-Za-z ,.'-]+$/i.test(cadenaNombre);
}

function validarApellido(cadenaApellido){
    return /^[A-Za-z ,.'-]+$/i.test(cadenaApellido);
}

function validarEmail(cadenaEmail){
    return /^\w+@\w+(\.\w{2,3})+$/i.test(cadenaEmail);
}

function validarTel(cadenaTel){
    return /[0-9_\.]/i.test(cadenaTel);
}

function validarSelector(valorSeleccionado){
    return valorSeleccionado !== "ninguno";
}

function validarCheckbox(nodoCheckbox){
    return nodoCheckbox.checked;
}
