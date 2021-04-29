<?php
header("Content-Type: application/json");
date_default_timezone_set("America/Tegucigalpa");

    class Referencia{
        public static function getReferencia($ruta){
            $ruta = '../Datos/' . $ruta;
            return json_decode(file_get_contents($ruta), true);
        }
    }

?>