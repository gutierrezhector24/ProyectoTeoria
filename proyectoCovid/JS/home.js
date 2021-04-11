var selectPrincipal = document.getElementById("p-i");
var selectEnfermedades = document.getElementById("enfermedades-base");
var selectSintomas = document.getElementById("s-sintomas");
selectPrincipal.value = 0;
var enfermedadesBase = [];
var sintomas = [];
var jsonValoresCOVID = {
    enfermedadesBase: {
        hipertension: {
            valorPeligro: 0
        },
        diabetes: {
            valorPeligro: 0
        },
        cancer: {
            valorPeligro: 0
        }
    },
    sintomas: {
        congestionNasal: {
            valorPeligro: 0
        },
        malestarGarganta: {
            valorPeligro: 0
        },
        dolorCorporal: {
            valorPeligro: 0
        },
        dolorOjos: {
            valorPeligro: 0
        },
        dolorCabeza: {
            valorPeligro: 0
        },
        vomito: {
            valorPeligro: 0
        },
        diarrea: {
            valorPeligro: 0
        },
        decaimiento: {
            valorPeligro: 0
        },
        fiebre: {
            valorPeligro: 0
        },
        perdidaGustoOlfato: {
            valorPeligro: 0
        },
        opresionPecho: {
            valorPeligro: 0
        },
        cansancio: {
            valorPeligro: 0
        }
    },
    edad: {
        ceroDiecisiete: {
            valorPeligro: 0
        },
        dieciochoTreinticinco: {
            valorPeligro: 0
        },
        treintiseisCincuenta: {
            valorPeligro: 0
        },
        cincuentayunoMas: {
            valorPeligro: 0
        }
    },
    peso: {

    },
    diasConSintomas: {
        unoTres: {
            valorPeligro: 0
        },
        cuatroDiez: {
            valorPeligro: 0
        },
        onceDieciocho: {
            valorPeligro: 0
        },
        diecinueveMas: {
            valorPeligro: 0
        }
    }
}

selectPrincipal.addEventListener('change', actualizar);
selectEnfermedades.addEventListener('change', analizarOpcion);
selectSintomas.addEventListener('change', analizarOpcionSintomas)

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

function analizarOpcion(e){
    let valorSINO = e.target.value;
    if(valorSINO == 1){
        mostrarModalEnfermedades();
    }
}

function analizarOpcionSintomas(e){
    let valorActualSintomas = e.target.value;
    if (valorActualSintomas == 1){
        mostrarModalSintomas();
    }
}

var mostrarModalEnfermedades = function(){
    $('#modal-enfermedades').modal('show');
}

var ocultarModalEnfermedades = function(){
    $('#modal-enfermedades').modal('hide');
}

var mostrarModalSintomas = function(){
    $('#modal-sintomas').modal('show');
}

var ocultarModalSintomas = function(){
    $('#modal-sintomas').modal('hide');
}

function mostrarAdvertencia(){
    alert("Seleccione una opción");
    return false;
}

var mostrarCovid = function(){
    ocultarPrincipal();
    document.getElementById("covid").style.display = 'block';
}

var mostrarNoCovid = function(){
    ocultarPrincipal();
    document.getElementById("no-covid").style.display = 'block';
}

function ocultarPrincipal(){
    document.getElementById("pregunta-inicial").style.display = 'none';
}

var mostrarError = function(e){
    alert("Error desconocido");
    return false;
}

function reestablecerValorEB(){
    if(comprobarCheckEnfermedades() == true){
        selectEnfermedades.value = 1;
    }else{
        selectEnfermedades.value = 0;
    }
}

function reestablecerValorS(){
    if(comprobarCheckSintomas() == true){
        selectSintomas.value = 1;
    }else{
        selectSintomas.value = 0;
    }
}

function comprobarCheckEnfermedades(){
    let retorno;
    let hipertension = document.getElementById('hipertension');
    let cancer = document.getElementById('cancer');
    let diabetes = document.getElementById('diabetes');

    if (
        hipertension.checked == false &&
        cancer.checked == false &&
        diabetes.checked == false
    ){
        retorno = false;
    }else{
        guardarEnfermedadesBase();
        retorno = true;
    }

    return retorno;

}

function comprobarCheckSintomas(){
    let retorno;
    let tos = document.getElementById("tos");
    let congestionNasal = document.getElementById("congestion-nasal");
    let malestarGarganta = document.getElementById("malestar-garganta");
    let dolorCorporal = document.getElementById("dolor-corporal");
    let dolorOjos = document.getElementById("dolor-ojos");
    let dolorCabeza = document.getElementById("dolor-cabeza");
    let vomito = document.getElementById("vomito");
    let diarrea = document.getElementById("diarrea");
    let decaimiento = document.getElementById("decaimiento");
    let fiebre = document.getElementById("fiebre");
    let perdidaGustoOlfato = document.getElementById("perdida-gusto-olfato");
    let opresionPecho = document.getElementById("opresion-pecho");
    let cansancio = document.getElementById("cansancio");

    if(
        tos.checked == false &&
        congestionNasal.checked == false &&
        malestarGarganta.checked == false &&
        dolorCorporal.checked == false &&
        dolorOjos.checked == false &&
        dolorCabeza.checked == false &&
        vomito.checked == false &&
        diarrea.checked == false &&
        decaimiento.checked == false &&
        fiebre.checked == false &&
        perdidaGustoOlfato.checked == false &&
        opresionPecho.checked == false &&
        cansancio.checked == false 
    ){
        retorno == false;
    }else{
        guardarSintomas();
        retorno = true;
    }

    return retorno;
}

function guardarEnfermedadesBase(){
    limpiarArregloEnfermedadesBase();
    $("#enf-base input[type=checkbox]:checked").each(function () {
        if (this.value != undefined)
            enfermedadesBase.push(this.value);
    });
    comprobarArregloEnfermedadesBase();
    console.log(enfermedadesBase);
}


function guardarSintomas(){
    limpiarArregloSintomas();
    $("#sintomas input[type=checkbox]:checked").each(function () {
        if (this.value != undefined)
            sintomas.push(this.value);
    });
    comprobarArregloSintomas();
    console.log(sintomas);
}

function comprobarArregloEnfermedadesBase(){
    if(enfermedadesBase.length == 0)
        selectEnfermedades.value = 0;
    else
        selectEnfermedades.value = 1;
}

function comprobarArregloSintomas(){
    if(sintomas.length == 0)
        selectSintomas.value = 0;
    else
        selectSintomas.value = 1;
}

function limpiarArregloEnfermedadesBase(){
    enfermedadesBase = [];
}

function limpiarArregloSintomas(){
    sintomas = [];
}

document.getElementById("regresar-covid").addEventListener("click", regresarCovid);
document.getElementById("regresar-no-covid").addEventListener("click", regresarNoCovid);

function regresarCovid(){
    ocultarCovid();
    mostrarPrincipal();
}

function regresarNoCovid(){
    ocultarNoCovid();
    mostrarPrincipal();
}

function ocultarCovid(){
    document.getElementById("covid").style.display = 'none';
}

function ocultarNoCovid(){
    document.getElementById("no-covid").style.display = 'none';
}

function mostrarPrincipal(){
    location.reload();
}
// input[type=checkbox]:checked