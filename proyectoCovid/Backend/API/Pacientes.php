<?php 
session_start();
    header("Content-Type: application/json");
    include_once('../Clases/Paciente.php');  
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            
            $resultado = null;
            $paciente = new Paciente(
                $_POST['nombre'],
                $_POST['identidad'],
                $_POST['edad'],
                $_POST['sexo'],
                $_POST['peso'],
                $_POST['estatura'],
                $_POST['enfermedadesBase'],
                $_POST['sintomas'],
                $_POST['ingresoCentroMedico'],
                $_POST['tipoSangre'],
                $_POST['ejercicio'],
                $_POST['diasConSintomas']
            );

            if($paciente->verificarPaciente()){
                $resultado = array(
                    "estado" => true
                );
            }else{
                $resultado = array(
                    "estado" => false
                );
            }

            echo json_encode($resultado);
        break;
        case 'GET':
            // $paciente = Paciente::getPaciente();
            // echo $paciente;
            if(isset($_GET['id'])){
                $paciente = Paciente::getUnPaciente($_GET['id']);
                if($paciente == false){
                    echo json_encode(array(
                        "estado" => false
                    ));
                }else{
                    echo json_encode(array(
                        "estado" => true,
                        "paciente" => $paciente
                    ));
                    $_SESSION["token"] = sha1(uniqid(rand(), true));
                    setcookie("id", $paciente['identidad'], time()+(60*60*24*31), "/");
                    setcookie("token", $_SESSION["token"], time()+(60*60*24*31), "/");
                    setcookie("covid", "1", time()+(60*60*24*31), "/");
                }
            }
        break;
        case 'PUT':
            if(isset($_GET['id'])){
                Paciente::actualizarRegistros($_GET['id'], $_POST);
            }
            break;
    }
?>