function probarValidarNombre(){
    console.assert(
        validarNombre('') 
        === 'El campo nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
    console.assert(
        validarNombre('Pepito@#&asd') 
        === 'El campo nombre no debe tener números',
        'Validar nombre no validó que el nombre no tenga caracteres especiales',
    );
    console.assert(
        validarNombre('Pedro Pascar Roberto Emerenciano Jimenez de La Torre') 
        === 'El campo nombre debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre no tenga mas de 50 caracteres',
    );
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') 
        === 'Falta seleccionar la ciudad',
        'Validar ciudad no tiene ninguna ciudad seleccionada',
    );
}

function probarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') 
        === 'La carta no puede estar vacia',
        'Validar descripcion regalo no validó que la carta este vacia',
    );
    console.assert(
        validarDescripcionRegalo('aksdljfasasdflñkasdñlfkañsldkfa{ñskdasfñ{laskdf{ñaksdfñ{a{sfñl{ldkñjfañlksdjfaladsñlfkjasdñlkfjañslkdjfñlkasjdflñkajsdñlkfjasñlkdfjalñksdjflaksjdfñlkasjdf') 
        === 'La carta no puede tener mas de 150 caracteres',
        'Validar descripcion regalo no validó que la carta no tenga mas de 150 caracteres',
    );
    console.assert(
        validarDescripcionRegalo('asd#%@/9♀') 
        === "La carta solo puede tener letras y números",
        'Validar descripcion regalo no validó que la carta no contenga caracteres especiales',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarDescripcionRegalo();
