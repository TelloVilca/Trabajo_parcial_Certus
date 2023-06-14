// VARIABLES QUE SE PUEDEN AÑADIR
let botones = document.querySelectorAll("#articulo button");

// BUCLE FOR PARA PRESIONAR VARIOS BOTONES
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", agregarCarrito, false);
}


// DEFINIR LA FUNCION
function agregarCarrito(e) {
  // SI PRESIONAMOS EL BOTON LA IMAGEN Y TEXTO SE ELIMINAN
  if (document.querySelector("#carritoVacio")) {
    document.querySelector("#carritoVacio").remove();
    document.querySelector("#carrito figcaption").remove();
  }
  //AGREGAR INFORMACION DEL TARGET
  let elementBoton = e.target;
  let elementoPadre = elementBoton.parentElement.parentElement;

  // SACAR INFORMACION DE ELEMENTOS DEL HTML
  let parrafo = elementoPadre.querySelector("p").innerHTML;
  let p_n = elementoPadre.querySelector(".precio_normal").innerHTML;
  let p_d = elementoPadre.querySelector(".precio_descuento").innerHTML;

  //  AGREGAR INFORMACION AL CARRITO
  let nuevoelemento = document.createElement("div");
  nuevoelemento.innerHTML = `<div>
                                <h4>${parrafo}</h4>
                                <p>${p_n}</p>
                                <p>${p_d}</p> 
                                <hr>
                            </div>`;

  document.querySelector("#carrito").appendChild(nuevoelemento);

  // OBTENER ELEMENTO PADRE DONDE SE HIZO CLICK
  alert("Se agrego un producto al carrito de compras 'REVISALO'");
}
