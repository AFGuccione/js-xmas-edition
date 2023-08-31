const submitButton = document.querySelector('#enviar-carta')
submitButton.onclick = validarFormulario

const $errorBox = document.querySelector('#error')
const $form = document.querySelector('#carta-a-santa');


function validarNombre(nombre){
    if(nombre.length === 0){
        return "El campo nombre debe tener al menos 1 caracter"
    }
    if(nombre.length >= 50){
        return "El campo nombre debe tener menos de 50 caracteres"
    }
    return ""
}

function validarCiudad(ciudad){
    if(ciudad === ""){
        return "Falta seleccionar la ciudad"
    }
    return ""
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0) {
        return 'La carta no puede estar vacia';
    }
    
    if (descripcionRegalo.length > 150) {
        return 'La carta no puede tener mas de 150 caracteres';
    }
    
    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'La carta solo puede tener letras y números';
    }
    
    return '';
}

