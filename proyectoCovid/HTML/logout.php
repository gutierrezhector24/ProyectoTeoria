<?php 
    session_start();
    session_destroy();

    setcookie("id", "",time()-1, "/");
    setcookie("token", "",time()-1, "/");
    setcookie("covid", "",time()-1, "/");

    header("Location: home.html");

 ?>