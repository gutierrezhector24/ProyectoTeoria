<?php 
    header("Content-Type: application/json");
    include_once('../Clases/Referencia.php');
    
    switch($_SERVER['REQUEST_METHOD']){
        case 'GET':
            if(isset($_GET['id'])){
                if($_GET['id'] == 1){
                    echo json_encode(Referencia::getReferencia('referenciasC.json'));
                }else{
                    echo json_encode(Referencia::getReferencia('referenciasNC.json'));
                }
            }
            break;
    }
?>