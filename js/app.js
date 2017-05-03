//
// * Archivo principal de funcionalidad de JS
// 
//var imagen = document.getElementsByClassName("box-work");
//var longitud = imagen.length;
//var cerrar = document.getElementsByClassName("close");
//var modal = document.getElementById("modal");
//var imagenModal = document.getElementById("img");
//console.log(imagen);
////console.log(longitud);
//
//for (var i = 0; i < longitud; i++){
//	imagen[i].addEventListener("click", mostrarImagen);
//	imagen[i].id="img"+i;
//	//cerrar[i].addEventListener("click", cerrarImagen);
//}
//function mostrarImagen(i){
//	modal.style.display = "block";
//	for (var i = 0; i < longitud; i++){
//		imagenModal.src = "assets/images/img-"+i+1+".jpg";
//	}
//}
//
//function cerrarImagen(){
//	modal.sytle.display = "none";
//}

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("image");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName("gallery");
var span = document.getElementsByClassName("close");
 
var longitud = images.length;
console.log(span);

for (var i = 0; i < longitud; i++){
  images[i].addEventListener("click", gallery);
	
}
for (var i = 0; i < span.length; i++){
	span[i].addEventListener("click",close);
}

function gallery(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = "NOMBRE DEL PROYECTO";
}

function close() {
  modal.style.display = "none";
}