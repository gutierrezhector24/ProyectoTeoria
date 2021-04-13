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
    //ocultarNoCovid();
    document.getElementById("covid").style.display = 'block';
}

var mostrarNoCovid = function(){
    ocultarPrincipal();
    //ocultarCovid();
    document.getElementById("no-covid").style.display = 'block';
}

var mostrarSimularNoCovid = function(){
   ocultarNoCovid();
   document.getElementById('secundario-noCovid').style.display = 'block';
}

var mostrarSimularCovid = function(){
   ocultarCovid();
   document.getElementById('secundario-covid').style.display = 'block';
}

function ocultarSimularNoCovid(){
   document.getElementById("secundario-noCovid").style.display = 'none';
}

function ocultarSimularCovid(){
   document.getElementById("secundario-covid").style.display = 'none';
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
document.getElementById("regresar-secundario-noCovid").addEventListener("click", regresarSecundarioNoCovid);
document.getElementById("regresar-secundario-covid").addEventListener("click", regresarSecundarioCovid);

function regresarCovid(){
    ocultarCovid();
    mostrarPrincipal();
}

function regresarNoCovid(){
    ocultarNoCovid();
    mostrarPrincipal();
}

function regresarSecundarioNoCovid(){
   ocultarSimularNoCovid();
   mostrarNoCovid();
}

function regresarSecundarioCovid(){
   ocultarSimularCovid();
   mostrarCovid();
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



//variables imprevistas
var datosCovid = {
   valorEnfermedades: 100,
   probabilidadMorir: 20,
   probabilidadRecuperarse: 80,
   valorBase: 100
}

var datosNoCovid = {
   valorEnfermedades: 100,
   probabilidadPositivo: 60,
   probabilidadNegativo: 40,
   valorBase: 100
}

var selectorM = document.querySelector('#mm');
var selectorN = document.querySelector('#nn');

var covidBarras;
var covidCircular;

function simularCovid(){
   //mandar parametros de validacion de formulario
   let tipoCovid = selectorM.value;
   mostrarSimularCovid();
   graficarCovid(tipoCovid, datosCovid);
}

function simularNoCovid(){
   //mandar parametros de validacion de formulario
   let tipoNoCovid = selectorN.value;
   graficarNoCovid(tipoNoCovid, datosNoCovid);
   mostrarSimularNoCovid();
}

function graficarCovid(tipo, datos){
  graficaBarrasCovid(datos);
  graficaCircularCovid(datos);
  //console.log()
  tipo == 1 ? mostrarBarrasCovid() : mostrarCircularCovid();
}

function graficarNoCovid(tipo, datos){
   graficaBarrasNoCovid(datos);
   graficaCircularNoCovid(datos);
   tipo == 1 ? mostrarBarrasNoCovid() : mostrarCircularNoCovid();
}

function mostrarBarrasCovid(){
   covidCircular = 0;
   covidBarras = 1;
   ocultarCircularCovid();
   document.getElementById('chart-covid').style.display = 'block';
}

function mostrarCircularCovid(){
   covidBarras = 0;
   covidCircular = 1;
   ocultarBarrasCovid();
   document.getElementById('chart-covid-circular').style.display = 'block';
}

function ocultarBarrasCovid(){
   document.getElementById('chart-covid').style.display = 'none';
}

function ocultarCircularCovid(){
   document.getElementById('chart-covid-circular').style.display = 'none';
}

function graficaBarrasCovid(datos){
   
   let titulo = 'Covid';

   let ctxBarrasCovid = document.getElementById('chart-covid').getContext('2d');
   let chartBarrasCovid = new Chart(ctxBarrasCovid, {
      type: 'bar',
      data: {
         labels: ['Base', 'Recuperarse', 'Morir', 'Enfermedades'],
         datasets: [{
            label: titulo,
            data: [datos["valorBase"], datos["probabilidadRecuperarse"],
                   datos["probabilidadMorir"], datos["valorEnfermedades"]],
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(255, 206, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
         }]
      },
      options: {
         scales: {
            yAxes: [{
               ticks: {
                  beginAtZero: true
               }
            }]
         }
      }
   });
}

function graficaCircularCovid(datos){
 
   let titulo = 'No Covid';

   let ctxCovidCircular = document.getElementById("chart-covid-circular");
   let dataCovidCircular = {
      datasets: [{
         label: titulo,
         data: [datos["valorBase"], datos["probabilidadRecuperarse"],
                datos["probabilidadMorir"], datos["valorEnfermedades"]],
         backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
         ],
         borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
         ],
         borderWidth: 1
      }],
      labels: ['Base', 'Recuperarse', 'Morir', 'Enfermedades']
   };

   let myPieChartCovid = new Chart(ctxCovidCircular, {
      type: 'pie',
      data: dataCovidCircular
   });

}

function graficaBarrasNoCovid(){

}

function graficaCircularNoCovid(){

}


selectorM.addEventListener('change', actualizar);

function actualizar(e){
   //console.log(llamadasBarras);
   //console.log(ventasBarras);
   //console.log(montosBarras);

   let valorActual = e.target.value;
   //console.log(valorActual);
   if(valorActual == 1){ //Es gráfica de barras
      //if(covidBarras == 1){
      mostrarBarrasCovid();
      //}else if(ventasBarras == 1){
         //verVentas();
      //}else{
         //mostrarCircularCovid();
      //}
   }else{ //Es gráfica circular
      mostrarCircularCovid();
      /*if(mo == 1){
         verLlamadasCircular();
      }else if(ventasBarras == 1){
         verVentasCircular();
      }else{
         verMontosCircular();
      }*/
   }
}

