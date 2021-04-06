var selectPrincipal = document.getElementById("p-i");
selectPrincipal.value = 0;
console.log("hola");

selectPrincipal.addEventListener('change', actualizar);

function actualizar(e){
    let valorActualSelect = e.target.value;
    console.log(valorActualSelect);
    if (valorActualSelect == 0){
        mostrarAdvertencia();
    }else if(valorActualSelect == 1){
        mostrarCovid();
    }else if(valorActualSelect == 2){
        mostrarNoCovid();
    }else{
        mostrarError();
    }
}

var mostrarAdvertencia = function(){
    alert("Seleccione una opción");
    return false;
}

var mostrarCovid = function(){
    ocultarPrincipal();
    document.getElementById("covid").style.display = 'block';
}

function ocultarPrincipal(){
    document.getElementById("pregunta-inicial").style.display = 'none';
}

var mostrarError = function(e){
    alert("Error desconocido");
    return false;
}

