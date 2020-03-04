function validaCampos() {

	var nombre,correo,telefono,mensaje;

	nombre=document.getElementById("nombre").value;
	correo=document.getElementById("correo").value;
	telefono=document.getElementById("telefono").value;
	mensaje=document.getElementById("mensaje").value;

	if(nombre=="" || correo=="" || telefono=="" || mensaje==""){
		alert("Todos los campos son obligatorios");
		return false;
	}
	if(nombre.lenght>15){
		alert("el nombre no puede ser mas de 15 caracteres");
		return false;
	}

}