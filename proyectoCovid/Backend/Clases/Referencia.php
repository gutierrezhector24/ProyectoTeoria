<?php
header("Content-Type: application/json");
date_default_timezone_set("America/Tegucigalpa");

    class Referencia{
        public static function getReferencia($ruta){
            $ruta = '../Datos/' . $ruta;
            $referencia = json_decode(file_get_contents($ruta), true);
            echo json_encode(
                array(
                    "referencia" => $referencia
                )
            );
        }
    }

?>