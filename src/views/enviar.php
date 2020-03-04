<?php

 //$destino="vivas.p52@gmail.com";
 $nombre= $_POST['nombre'];
 $correo= $_POST['correo'];;
 $mensaje= $_POST['mensaje'];
 $contenido= "Nombre: ".$nombre."\nCorreo: ".$correo."\nMensaje: ".$mensaje;
 $email=mail("vivas.p52@gmail.com","Contacto", $contenido);
 header("Location:gracias.html");
?>


