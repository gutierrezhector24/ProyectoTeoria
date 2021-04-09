<?php 
    header("Content-Type: application/json");
    include_once('../clases/usuario.php');  
    $_POST = json_decode(file_get_contents('php://input'), true);
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            break;
    }
?>