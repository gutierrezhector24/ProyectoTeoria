var rutaCovid = '../Backend/API/Pacientes.php';
var rutaNoCovid = '../Backend/API/PacientesNC.php';

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


function mostrarAlert(texto) {
    alert(texto);
    return false;
}

function obtenerPaciente() {
    let ruta = obtenerRuta();
    let id = leerCookie("id");
    axios({
        method: 'GET',
        url: ruta + `=${id}`,
        responseType: 'json'
    }).then(res => {
        console.log(res.data);
        if (res.data.estado == true) {
            console.log(res.data.paciente);
            llenarTablas(res.data.paciente);
        } else {
            mostrarAlert("Usuario inexistente");
        }
    }).catch(err => {
        mostrarAlert(`Error (${err})`);
    });
}

function obtenerRuta() {
    if (leerCookie("covid") == 1) {
        return rutaCovid + '?id';
    } else {
        return rutaNoCovid + '?id';
    }
}

function cerrarSesion() {
    location.href = 'logout.php';
}

obtenerPaciente();

function llenarTablas(paciente) {
    llenarTablaDatosGenerales(paciente);
    llenarTablaEnfermedades(paciente);
    llenarTablaSintomas(paciente);
    llenarTablaOtrosDatos(paciente);
}


function llenarTablaDatosGenerales(paciente) {
    document.getElementById("datos-generales").innerHTML += `
    <span class="title2">DATOS GENERALES</span>
    <table class="table table-striped mt-4">
      <thead class="thead-dark">
        <tr>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nombre</td>
          <td>${paciente.nombre}</td>
          <td>
            <i
              class="far fa-trash-alt fa-lg text-danger mr-4 float-right fa-2x"
            ></i>
          </td>
        </tr>
        <tr>
          <td>Identidad</td>
          <td>${paciente.identidad}</td>
          <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
          </td>
        </tr>
        <tr>
          <td>Tipo sangre</td>
          <td>${tipoSangre(paciente.tipoSangre)}</td>
          <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
          </td>
        </tr>
        <tr>
          <td>Sexo</td>
          <td>${sexo(paciente.sexo)}</td>       
          <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
          </td>
        </tr>
        <tr>
          <td>Peso</td>
          <td>${paciente.peso} lb</td>         
          <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
          </td>
        </tr>
        <tr>
          <td>Estatura</td>
          <td>${paciente.estatura} cm</td>         
          <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
          </td>
        </tr>
        <tr>
          <td>Índice de Masa Corporal</td>
          <td>${calcularIMC(paciente.peso, paciente.estatura).toFixed(2)}</td>         
          <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
          </td>
        </tr>
      </tbody>
    </table>
    `;
}

function llenarTablaEnfermedades(paciente) {

    if(paciente.enfermedadesBase.length == 0){
        document.getElementById('e-b').innerHTML += `
        <tr>
            <td>Enfermedad>Enfermedades</td>
            <td>Sin enfermedades base</td>      
            <td>
                <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        `;
    }else{
        for(let i = 0; i < paciente.enfermedadesBase.length; i++){
            document.getElementById('e-b').innerHTML += `
            <tr>
                <td>Enfermedad ${i + 1}</td>
                <td>${validarEnfermedades(paciente.enfermedadesBase[i])}</td>      
                <td>
                    <i class="delet far fa-trash-alt fa-lg text-danger"></i>
                </td>
            </tr>
            `;
        }
    }

}

function llenarTablaSintomas(paciente) {
    if(paciente.sintomas.length == 0){
        document.getElementById('sintomas').innerHTML += `
        <tr>
            <td>Síntomas</td>
            <td>Sin síntomas</td>
            <td>
                <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        `;
    }else{
        for(let i = 0; i < paciente.sintomas.length; i++){
            document.getElementById('sintomas').innerHTML += `
            <tr>
                <td>Síntoma ${i + 1}</td>
                <td>${validarSintoma(paciente.sintomas[i])}</td>
                <td>
                    <i class="delet far fa-trash-alt fa-lg text-danger"></i>
                </td>
            </tr>
            `;
        }
    }
}

function llenarTablaOtrosDatos(paciente){
    document.getElementById('otros-datos').innerHTML += `
    <span class="title2">OTROS DATOS</span>
    <table class="table table-striped mt-4">
        <thead class="thead-dark">
        <tr>
        </tr>
        </thead>
        <tbody id="body-otros-datos">
        <tr>
            <td>Ingreso en centro médico</td>
            <td>${ingreso(paciente.ingresoCentroMedico)}</td>
            <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        <tr>
            <td>Ejercicio</td>
            <td>${ejercicio(paciente.ejercicio)}</td>
            <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        <tr>
            <td>Días con síntomas</td>
            <td>${paciente.diasConSintomas}</td>
            <td>
            <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        </tbody>
    </table>
    `;
    if(leerCookie("covid") != 1){
        document.getElementById('body-otros-datos').innerHTML += `
        <tr>
            <td>Frecuencia del lavado de manos</td>
            <td>${lavadoManos(paciente.frecuenciaLavadoManos)}</td>
            <td>
                <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        <tr>
            <td>Personas en lugares que visita</td>
            <td>${personas(paciente.cantidadPersonas)}</td>
            <td>
                <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        <tr>
            <td>Uso de mascarilla</td>
            <td>${mascarilla(paciente.usoMascarilla)}</td>
            <td>
                <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        <tr>
            <td>Desinfectante que utiliza</td>
            <td>${desinfectante(paciente.desinfectante)}</td>
            <td>
                <i class="delet far fa-trash-alt fa-lg text-danger"></i>
            </td>
        </tr>
        `;
    }
    document.getElementById("body-otros-datos").innerHTML += `
    <tr>
        <td>Última actualización</td>
        <td>${fecha(paciente.fechaIngreso)}</td>
        <td>
        <i class="delet far fa-trash-alt fa-lg text-danger"></i>
        </td>
    </tr>
    `;
}

function aKilogramos(peso) {
    return peso / 2.2;
}

function aMetros(altura) {
    return altura / 100;
}

function calcularIMC(peso, altura) {
    return aKilogramos(peso) / Math.pow(aMetros(altura), 2);
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function validarEnfermedades(enfermedad){
    if(enfermedad == "hipertension"){
        return "Hipertensión";
    }else if(enfermedad == "cancer"){
        return "Cáncer";
    }else if(enfermedad == "enfermedades-pulmonares"){
        return "Enfermedades pulmonares";
    }else{
        return "Diabetes";
    }
}

function validarSintoma(sintoma){
    if(sintoma == "tos"){
        return "Tos";
    }else if(sintoma == "congestion-nasal"){
        return "Congestión nasal";
    }else if(sintoma == "malestar-garganta"){
        return "Malestar Garganta";
    }else if(sintoma == "dolor-corporal"){
        return "Dolor corporal";
    }else if(sintoma == "dolor-ojos"){
        return "Dolor de ojos";
    }else if(sintoma == "dolor-cabeza"){
        return "Dolor de cabeza";
    }else if(sintoma == "vomito"){
        return "Vómito";
    }else if(sintoma == "diarrea"){
        return "Diarrea";
    }else if(sintoma == "decaimiento"){
        return "Decaimiento";
    }else if(sintoma == "fiebre"){
        return "Fiebre";
    }else if(sintoma == "perdida-gusto-olfato"){
        return "Pérdida de gusto y/u olfato";
    }else if(sintoma == "opresion-pecho"){
        return "Opresión en el pecho";
    }else if(sintoma == "cansancio"){
        return "Cansancio";
    }else if(sintoma == "sudoracion"){
        return "Sudoración";
    }else{
        return capitalize(sintoma);
    } 
}

function ingreso(boolean){
    if(boolean == true || boolean == 1)
        return "Sí"
    else
        return "No"
}

function fecha(fecha){
    return fecha.split(" ")[0] + " a las " + fecha.split(" ")[fecha.split(" ").length - 1];
}

function ejercicio(ejercicio){
    if(ejercicio == 1)
        return "Poco";
    if(ejercicio == 2)
        return "Intermedio";
    if(ejercicio == 3)
        return "Mucho";
}

function tipoSangre(sangre){
    let arr = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    return arr[sangre - 1];
}

function sexo(sexo){
    if(sexo == 1){
        return "Femenino";
    }else{
        return "Masculino";
    }
}
 
function lavadoManos(i){
    let lavado = ["Nunca", "Poco", "Frecuentemente"];
    return lavado[i - 1];
}

function personas(i){
    let personas = ["Menos de 50", "Entre 51 y 150", "Más de 151"];
    return personas[i - 1];
}

function mascarilla(i){
    let mascarilla = ["Nunca", "Poco", "Frecuentemente"];
    return mascarilla[i - 1];
}

function desinfectante(i){
    let desinfectante = ["Cloro", "Amonio", "Alcohol al 70%", "Alcohol al 96%"];
    return desinfectante[i - 1];
}
