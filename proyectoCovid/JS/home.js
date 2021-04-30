var rutaCovid = '../Backend/API/Pacientes.php';
var rutaNoCovid = '../Backend/API/PacientesNC.php';
var rutaReferencia = '../Backend/API/Referencias.php';

var selectPrincipal = document.getElementById("p-i");
var selectEnfermedades = document.getElementById("enfermedades-base");
var selectEnfermedades2 = document.getElementById("enfermedades-base-n");
var selectSintomas = document.getElementById("s-sintomas");
var selectSintomas2 = document.getElementById("s-sintomas-n");
var selectHistorial = document.getElementById("tipo-paciente");
var covid;
var tipoPaciente = 2;
var suma = 0;
var valorMaximo;

selectPrincipal.value = 0;
var enfermedadesBase = [];
var sintomas = [];
var enfermedadesBaseNoCovid = [];
var sintomasNoCovid = [];
var valoresReferencia = {};


selectPrincipal.addEventListener('change', actualizar);
selectEnfermedades.addEventListener('change', analizarOpcion);
selectSintomas.addEventListener('change', analizarOpcionSintomas);
selectEnfermedades2.addEventListener('change', analizarOpcion);
selectSintomas2.addEventListener('change', analizarOpcionSintomas);
selectHistorial.addEventListener('change', verificarTipo);

function actualizar(e){

    let valorActualSelect = e.target.value;
    console.log(valorActualSelect);
    if (valorActualSelect == 0){
        mostrarAdvertencia();
    }else if(valorActualSelect == 1){
        covid = 1;
        mostrarCovid();
    }else if(valorActualSelect == 2){
        covid = 0;
        mostrarNoCovid();
    }else if(valorActualSelect == 3){
        covid = 3;
        mostrarModalHistorial();
    }
    else{
        mostrarAlert("Error desconocido, intente nuevamente");
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

function analizarOpcionNoCovid(e){
    let valorSINO = e.target.value;
    if(valorSINO == 1){
        mostrarModalEnfermedadesNoCovid();
    }
}

function analizarOpcionSintomasNoCovid(e){
    let valorActualSintomas = e.target.value;
    if (valorActualSintomas == 1){
        mostrarModalSintomasNoCovid();
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
    
    // console.log(enfermedadesBase);
}

function guardarSintomas(){
    limpiarArregloSintomas();
    $("#sintomas input[type=checkbox]:checked").each(function () {
        if (this.value != undefined)
            sintomas.push(this.value);
    });
    comprobarArregloSintomas();
    // console.log(sintomas);
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
   location.reload();
}

function regresarSecundarioCovid(){
   location.reload();
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
function mostrarCanvasCovid(){
    document.getElementById('secundario-covid').style.display = 'block';
}

function mostrarCanvasNoCovid(){
    document.getElementById('secundario-noCovid').style.display = 'block';
}


var selectorM = document.querySelector('#mm');
var selectorN = document.querySelector('#nn');

var covidBarras;
var covidCircular;

function simularCovid(){
    if(covid == 1){
        validarCovid();
    }else{
        validarCovidNo();
    }
}

function validarCovid(){
    if(
        document.getElementById('nombre').value == '' ||
        document.getElementById('identidad').value == '' ||
        document.getElementById('edad').value == '' ||
        document.getElementById('sexo').value == 0 ||
        document.getElementById('peso').value == '' ||
        document.getElementById('altura').value == '' ||
        document.getElementById('peso').value == '' ||
        document.getElementById('ingreso').value == 2 ||
        document.getElementById('enfermedades-base').value == 2 ||
        document.getElementById('s-sintomas').value == 2 ||
        document.getElementById('tipo-sangre').value == '' ||
        document.getElementById('ejercicio').value == '' ||
        document.getElementById('dias-con-sintomas').value == 0
    ){
        mostrarAlert('Por favor llene todos los campos');
    }else{
        let datosCovid = obtenerDatosCovid();
        ingresarUsuario('POST', datosCovid);
    }
}

function validarCovidNo(){
    if(
        document.getElementById('nombre-n').value == '' ||
        document.getElementById('identidad-n').value == '' ||
        document.getElementById('peso-n').value == '' ||
        document.getElementById('estatura-n').value == '' ||
        document.getElementById('edad-n').value == '' ||
        document.getElementById('tipo-sangre-n').value == '' ||
        document.getElementById('sexo-n').value == '' ||
        document.getElementById('enfermedades-base-n').value == '' ||
        document.getElementById('s-sintomas').value == '' ||
        document.getElementById('lavado-manos').value == '' ||
        document.getElementById('ingreso-n').value == '' ||
        document.getElementById('cantidad-personas').value == '' ||
        document.getElementById('uso-mascarilla').value == '' ||
        document.getElementById('tipo-desinfectante').value == '' ||
        document.getElementById('ejercicio-n').value == '' ||
        document.getElementById('dias-con-sintomas-n').value == '' 
    ){
        mostrarAlert('Por favor llene todos los campos');
    }else{
        let datosNoCovid = obtenerDatosNoCovid();
        ingresarUsuarioNoCovid('POST', datosNoCovid);
    }
}

function mostrarAlert(texto){
    alert(texto);
    return false;
}

function ingresarUsuario(metodo, datosCovid){
    datosCovid = datosCovid || obtenerDatosCovid();
    let url;
    metodo == "POST" ? url = rutaCovid: url = rutaCovid + `?id=${datosCovid.identidad}`;
    console.log(url);
    console.log(datosCovid);
    console.log(metodo);
    axios({
        method: metodo,
        url: url,
        responseType: 'json',
        data: datosCovid
    }).then(res => {
        if(res.data.estado == true){
            metodo == 'POST' ? mostrarAlert("Usuario registrado"): mostrarAlert("Usuario actualizado");
            calcularSumaCovid(datosCovid, '');
            reiniciarFormulario();
        }else{
            mostrarModalMultiUso("Paciente COVID ya existe", "¿Desea actualizar sus registros?");
        }
    }).catch(err => {
        mostrarAlert(`Hubo un error con el servidor, intente más tarde (${err})`);
    });
}

function ingresarUsuarioNoCovid(metodo, datosNoCovid){
    datosNoCovid = datosNoCovid || obtenerDatosNoCovid();
    let url;
    metodo == "POST" ? url = obtenerRuta(): url = obtenerRuta() + `=${datosNoCovid.identidad}`;
    axios({
        method: metodo,
        url: url,
        responseType: 'json',
        data: datosNoCovid
    }).then(res => {
        if(res.data.estado == true){
            metodo == 'POST' ? mostrarAlert("Usuario registrado"): mostrarAlert("Usuario actualizado");
            calcularSumaNoCovid(datosNoCovid, '');
            // obtenerReferenciaNoCovid(datosNoCovid);
            reiniciarFormulario();
        }else{
            mostrarModalMultiUso("Paciente NO COVID ya existe", "¿Desea actualizar sus registros?");
        }
    }).catch(err => {
        mostrarAlert(`Hubo un error con el servidor, intente más tarde (${err})`);
    });
}


function calcularSumaCovid(paciente, referencia){
    let peso;
    let estatura;
    let imc;
    for(var key in paciente){
        if(paciente.hasOwnProperty(key)){
            if(typeof paciente[key] == 'object'){
                if(key == "sintomas"){
                    for(let i = 0; i < paciente[key].length; i++){
                        // console.log(paciente[key][i]); // Imprime cada síntoma
                        if(paciente[key][i] == "congestion-nasal"){
                            suma+=2;
                        }else if(paciente[key][i] == "malestar-garganta"){
                            suma+=5;
                        }else if(paciente[key][i] == "dolor-corporal"){
                            suma+=5;
                        }else if(paciente[key][i] == "dolor-ojos"){
                            suma+=3;
                        }else if(paciente[key][i] == "dolor-cabeza"){
                            suma+=4;
                        }else if(paciente[key][i] == "vomito"){
                            suma+=7;
                        }else if(paciente[key][i] == "diarrea"){
                            suma+=7;
                        }else if(paciente[key][i] == "decaimiento"){
                            suma+=2;
                        }else if(paciente[key][i] == "fiebre"){
                            suma+=9;
                        }else if(paciente[key][i] == "perdida-gusto-olfato"){
                            suma+=10;
                        }else if(paciente[key][i] == "opresion-pecho"){
                            suma+=7;
                        }else if(paciente[key][i] == "cansancio"){
                            suma+=5;
                        }else{
                            suma+=2;
                        }
                    }
                }
                if(key == "enfermedadesBase"){
                    for(let i = 0; i < paciente[key].length; i++){
                        // console.log(paciente[key][i]); // Imprime cada enfermedad base
                        if(paciente[key][i] == "hipertension"){
                            suma+=9;
                        }else if(paciente[key][i] == "diabetes"){
                            suma+=9;
                        }else if(paciente[key][i] == "cancer"){
                            suma+=9;
                        }else{
                            suma+=8;
                        }
                    }
                }
            }else{
                if(key == "edad"){
                    if(paciente[key] > 0 && paciente[key] < 21){
                        suma+=2;
                    }else if(paciente[key] > 20 && paciente[key] < 41){
                        suma+=9;
                    }else if(paciente[key] > 40 && paciente[key] < 61){
                        suma+=6;
                    }else{
                        suma+=7;
                    }
                }else if(key == "sexo"){
                    if(paciente[key] == 1){
                        valorMaximo = 143;
                        suma+=1;
                    }else{
                        valorMaximo = 145;
                        suma+=3;
                    }
                }else if(key == "ingresoCentroMedico"){
                    if(paciente[key] == 1){
                        suma+=6;
                    }else{
                        suma+=2;
                    }
                }else if(key == "tipoSangre"){
                    if(paciente[key] == 1){
                        suma+=9;
                    }else if(paciente[key] == 2){
                        suma+=8;
                    }else if(paciente[key] == 3){
                        suma+=5;
                    }else if(paciente[key] == 4){
                        suma+=5;
                    }else if(paciente[key] == 5){
                        suma+=7;
                    }else if(paciente[key] == 6){
                        suma+=6;
                    }else if(paciente[key] == 7){
                        suma+=3;
                    }else{
                        suma+=2;
                    }
                }else if(key == "diasConSintomas"){
                    if(paciente[key] >= 1 && paciente[key] <= 3){
                        suma+=2;
                    }else if(paciente[key] >= 4 && paciente[key] <= 10){
                        suma+=4;
                    }else if(paciente[key] >= 11 && paciente[key] <= 18){
                        suma+=6;
                    }else{
                        suma+=8;
                    }
                }else if(key == "ejercicio"){
                    if(paciente[key] == 1){
                        suma-=1;
                    }else if(paciente[key] == 2){
                        suma-=3;
                    }else{
                        suma-=6;
                    }
                }else if(key == "peso"){
                    peso = paciente[key];
                }else if(key == "estatura"){
                    estatura = paciente[key];
                }
            }
        }
    }
    imc = calcularIMC(peso, estatura).toFixed(2);
    console.log(suma);
    if(imc >= 18.50 && imc <= 24.90){
        suma+=4;
    }else if(imc >= 24.91 && imc <= 29.60){
        suma+=6;
    }else if(imc >= 29.61 && imc <= 34.90){
        suma+=7;
    }else if(imc >= 34.91 && imc <= 39.90){
        suma+=9;
    }else{
        suma+=10;
    }
    // Falta sumarle el índice de masa corporal
    console.log(suma);
    graficarCovidCircular(getProbabilidad(suma, valorMaximo));
}

function calcularSumaNoCovid(paciente, referencia){
    let peso;
    let estatura;
    let imc;
    for(var key in paciente){
        if(paciente.hasOwnProperty(key)){
            if(typeof paciente[key] == 'object'){
                if(key == "sintomas"){
                    for(let i = 0; i < paciente[key].length; i++){
                        // console.log(paciente[key][i]); // Imprime cada síntoma
                        if(paciente[key][i] == "congestion-nasal"){
                            suma+=1;
                        }else if(paciente[key][i] == "malestar-garganta"){
                            suma+=4;
                        }else if(paciente[key][i] == "dolor-corporal"){
                            suma+=4;
                        }else if(paciente[key][i] == "dolor-ojos"){
                            suma+=2;
                        }else if(paciente[key][i] == "dolor-cabeza"){
                            suma+=3;
                        }else if(paciente[key][i] == "vomito"){
                            suma+=6;
                        }else if(paciente[key][i] == "diarrea"){
                            suma+=6;
                        }else if(paciente[key][i] == "decaimiento"){
                            suma+=1;
                        }else if(paciente[key][i] == "fiebre"){
                            suma+=8;
                        }else if(paciente[key][i] == "perdida-gusto-olfato"){
                            suma+=9;
                        }else if(paciente[key][i] == "opresion-pecho"){
                            suma+=6;
                        }else if(paciente[key][i] == "cansancio"){
                            suma+=4;
                        }else{
                            suma+=1;
                        }
                    }
                }
                if(key == "enfermedadesBase"){
                    for(let i = 0; i < paciente[key].length; i++){
                        // console.log(paciente[key][i]); // Imprime cada enfermedad base
                        if(paciente[key][i] == "hipertension"){
                            suma+=8;
                        }else if(paciente[key][i] == "diabetes"){
                            suma+=8;
                        }else if(paciente[key][i] == "cancer"){
                            suma+=8;
                        }else{
                            suma+=7;
                        }
                    }
                }
            }else{
                if(key == "edad"){
                    if(paciente[key] > 0 && paciente[key] < 21){
                        suma+=1;
                    }else if(paciente[key] > 20 && paciente[key] < 41){
                        suma+=8;
                    }else if(paciente[key] > 40 && paciente[key] < 61){
                        suma+=5;
                    }else{
                        suma+=6;
                    }
                }else if(key == "sexo"){
                    if(paciente[key] == 1){
                        valorMaximo = 145;
                        suma+=1;
                    }else{
                        valorMaximo = 146;
                        suma+=2;
                    }
                }else if(key == "ingresoCentroMedico"){
                    if(paciente[key] == 1){
                        suma+=5;
                    }else{
                        suma+=1;
                    }
                }else if(key == "tipoSangre"){
                    if(paciente[key] == 1){
                        suma+=8;
                    }else if(paciente[key] == 2){
                        suma+=7;
                    }else if(paciente[key] == 3){
                        suma+=4;
                    }else if(paciente[key] == 4){
                        suma+=4;
                    }else if(paciente[key] == 5){
                        suma+=6;
                    }else if(paciente[key] == 6){
                        suma+=5;
                    }else if(paciente[key] == 7){
                        suma+=2;
                    }else{
                        suma+=1;
                    }
                }else if(key == "diasConSintomas"){
                    if(paciente[key] >= 1 && paciente[key] <= 3){
                        suma+=1;
                    }else if(paciente[key] >= 4 && paciente[key] <= 10){
                        suma+=3;
                    }else if(paciente[key] >= 11 && paciente[key] <= 18){
                        suma+=5;
                    }else{
                        suma+=7;
                    }
                }else if(key == "ejercicio"){
                    if(paciente[key] == 1){
                        suma-=1;
                    }else if(paciente[key] == 2){
                        suma-=2;
                    }else{
                        suma-=5;
                    }
                }else if(key == "peso"){
                    peso = paciente[key];
                }else if(key == "estatura"){
                    estatura = paciente[key];
                }else if(key == "frecuenciaLavadoManos"){
                    if(paciente[key] == 1){
                        suma+=9;
                    }else if(paciente[key] == 2){
                        suma+=7;
                    }else{
                        suma+=2;
                    }
                }else if(key == "cantidadPersonas"){
                    if(paciente[key] == 1){
                        suma+=2;
                    }else if(paciente[key] == 2){
                        suma+=5;
                    }else{
                        suma+=9;
                    }
                }else if(key == "usoMascarilla"){
                    if(paciente[key] == 1){
                        suma+=9;
                    }else if(paciente[key] == 2){
                        suma+=7;
                    }else{
                        suma+=1;
                    }
                }else if(key == "desinfectante"){
                    if(paciente[key] == 1){
                        suma-=4;
                    }else if(paciente[key] == 2){
                        suma-=3;
                    }else if(paciente[key] == 3){
                        suma-=6;
                    }else{
                        suma-=2;
                    }
                }
            }
        }
    }
    imc = calcularIMC(peso, estatura).toFixed(2);
    console.log(suma);
    if(imc >= 18.50 && imc <= 24.90){
        suma+=4;
    }else if(imc >= 24.91 && imc <= 29.60){
        suma+=5;
    }else if(imc >= 29.61 && imc <= 34.90){
        suma+=6;
    }else if(imc >= 34.91 && imc <= 39.90){
        suma+=8;
    }else{
        suma+=9;
    }
    // Falta sumarle el índice de masa corporal
    console.log(suma);
    graficarNoCovidCircular(getProbabilidad(suma, valorMaximo));
}

function getProbabilidad(sum, max){
    return Math.round(((100*sum)/max));
}

function mostrarModalMultiUso(titulo, cuerpo){
    
    document.getElementById('titulo-multi-uso').innerHTML = titulo;
    document.getElementById('cuerpo-modal').innerHTML = cuerpo;
    if(covid == 1){
        document.getElementById("botones-modal-multi-uso").innerHTML += `
            <button type="button" class="btn btn-secondary" onclick="cerrarModalMultiUso()" data-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary" onclick="ingresarUsuario('PUT'); cerrarModalMultiUso()">Sí</button>
        `;
    }else{
        document.getElementById("botones-modal-multi-uso").innerHTML += `
            <button type="button" class="btn btn-secondary" onclick="cerrarModalMultiUso()" data-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary" onclick="ingresarUsuarioNoCovid('PUT'); cerrarModalMultiUso()">Sí</button>
        `;
    }
    $('#modal-multi-uso').modal('show');
}

function mostrarModalHistorial(){
    $('#modal-historial').modal('show');
}

function cerrarModalHistorial(){
    selectPrincipal.value = 0;
    selectHistorial.value = 2;
    limpiarModalHistorial();
    $('#modal-historial').modal('hide');
}

function limpiarModalHistorial(){
    document.getElementById("id-get").value = '';
}

function cerrarModalMultiUso(){
    limpiarModalMultiUso();
    $('#modal-multi-uso').modal('hide');
}

function limpiarModalMultiUso(){
    document.getElementById("cualquier-cosa").innerHTML = '';
    document.getElementById("botones-modal-multi-uso").innerHTML = '';
}

function verificarTipo(e){
    let valor = e.target.value;
    console.log(valor);
    if(valor == 1){
        tipoPaciente = 1;
    }else if(valor == 0){
        tipoPaciente = 0;
    }else{
        tipoPaciente = 2;
    }
}


function reiniciarFormulario(){
    if(covid == 1){
        document.getElementById('covid').reset();
    }else{
        document.getElementById('no-covid').reset();
    }
}

function obtenerDatosCovid(){
    return {
        nombre: document.getElementById('nombre').value,
        identidad: document.getElementById('identidad').value,
        edad: document.getElementById('edad').value,
        sexo: document.getElementById('sexo').value,
        peso: document.getElementById('peso').value,
        estatura: document.getElementById('altura').value,
        enfermedadesBase: enfermedadesBase,
        sintomas: sintomas,
        ingresoCentroMedico: document.getElementById('ingreso').value,
        tipoSangre: document.getElementById('tipo-sangre').value,
        ejercicio: document.getElementById('ejercicio').value,
        diasConSintomas: document.getElementById('dias-con-sintomas').value
    }
}

function obtenerDatosNoCovid(){
    return {
        nombre: document.getElementById('nombre-n').value,
        identidad: document.getElementById('identidad-n').value,
        peso: document.getElementById('peso-n').value,
        estatura: document.getElementById('estatura-n').value,
        edad: document.getElementById('edad-n').value,
        tipoSangre: document.getElementById('tipo-sangre-n').value,
        sexo: document.getElementById('sexo-n').value,
        enfermedadesBase: enfermedadesBase,
        sintomas: sintomas,
        frecuenciaLavadoManos: document.getElementById('lavado-manos').value,
        ingresoCentroMedico: document.getElementById('ingreso-n').value,
        cantidadPersonas: document.getElementById('cantidad-personas').value,
        usoMascarilla: document.getElementById('uso-mascarilla').value,
        desinfectante: document.getElementById('tipo-desinfectante').value,
        ejercicio: document.getElementById('ejercicio-n').value,
        diasConSintomas: document.getElementById('dias-con-sintomas-n').value
    }
}

function obtenerPaciente(identificador){
    let ruta = obtenerRuta();
    let id = leerCookie(identificador) || document.getElementById("id-get").value;
    axios({
        method: 'GET',
        url: ruta + `=${id}`,
        responseType: 'json'
    }).then(res => {
        console.log(res.data);
        if(res.data.estado == true){
            location.href = 'history.php';
        }else{
            mostrarAlert("Usuario inexistente");
        }
    }).catch(err => {
        mostrarAlert(`Error (${err})`);
    }); 
}

function leerCookie(identificador) {
    let name = identificador + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return unescape(c.substring(name.length, c.length));
    }
    return "";
}

function obtenerRuta(){
    if(tipoPaciente == 1){
        return rutaCovid + '?id';
    }else{
        return rutaNoCovid + '?id';
    }
}

function verificarPacienteTipo(){
    if(document.getElementById('id-get').value == ''){
        mostrarAlert("Por favor llene los campos");
    }else{
        if(tipoPaciente > 1){
            mostrarAlert("Seleccione el tipo de paciente");
        }
        else{
            obtenerPaciente();
        }
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

function graficarCovidCircular(datos){
    ocultarCovid();
    document.getElementById('secundario-covid').style.display = 'block';
    mostrarCircularCovid();
    graficaCircularCovid(datos);
}

function graficarNoCovidBarras(tipo, datos){
   graficaBarrasNoCovid(datos);
   mostrarBarrasNoCovid();
}

function graficarNoCovidCircular(datos){
    ocultarNoCovid();
    document.getElementById('secundario-noCovid').style.display = 'block';
    mostrarCircularNoCovid();
    graficaCircularNoCovid(datos);
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
 
   let titulo = 'PROBABILIDAD DE AGRAVARSE';

   let ctxCovidCircular = document.getElementById("chart-covid-circular");
   let dataCovidCircular = {
      datasets: [{
         label: titulo,
         data: [datos, 100 - datos],
         backgroundColor: [
             'rgba(9, 216, 243, 0.3)',
             'rgba(112, 255, 45, 0.3)'
         ],
         borderColor: [
             'rgba(9, 216, 243, 1)',
             'rgba(112, 255, 45, 1)'
         ],
         borderWidth: 1
      }],
      labels: [`Agravarse (${datos}%)`, `Recuperarse (${100 - datos}%)`]
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

   let titulo = 'PROBABILIDAD DE CONTAGIARSE';

   let ctxNoCovidCircular = document.getElementById("chart-noCovid-circular");
   let dataNoCovidCircular = {
      datasets: [{
         label: titulo,
         data: [datos, 100 - datos],
         backgroundColor: [
             'rgba(9, 216, 243, 0.3)',
             'rgba(112, 255, 45, 0.3)'
         ],
         borderColor: [
             'rgba(9, 216, 243, 1)',
             'rgba(112, 255, 45, 1)'
         ],
         borderWidth: 1
      }],
      labels: [`Contagiarse (${datos}%)`, `No contagiarse (${100 - datos}%)`]
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

function simular(){
    console.log(covid);
    if(covid == 1){
        validarCovid();
    }else if(covid == 0){
        validarCovidNo();
    }else{
        mostrarAlert("Error desconocido");
    }
}

function aKilogramos(peso){
    return peso/2.2;
}

function aMetros(altura){
    return altura/100;
}

function calcularIMC(peso, altura){
    return aKilogramos(peso)/Math.pow(aMetros(altura), 2);
}

