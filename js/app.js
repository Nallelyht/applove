/*
 * Archivo principal de funcionalidad de JS
 */
var imagen = document.getElementsByClassName("box-work");
var longitud = imagen.length;
var cerrar = document.getElementsByClassName("close");
var modal = document.getElementById("modal");
var imagenModal = document.getElementById("img");
console.log(imagen);
//console.log(longitud);

for (var i = 0; i < longitud; i++){
	imagen[i].addEventListener("click", mostrarImagen);
	imagen[i].id="img"+i;
	//cerrar[i].addEventListener("click", cerrarImagen);
}
function mostrarImagen(i){
	modal.style.display = "block";
	var i=1;
	imagenModal.src = "assets/images/img-"+i+".jpg";
	i++;
}

function cerrarImagen(){
	modal.sytle.display = "none";
}