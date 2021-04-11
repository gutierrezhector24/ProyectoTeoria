<?php 
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
                $_POST['enfermedadesBase'],
                $_POST['sintomas'],
                $_POST['ingresoCentroMedico'],
                $_POST['diasConSintomas']
            );

            if($paciente->verificarPaciente()){
                $resultado = array(
                    "estado" => true
                );
            }

            echo json_encode($resultado);
            break;
    }
?>