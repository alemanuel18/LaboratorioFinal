<?php
session_start();

include ("conexion.php");
if (!empty($_POST['ingresar'])) {
    if (empty($_POST['email']) or empty($_POST['pass'])) {
        $_SESSION['alert_message'] = "Campos vacíos, por favor completar";
        $_SESSION['alert_type'] = "danger";
        header("Location: ../Login.php");
    } else {
        $user = $_POST['email'];
        $pass = $_POST['pass'];
        $_SESSION['email'] = $user;
        $sql = $con->query("SELECT * FROM usuarios WHERE Correo='$user' AND Clave='$pass'");


        if ($datos = $sql->fetch_object()) {
            header("Location: \LaboratorioVirtual\in.html");
        } else {
            $_SESSION['alert_message'] = "Contraseña o correo incorrecto";
            $_SESSION['alert_type'] = "danger";
            header("Location: ../Login.php");
        }
    }
}
?>