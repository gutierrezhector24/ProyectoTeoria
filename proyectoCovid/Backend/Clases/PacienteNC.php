<?php

header("Content-Type: application/json");
date_default_timezone_set("America/Tegucigalpa");

class Paciente {
    private $nombre;
    private $identidad;
    private $peso;
    private $estatura;
    private $edad;
    private $tipoSangre;
    private $sexo;
    private $enfermedadesBase;
    private $sintomas;
    private $frecuenciaLavadoManos;
    private $ingresoCentroMedico;
    private $cantidadPersonas;
    private $usoMascarilla;
    private $desinfectante;
    private $ejercicio;
    private $diasConSintomas;

    public function __construct(
        $nombre,
        $identidad,
        $peso,
        $estatura,
        $edad,
        $tipoSangre,
        $sexo,
        $enfermedadesBase,
        $sintomas,
        $frecuenciaLavadoManos,
        $ingresoCentroMedico,
        $cantidadPersonas,
        $usoMascarilla,
        $desinfectante,
        $ejercicio,
        $diasConSintomas
    ){
        $this->nombre = $nombre;
        $this->identidad = $identidad;
        $this->peso = $peso;
        $this->estatura = $estatura;
        $this->edad = $edad;
        $this->tipoSangre = $tipoSangre;
        $this->sexo = $sexo;
        $this->enfermedadesBase = $enfermedadesBase;
        $this->sintomas = $sintomas;
        $this->frecuenciaLavadoManos = $frecuenciaLavadoManos;
        $this->ingresoCentroMedico = $ingresoCentroMedico;
        $this->cantidadPersonas = $cantidadPersonas;
        $this->usoMascarilla = $usoMascarilla;
        $this->desinfectante = $desinfectante;
        $this->ejercicio = $ejercicio;
        $this->diasConSintomas = $diasConSintomas;
    }

    /**
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of identidad
     */ 
    public function getIdentidad()
    {
        return $this->identidad;
    }

    /**
     * Set the value of identidad
     *
     * @return  self
     */ 
    public function setIdentidad($identidad)
    {
        $this->identidad = $identidad;

        return $this;
    }

    /**
     * Get the value of peso
     */ 
    public function getPeso()
    {
        return $this->peso;
    }

    /**
     * Set the value of peso
     *
     * @return  self
     */ 
    public function setPeso($peso)
    {
        $this->peso = $peso;

        return $this;
    }

    /**
     * Get the value of estatura
     */ 
    public function getEstatura()
    {
        return $this->estatura;
    }

    /**
     * Set the value of estatura
     *
     * @return  self
     */ 
    public function setEstatura($estatura)
    {
        $this->estatura = $estatura;

        return $this;
    }

    /**
     * Get the value of edad
     */ 
    public function getEdad()
    {
        return $this->edad;
    }

    /**
     * Set the value of edad
     *
     * @return  self
     */ 
    public function setEdad($edad)
    {
        $this->edad = $edad;

        return $this;
    }

    /**
     * Get the value of tipoSangre
     */ 
    public function getTipoSangre()
    {
        return $this->tipoSangre;
    }

    /**
     * Set the value of tipoSangre
     *
     * @return  self
     */ 
    public function setTipoSangre($tipoSangre)
    {
        $this->tipoSangre = $tipoSangre;

        return $this;
    }

    /**
     * Get the value of sexo
     */ 
    public function getSexo()
    {
        return $this->sexo;
    }

    /**
     * Set the value of sexo
     *
     * @return  self
     */ 
    public function setSexo($sexo)
    {
        $this->sexo = $sexo;

        return $this;
    }

    /**
     * Get the value of enfermedadesBase
     */ 
    public function getEnfermedadesBase()
    {
        return $this->enfermedadesBase;
    }

    /**
     * Set the value of enfermedadesBase
     *
     * @return  self
     */ 
    public function setEnfermedadesBase($enfermedadesBase)
    {
        $this->enfermedadesBase = $enfermedadesBase;

        return $this;
    }

    /**
     * Get the value of sintomas
     */ 
    public function getSintomas()
    {
        return $this->sintomas;
    }

    /**
     * Set the value of sintomas
     *
     * @return  self
     */ 
    public function setSintomas($sintomas)
    {
        $this->sintomas = $sintomas;

        return $this;
    }

    /**
     * Get the value of frecuenciaLavadoManos
     */ 
    public function getFrecuenciaLavadoManos()
    {
        return $this->frecuenciaLavadoManos;
    }

    /**
     * Set the value of frecuenciaLavadoManos
     *
     * @return  self
     */ 
    public function setFrecuenciaLavadoManos($frecuenciaLavadoManos)
    {
        $this->frecuenciaLavadoManos = $frecuenciaLavadoManos;

        return $this;
    }

    /**
     * Get the value of ingresoCentroMedico
     */ 
    public function getIngresoCentroMedico()
    {
        return $this->ingresoCentroMedico;
    }

    /**
     * Set the value of ingresoCentroMedico
     *
     * @return  self
     */ 
    public function setIngresoCentroMedico($ingresoCentroMedico)
    {
        $this->ingresoCentroMedico = $ingresoCentroMedico;

        return $this;
    }

    /**
     * Get the value of cantidadPersonas
     */ 
    public function getCantidadPersonas()
    {
        return $this->cantidadPersonas;
    }

    /**
     * Set the value of cantidadPersonas
     *
     * @return  self
     */ 
    public function setCantidadPersonas($cantidadPersonas)
    {
        $this->cantidadPersonas = $cantidadPersonas;

        return $this;
    }

    /**
     * Get the value of usoMascarilla
     */ 
    public function getUsoMascarilla()
    {
        return $this->usoMascarilla;
    }

    /**
     * Set the value of usoMascarilla
     *
     * @return  self
     */ 
    public function setUsoMascarilla($usoMascarilla)
    {
        $this->usoMascarilla = $usoMascarilla;

        return $this;
    }

    /**
     * Get the value of desinfectante
     */ 
    public function getDesinfectante()
    {
        return $this->desinfectante;
    }

    /**
     * Set the value of desinfectante
     *
     * @return  self
     */ 
    public function setDesinfectante($desinfectante)
    {
        $this->desinfectante = $desinfectante;

        return $this;
    }

    /**
     * Get the value of ejercicio
     */ 
    public function getEjercicio()
    {
        return $this->ejercicio;
    }

    /**
     * Set the value of ejercicio
     *
     * @return  self
     */ 
    public function setEjercicio($ejercicio)
    {
        $this->ejercicio = $ejercicio;

        return $this;
    }

    /**
     * Get the value of diasConSintomas
     */ 
    public function getDiasConSintomas()
    {
        return $this->diasConSintomas;
    }

    /**
     * Set the value of diasConSintomas
     *
     * @return  self
     */ 
    public function setDiasConSintomas($diasConSintomas)
    {
        $this->diasConSintomas = $diasConSintomas;

        return $this;
    }

    public function verificarPaciente(){
        if (self::getUnPaciente($this->identidad) == false) {
            $this->guardarPaciente();
            return true;
        } else {
            return false;
        }
    }

    public function guardarPaciente()
        {
                $pacientes = json_decode($this->getPaciente(), true);

                $pacientes[] = array(
                        $this->identidad => [
                                array(
                                        "nombre" => $this->nombre,
                                        "identidad" => $this->identidad,
                                        "peso" => $this->peso,
                                        "estatura" => $this->estatura,
                                        "edad" => $this->edad,
                                        "tipoSangre" => $this->tipoSangre,
                                        "sexo" => $this->sexo,
                                        "enfermedadesBase" => $this->enfermedadesBase,
                                        "sintomas" => $this->sintomas,
                                        "frecuenciaLavadoManos" => $this->frecuenciaLavadoManos,
                                        "ingresoCentroMedico" => $this->ingresoCentroMedico,
                                        "cantidadPersonas" => $this->cantidadPersonas,
                                        "usoMascarilla" => $this->usoMascarilla,
                                        "desinfectante" => $this->desinfectante,
                                        "ejercicio" => $this->ejercicio,
                                        "diasConSintomas" => $this->diasConSintomas,
                                        "fechaIngreso" => date("d") . "-" . date("m") . "-" . date("Y") . "  " . date("H") . ":" . date("i") . ":" . date("s")
                                )
                        ]
                );

                $archivo = fopen('../Datos/pacientesN.json', 'w');
                fwrite($archivo, json_encode($pacientes));
                fclose($archivo);
        }

    public static function getPaciente()
        {
                // echo json_encode(file_get_contents('../Datos/pacientes.json'));
                return file_get_contents('../Datos/pacientesN.json');
        }

    public static function getUnPaciente($identidad)
        {
                $pacientes = json_decode(self::getPaciente(), true);
                // $paciente = null;
                $paciente = false;

                // $paciente = $pacientes[$identidad];

                for ($cPacientes = 0; $cPacientes < sizeof($pacientes); $cPacientes++) {
                        error_reporting(0);
                        if ($pacientes[$cPacientes][$identidad]) {
                                $paciente = $pacientes[$cPacientes][$identidad][sizeof($pacientes[$cPacientes][$identidad]) - 1];
                                break;
                        }
                }

                return $paciente;
        }

    public static function actualizarRegistros($identidad, $registros){
        $pacientes = json_decode(self::getPaciente(), true);
        $paciente = false;

        for ($cPacientes = 0; $cPacientes < sizeof($pacientes); $cPacientes++) {
            error_reporting(0);
            if ($pacientes[$cPacientes][$identidad]) {
                    $pacientes[$cPacientes][$identidad][] = array(
                        "nombre" => $pacientes[$cPacientes][$identidad][0]["nombre"],
                        "identidad" => $pacientes[$cPacientes][$identidad][0]["identidad"],
                        "peso" => $registros["peso"],
                        "estatura" => $registros["estatura"],
                        "edad" => $registros["edad"],
                        "tipoSangre" => $pacientes[$cPacientes][$identidad][0]["tipoSangre"],
                        "sexo" => $pacientes[$cPacientes][$identidad][0]["sexo"],
                        "enfermedadesBase" => $registros["enfermedadesBase"],
                        "sintomas" => $registros["sintomas"],
                        "frecuenciaLavadoManos" => $registros["frecuenciaLavadoManos"],
                        "ingresoCentroMedico" => $registros["ingresoCentroMedico"],
                        "cantidadPersonas" => $registros["cantidadPersonas"],
                        "usoMascarilla" => $registros["usoMascarilla"],
                        "desinfectante" => $registros["desinfectante"],
                        "ejercicio" => $registros["ejercicio"],
                        "diasConSintomas" => $registros["diasConSintomas"],
                        "fechaIngreso" => date("d") . "-" . date("m") . "-" . date("Y") . "  " . date("H") . ":" . date("i") . ":" . date("s")
                    );
                    $paciente = $pacientes[$cPacientes][$identidad];
                    break;
            }
        }

        $archivo = fopen('../Datos/pacientesN.json', 'w');
        fwrite($archivo, json_encode($pacientes));
        fclose($archivo);
        
        if($paciente == false){
            echo json_encode(array(
                "estado" => false
            ));
        }else{
            echo json_encode(array(
                "estado" => true
            ));
        }
        
    }

}
