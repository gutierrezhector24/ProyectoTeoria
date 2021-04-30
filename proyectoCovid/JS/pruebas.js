var suma = 0;
var valorMaximo;
var referencia = {
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
        ochoacatorcedias: {
            valorPeligro: 7
        },
        quinceaveintiundias: {
            valorPeligro: 10
        }

    },
    ejercicio: {
        poco: {
            valorPeligro: -2
        },
        intermedio: {
            valorPeligro: -4
        },
        mucho: {
            valorPeligro: -6
        }

    },
    visitaATriajesHospitales: {
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
            valorPeligro: 1
        },
        cuatroDiez: {
            valorPeligro: 3
        },
        onceDieciocho: {
            valorPeligro: 5
        },
        diecinueveMas: {
            valorPeligro: 8
        }
    },
    tipoSangre: {
        Amas: {
            valorPeligro: 9
        },
        Amenos: {
            valorPeligro: 8
        },
        Bmas: {
            valorPeligro: 5
        },
        Bmenos: {
            valorPeligro: 5
        },
        ABmas: {
            valorPeligro: 7
        },
        ABmenos: {
            valorPeligro: 6
        },
        Omas: {
            valorPeligro: 3
        },
        Omenos: {
            valorPeligro: 2
        }
    }
};

var paciente = {
    nombre: "Hector",
    identidad: "123456",
    edad: 24,
    sexo: 1,
    peso: 200,
    estatura: 178,
    enfermedadesBase: [
        "hipertension",
        "diabetes"
    ],
    sintomas: [
        "diarrea",
        "decaimiento",
        "fiebre",
        "perdida-gusto-olfato"
    ],
    ingresoCentroMedico: 0,
    tipoSangre: 1,
    ejercicio: 2,
    diasConSintomas: 2,
    fechaIngreso: "24-04-2021  18:09:16"
};

function sumaCovid(){
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
                        valorMaximo = 192;
                        suma+=1;
                    }else{
                        valorMaximo = 194;
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
                }
                // console.log("La clave es " + key+ " y el valor es " + paciente[key]);
            }
            // console.log("La clave es " + key+ " y el valor es " + paciente[key]);
        }
    }

    // Falta sumarle el índice de masa corporal
    console.log(suma);
}

sumaCovid();