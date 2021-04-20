<?php
header("Content-Type: application/json");
date_default_timezone_set("America/Tegucigalpa");
class Paciente
{
        private $nombre;
        private $identidad;
        private $edad;
        private $sexo;
        private $peso;
        private $estatura;
        private $enfermedadesBase;
        private $sintomas;
        private $ingresoCentroMedico;
        private $tipoSangre;
        private $ejercicio;
        private $diasConSintomas;

        public function __construct(
                $nombre,
                $identidad,
                $edad,
                $sexo,
                $peso,
                $estatura,
                $enfermedadesBase,
                $sintomas,
                $ingresoCentroMedico,
                $tipoSangre,
                $ejercicio,
                $diasConSintomas
        ) {
                $this->nombre = $nombre;
                $this->identidad = $identidad;
                $this->edad = $edad;
                $this->sexo = $sexo;
                $this->peso = $peso;
                $this->estatura = $estatura;
                $this->enfermedadesBase = $enfermedadesBase;
                $this->sintomas = $sintomas;
                $this->ingresoCentroMedico = $ingresoCentroMedico;
                $this->tipoSangre = $tipoSangre;
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


        public function verificarPaciente()
        {
                // $existePaciente = false;

                //     $contenidoArchivoPacientes = $this->getPaciente();
                //     $pacientes = json_decode($contenidoArchivoPacientes, true);

                //         for($cID = 0; $cID < sizeof($pacientes); $cID++){
                //                 if($this->identidad == $pacientes[$cID][$this->identidad]){
                //                         $existePaciente = true;
                //                 break;
                //                 }
                //         }
                // if (self::getUnPaciente($this->identidad)) {
                //         $existePaciente = true;
                // }

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
                                        "edad" => $this->edad,
                                        "sexo" => $this->sexo,
                                        "peso" => $this->peso,
                                        "estatura" => $this->estatura,
                                        "enfermedadesBase" => $this->enfermedadesBase,
                                        "sintomas" => $this->sintomas,
                                        "ingresoCentroMedico" => $this->ingresoCentroMedico,
                                        "tipoSangre" => $this->tipoSangre,
                                        "ejercicio" => $this->ejercicio,
                                        "diasConSintomas" => $this->diasConSintomas,
                                        "probabilidadRecuperarse" => $this->probabilidadRecuperarse,
                                        "fechaIngreso" => date("d") . "-" . date("m") . "-" . date("Y") . "  " . date("H") . ":" . date("i") . ":" . date("s")
                                )
                        ]
                );

                $archivo = fopen('../Datos/pacientes.json', 'w');
                fwrite($archivo, json_encode($pacientes));
                fclose($archivo);
        }

        public static function getPaciente()
        {
                // echo json_encode(file_get_contents('../Datos/pacientes.json'));
                return file_get_contents('../Datos/pacientes.json');
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
}
