<?php
header("Content-Type: application/json");
    class Paciente{
        private $nombre;
        private $identidad;
        private $edad;
        private $sexo;
        private $peso;
        private $enfermedadesBase;
        private $sintomas;
        private $ingresoCentroMedico;
        private $diasConSintomas;
        private $probabilidadRecuperarse;

        public function __construct(
            $nombre,
            $identidad,
            $edad,
            $sexo,
            $peso,
            $enfermedadesBase,
            $sintomas,
            $ingresoCentroMedico,
            $diasConSintomas,
            $probabilidadRecuperarse
        )
        {
            $this->nombre = $nombre;
            $this->identidad = $identidad;
            $this->edad = $edad;
            $this->sexo = $sexo;
            $this->peso = $peso;
            $this->enfermedadesBase = $enfermedadesBase;
            $this->sintomas = $sintomas;
            $this->ingresoCentroMedico = $ingresoCentroMedico;
            $this->diasConSintomas = $diasConSintomas;
            $this->probabilidadRecupe = $probabilidadRecuperarse;
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


        /**
         * Get the value of probabilidadRecuperarse
         */ 
        public function getProbabilidadRecuperarse()
        {
                return $this->probabilidadRecuperarse;
        }

        /**
         * Set the value of probabilidadRecuperarse
         *
         * @return  self
         */ 
        public function setProbabilidadRecuperarse($probabilidadRecuperarse)
        {
                $this->probabilidadRecuperarse = $probabilidadRecuperarse;

                return $this;
        }

        public function verificarPaciente(){
            $existePaciente = false;

            $contenidoArchivoPacientes = $this->getPaciente();
            $pacientes = json_decode($contenidoArchivoPacientes, true);
            
                for($cID = 0; $cID < sizeof($pacientes); $cID++){
                        if($this->identidad == $pacientes[$cID]['identidad']){
                                $existePaciente = true;
                        break;
                        }
                }
             

            if($existePaciente == false){
                $this->guardarPaciente();
                return true;
            }else{
                return false;
            }
        }

        public function guardarPaciente(){
                $pacientes = json_decode($this->getPaciente(), true);

            $pacientes[] = array(
                "nombre" => $this->nombre,
                "identidad" => $this->identidad,
                "edad" => $this->edad,
                "sexo" => $this->sexo,
                "peso" => $this->peso,
                "enfermedadesBase" => $this->enfermedadesBase,
                "sintomas" => $this->sintomas,
                "ingresoCentroMedico" => $this->ingresoCentroMedico,
                "diasConSintomas" => $this->diasConSintomas
            );

            $archivo = fopen('../Datos/pacientes.json', 'w');
            fwrite($archivo, json_encode($pacientes));
            fclose($archivo);

        }

        public static function getPaciente(){
            return file_get_contents('../Datos/pacientes.json');
        }

        public static function getUnPaciente($identidad){
                $pacientes = json_decode(self::getPaciente(), true);
                $paciente = null;

                for($cPacientes = 0; $cPacientes < sizeof($pacientes); $cPacientes++){
                        if($identidad == $pacientes[$cPacientes]['identidad']){
                            $paciente = $pacientes[$cPacientes];
                        break;
                        }
                }

                if($paciente == null){
                        return false;
                        // echo json_encode(array(
                        //         "paciente" => $paciente
                        // ));  
                }else{
                        return $paciente;
                        // echo json_encode(array(
                        //         "paciente" => true
                        // ));
                }

        }

    }
