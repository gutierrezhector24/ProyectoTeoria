<?php
session_start();
if (!isset($_SESSION["token"]))
  header("Location: 401.html");

if (!isset($_COOKIE["token"]))
  header("Location: 401.html");

if ($_SESSION["token"] != $_COOKIE["token"])
  header("Location: 401.html")
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>History Template</title>
  <link rel="shortcut icon" href="img/icons8-microbe-48.png">
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine" />
  <link rel="stylesheet" href="../CSS/history.css" />
</head>

<body class="contP col-sm-12 pt-5 pl-4 pb-5">
  <div class="card">
    <div class="card-header">
      <span class="title">Historial de Usuario</span>
      <div class="btn-group float-right" role="group">
        <button onclick="cerrarSesion()" type="button" class="bt btn btn-warning mt-2 mb-2">
          Regresar
        </button>
        <button type="button" class="bt btn btn-info mt-2 mb-2">
          Detalles
        </button>
      </div>
    </div>

    <div class="card-body row ml-0">
      <div class="col-sm-5 card border-info">
        <div class="circle">
          <div class="image"></div>
          <span class="name">Ángel Zelaya</span>
        </div>
      </div>

      <div class="col-sm-7">
        <div class="card border-info">
          <div id="datos-generales" class="card-body">

          </div>
        </div>
        <div class="card border-info">
          <div id="enfermedades-base" class="card-body">
            <span class="title2">ENFERMEDADES BASE</span>
            <table class="table table-striped mt-4">
              <tbody id="e-b">

              </tbody>
            </table>
          </div>
        </div>
        <div class="card border-info">
          <div class="card-body">
            <span class="title2">SÍNTOMAS</span>
            <table class="table table-striped mt-4">
              <thead class="thead-dark">
                <tr>
                </tr>
              </thead>
              <tbody id="sintomas">

              </tbody>
            </table>
          </div>
        </div>
        <div class="card border-info">
          <div id="otros-datos" class="card-body">
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
  <script src="../JS/history.js"></script>
</body>

</html>