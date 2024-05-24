<?php
session_start();

$user = $_POST['email1'];
$pass = $_POST['pass1'];
include ("conexion.php");
if (!empty($_POST['registrar'])) {
    if (empty($_POST['email1']) or empty($_POST['pass1'])) {
        $_SESSION['alert_message1'] = "Campos vacíos, por favor completar";
        $_SESSION['alert_type1'] = "danger";
        header("Location: ../Login.php");
    } else {
        $sql_verificar = "SELECT * FROM usuarios WHERE Correo = '$user'";
        $result_verificar = $con->query($sql_verificar);

        if ($result_verificar->num_rows > 0) {
            $_SESSION['alert_message1'] = "Este usuario ya existe";
            $_SESSION['alert_type1'] = "danger";
            header("Location: ../Login.php");
        } else {
            $sql_insertar = "INSERT INTO usuarios (Correo, Clave) VALUES ('$user', '$pass')";
            
            if ($con->query($sql_insertar) === TRUE) {
                $_SESSION['alert_message1'] = "Se creo su usuario correctamente";
                $_SESSION['alert_type1'] = "success";
                header("Location: ../Login.php");
            } else {
                $_SESSION['alert_message1'] = "¡no se creo su usuario!";
                $_SESSION['alert_type1'] = "danger";
                header("Location: ../Login.php");
            }
        }

    }
}
?>