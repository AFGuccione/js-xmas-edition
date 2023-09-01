const submitButton = document.querySelector('#enviar-carta')
submitButton.onclick = validarFormulario

const $errorBox = document.querySelector('#errores')
const $form = document.querySelector('#carta-a-santa');

function validarFormulario(event){
    let errores = []
    const nombre = $form["nombre"].value
    const ciudad = $form["ciudad"].value
    const descripcionRegalo = $form["descripcion-regalo"].value

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)

    errores.push(errorNombre,errorCiudad,errorDescripcionRegalo)

    manejarErrores(errores)

    event.preventDefault();
}

function manejarErrores(errores){
    $errorBox.innerHTML = ""
    const errorNombre = errores[0]
    const errorCiudad = errores[1]
    const errorDescripcionRegalo = errores[2]

    if(errorNombre === "" && errorCiudad === "" && errorDescripcionRegalo === ""){
        mostrarWishlist()
    }

    if(errorNombre !== ""){
        $form["nombre"].className = "error"
    }else{
        $form["nombre"].className = ""
    }

    if(errorCiudad !== ""){
        $form["ciudad"].className = "error"
    }else{
        $form["ciudad"].className = ""
    }

    if(errorDescripcionRegalo !== ""){
        $form["descripcion-regalo"].className = "error"
    }else{
        $form["descripcion-regalo"].className = ""
    }

    errores.forEach(element => {
        if(element === ""){return}
        let paragraph = document.createElement("p")
        paragraph.textContent = element
        $errorBox.appendChild(paragraph)
    });
}


function validarNombre(nombre){
    if(nombre.length === 0){
        return "El campo nombre debe tener al menos 1 caracter"
    }
    if(nombre.length >= 50){
        return "El campo nombre debe tener menos de 50 caracteres"
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo nombre no debe tener números';
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
    
    return "";
}


function mostrarWishlist() {
    setTimeout(() => {
      window.location.href = 'wishlist.html';
    }, 1500);
}
