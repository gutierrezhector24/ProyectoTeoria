var selectPrincipal = document.getElementById("p-i");
var selectEnfermedades = document.getElementById("enfermedades-base");
var selectEnfermedades2 = document.getElementById("enfermedades-base-n")
var selectSintomas = document.getElementById("s-sintomas");
var selectSintomas2 = document.getElementById("s-sintomas-n");
selectPrincipal.value = 0;
var enfermedadesBase = [];
var sintomas = [];
var jsonValoresCOVID = {
    enfermedadesBase: {
        hipertension: {
            valorPeligro: 9
        },
        diabetes: {
            valorPeligro: 9
        },
        cancer: {
            valorPeligro: 9
        },
        enfermedadesPulmonares: {
            valorPeligro: 8
        }
    },
    sintomas: {
        congestionNasal: {
            valorPeligro: 2
        },
        malestarGarganta: {
            valorPeligro: 5
        },
        dolorCorporal: {
            valorPeligro: 5
        },
        dolorOjos: {
            valorPeligro: 3
        },
        dolorCabeza: {
            valorPeligro: 4
        },
        vomito: {
            valorPeligro: 7
        },
        diarrea: {
            valorPeligro: 7
        },
        decaimiento: {
            valorPeligro: 2
        },
        fiebre: {
            valorPeligro: 9
        },
        perdidaGustoOlfato: {
            valorPeligro: 10
        },
        opresionPecho: {
            valorPeligro: 7
        },
        cansancio: {
            valorPeligro: 5
        },
        sudoracion: {
            valorPeligro: 2
        }
    },

    edad: {
        ceroVeinte: {
            valorPeligro: 2
        },
        veintiunoCuarenta: {
            valorPeligro: 9
        },
        cuarentayunoSesenta: {
            valorPeligro: 6
        },
        sesentaMas: {
            valorPeligro: 7
        }
    },
    sexo: {
        masculino: {
            valorPeligro: 3
        },
        femenino: {
            valorPeligro: 1
        }
    },
    IMC: {
        dieciochopuntocincoVeinticuatropuntonueve: {
            valorPeligro: 4
        },
        veinticincoVeintinuevepuntonueve: {
            valorPeligro: 6
        },
        trientaTreintaycuatropuntonueve: {
            valorPeligro: 7
        },
        treintaycincoTreintaynuevepuntonueve: {
            valorPeligro: 8
        },
        cuarentaMas: {
            valorPeligro: 10
        }

    },
    ingresoCentroMedico: {
        unoasietedias: {
            valorPeligro: 9
        },
        unoacatorcedias: {
            valorPeligro: 7
        },
        unoaveintiundias: {
            valorPeligro: 10
        }

    },
    ejercicio: {
        poco: {
            valorPeligro: 0
        },
        intermedio: {
            valorPeligro: 0
        },
        mucho: {
            valorPeligro: 0
        }

    },
    visitaATribalesHospitales: {
        poco: {
            valorPeligro: 4
        },
        medio: {
            valorPeligro: 6
        },
        frecuentemente: {
            valorPeligro: 9
        }

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

var jsonValoresNOCOVID = {
    enfermedadesBase: {
        hipertension: {
            valorPeligro: 8
        },
        diabetes: {
            valorPeligro: 8
        },
        cancer: {
            valorPeligro: 8
        },
        enfermedadesPulmonares: {
            valorPeligro: 7
        }
    },
    sintomas: {
        congestionNasal: {
            valorPeligro: 1
        },
        malestarGarganta: {
            valorPeligro: 4
        },
        dolorCorporal: {
            valorPeligro: 4
        },
        dolorOjos: {
            valorPeligro: 2
        },
        dolorCabeza: {
            valorPeligro: 3
        },
        vomito: {
            valorPeligro: 6
        },
        diarrea: {
            valorPeligro: 6
        },
        decaimiento: {
            valorPeligro: 1
        },
        fiebre: {
            valorPeligro: 8
        },
        perdidaGustoOlfato: {
            valorPeligro: 9
        },
        opresionPecho: {
            valorPeligro: 6
        },
        cansancio: {
            valorPeligro: 4
        },
        sudoracion: {
            valorPeligro: 1
        }
    },
    edad: {
        ceroVeinte: {
            valorPeligro: 1
        },
        veintiunoCuarenta: {
            valorPeligro: 8
        },
        cuarentayunoSesenta: {
            valorPeligro: 5
        },
        sesentaMas: {
            valorPeligro: 6
        }
    },
    sexo: {
        masculino: {
            valorPeligro: 2
        },
        femenino: {
            valorPeligro: 0
        }
    },
    frecuenciaLavado: {
        nunca: {
            valorPeligro: 9
        },
        poco: {
            valorPeligro: 7
        },
        frecuentemente: {
            valorPeligro: 2
        }

    },
    usoTipoDesinfectante: {
        cloro: {
            valorPeligro: -4
        },
        amonio: {
            valorPeligro: -3
        },
        alcoholSetentaPorciento: {
            valorPeligro: -6
        },
        alcoholNoventayseisPorciento: {
            valorPeligro: -2
        }

    },
    usoMascarilla: {
        nunca: {
            valorPeligro: 9
        },
        poco: {
            valorPeligro: 7
        },
        frecuentemente: 1
    },
    cantidadGenteEnLugares: {
        menosCincuenta: {
            valorPeligro: 2
        },
        cincuentayunoCientoCincuenta: {
            valorPeligro: 5
        },
        cientoCicuentayUnoMas: {
            valorPeligro: 9
        }
    },
    ejercicio: {
        poco: {
            valorPeligro: 0
        },
        intermedio: {
            valorPeligro: 0
        },
        mucho: {
            valorPeligro: 0
        }

    },

    visitaATribalesHospitales: {
        poco: {
            valorPeligro: 2
        },
        medio: {
            valorPeligro: 7
        },
        frecuentemente: {
            valorPeligro: 10
        }
    }
}

selectPrincipal.addEventListener('change', actualizar);
selectEnfermedades.addEventListener('change', analizarOpcion);
selectSintomas.addEventListener('change', analizarOpcionSintomas);
selectEnfermedades2.addEventListener('change', analizarOpcion);
selectSintomas2.addEventListener('change', analizarOpcionSintomas);

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
        selectEnfermedades2.value = 1;
    }else{
        selectEnfermedades.value = 0;
        selectEnfermedades2.value = 0;
    }
}

function reestablecerValorS(){
    if(comprobarCheckSintomas() == true){
        selectSintomas.value = 1;
        selectEnfermedades2.value = 1;
    }else{
        selectSintomas.value = 0;
        selectEnfermedades2.value = 0;
    }
}

function comprobarCheckEnfermedades(){
    let retorno;
    let hipertension = document.getElementById('hipertension');
    let cancer = document.getElementById('cancer');
    let diabetes = document.getElementById('diabetes');
    let enfermedadesPulmonares = document.getElementById('enfermedadesPulmonares');

    if (
        hipertension.checked == false &&
        cancer.checked == false &&
        diabetes.checked == false &&
        enfermedadesPulmonares.checked == false
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
    let sudoracion = document.getElementById("sudoracion");

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
        cansancio.checked == false &&
        sudoracion.checked == false 
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
    if(enfermedadesBase.length == 0){
        selectEnfermedades.value = 0;
        selectEnfermedades2.value = 0;
    }else{
        selectEnfermedades.value = 1;
        selectEnfermedades2.value = 1;
    }
}

function comprobarArregloSintomas(){
    if(sintomas.length == 0){
        selectSintomas.value = 0;
        selectSintomas2.value = 0;
    }else{
        selectSintomas.value = 1,
        selectSintomas2.value = 1;
    }
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
   if(tipoCovid == 1){
     graficarCovidBarras(tipoCovid, datosCovid);
   }else{
      graficarCovidCircular(tipoCovid, datosCovid);
   }
   
}

function simularNoCovid(){
   //mandar parametros de validacion de formulario
   let tipoNoCovid = selectorN.value;
   mostrarSimularNoCovid();
   if(tipoNoCovid == 1){
      graficarNoCovidBarras(tipoNoCovid, datosNoCovid);
   }else{
      graficarNoCovidCircular(tipoNoCovid, datosNoCovid);
   }
}

function graficarCovidBarras(tipo, datos){
  graficaBarrasCovid(datos);
  mostrarBarrasCovid(); 
}

function graficarCovidCircular(tipo, datos){
   graficaCircularCovid(datos);
   mostrarCircularCovid();
}

function graficarNoCovidBarras(tipo, datos){
   graficaBarrasNoCovid(datos);
   mostrarBarrasNoCovid();
}

function graficarNoCovidCircular(tipo, datos){
   graficaCircularNoCovid(datos);
   mostrarCircularNoCovid();
}

function mostrarBarrasCovid(){
   ocultarCircularCovid();
   document.getElementById('chart-covid').style.display = 'block';
}

function mostrarCircularCovid(){
   ocultarBarrasCovid();
   document.getElementById('chart-covid-circular').style.display = 'block';
}

function ocultarBarrasCovid(){
   document.getElementById('chart-covid').style.display = 'none';
}

function ocultarCircularCovid(){
   document.getElementById('chart-covid-circular').style.display = 'none';
}

function mostrarBarrasNoCovid(){
   ocultarCircularNoCovid();
   document.getElementById('chart-noCovid').style.display = 'block';
}

function mostrarCircularNoCovid(){
   ocultarBarrasNoCovid();
   document.getElementById('chart-noCovid-circular').style.display = 'block';
}

function ocultarBarrasNoCovid(){
   document.getElementById('chart-noCovid').style.display = 'none';
}

function ocultarCircularNoCovid(){
   document.getElementById('chart-noCovid-circular').style.display = 'none';
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
                'rgba(9, 216, 243, 0.3)',
                'rgba(112, 255, 45, 0.3)',
                'rgba(243, 208, 9, 0.3)',
                'rgba(204, 9, 243, 0.3)'
            ],
            borderColor: [
                'rgba(9, 216, 243, 1)',
                'rgba(112, 255, 45, 1)',
                'rgba(243, 208, 9, 1)',
                'rgba(204, 9, 243, 1)'
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
 
   let titulo = 'Covid';

   let ctxCovidCircular = document.getElementById("chart-covid-circular");
   let dataCovidCircular = {
      datasets: [{
         label: titulo,
         data: [datos["valorBase"], datos["probabilidadRecuperarse"],
                datos["probabilidadMorir"], datos["valorEnfermedades"]],
         backgroundColor: [
             'rgba(9, 216, 243, 0.3)',
             'rgba(112, 255, 45, 0.3)',
             'rgba(243, 208, 9, 0.3)',
             'rgba(204, 9, 243, 0.3)'
         ],
         borderColor: [
             'rgba(9, 216, 243, 1)',
             'rgba(112, 255, 45, 1)',
             'rgba(243, 208, 9, 1)',
             'rgba(204, 9, 243, 1)'
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

function graficaBarrasNoCovid(datos){

   let titulo = 'No Covid';

   let ctxBarrasNoCovid = document.getElementById('chart-noCovid').getContext('2d');
   let chartBarrasNoCovid = new Chart(ctxBarrasNoCovid, {
      type: 'bar',
      data: {
         labels: ['Base', 'Positivo', 'Negativo', 'Enfermedades'],
         datasets: [{
            label: titulo,
            data: [datos["valorBase"], datos["probabilidadPositivo"],
                   datos["probabilidadNegativo"], datos["valorEnfermedades"]],
            backgroundColor: [
                'rgba(9, 216, 243, 0.3)',
                'rgba(112, 255, 45, 0.3)',
                'rgba(243, 208, 9, 0.3)',
                'rgba(204, 9, 243, 0.3)'
            ],
            borderColor: [
                'rgba(9, 216, 243, 1)',
                'rgba(112, 255, 45, 1)',
                'rgba(243, 208, 9, 1)',
                'rgba(204, 9, 243, 1)'
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

function graficaCircularNoCovid(datos){

   let titulo = 'No Covid';

   let ctxNoCovidCircular = document.getElementById("chart-noCovid-circular");
   let dataNoCovidCircular = {
      datasets: [{
         label: titulo,
         data: [datos["valorBase"], datos["probabilidadPositivo"],
                datos["probabilidadNegativo"], datos["valorEnfermedades"]],
         backgroundColor: [
             'rgba(9, 216, 243, 0.3)',
             'rgba(112, 255, 45, 0.3)',
             'rgba(243, 208, 9, 0.3)',
             'rgba(204, 9, 243, 0.3)'
         ],
         borderColor: [
             'rgba(9, 216, 243, 1)',
             'rgba(112, 255, 45, 1)',
             'rgba(243, 208, 9, 1)',
             'rgba(204, 9, 243, 1)'
         ],
         borderWidth: 1
      }],
      labels: ['Base', 'Positivo', 'Negativo', 'Enfermedades']
   };

   let myPieChartCovid = new Chart(ctxNoCovidCircular, {
      type: 'pie',
      data: dataNoCovidCircular
   });

}

selectorM.addEventListener('change', actualiza);

function actualiza(e){
    let valorAct = e.target.value;
    console.log(valorAct);
    simularCovid();
}

selectorN.addEventListener('change', actualizaN);

function actualizaN(e){
   let valorActN = e.target.value;
   console.log(valorActN)
   simularNoCovid();
}

