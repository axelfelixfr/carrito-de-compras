// Variables
const carritoCompras = document.querySelector('#tablaCarrito');
const listaProductos = document.querySelector('#listaProductos');
const contenedorCarrito = document.querySelector('#listaComprados tbody');
const botonVaciarCarrito = document.querySelector('#vaciarCarrito'); 
let articulosCarrito:any = [];

export function interaccionesCarrito() {
     listaProductos!.addEventListener('click', agregarProducto);

     carritoCompras!.addEventListener('click', eliminarProducto);

     botonVaciarCarrito!.addEventListener('click', vaciarCarrito);

     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito')! ) || []  ;
          // console.log(articulosCarrito);
          carritoHTML();
     });
}


// Función que añade el curso al carrito
function agregarProducto(e:any) {
     e.preventDefault();
     if(e.target.classList.contains('agregarCarrito')) {
          const producto = e.target.parentElement.parentElement;
          sacarInformacionProductos(producto);
     }
}

// Lee los datos del curso
function sacarInformacionProductos(producto:any) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('h5').textContent,
          precio: producto.querySelector('.precio-producto span').textContent,
          id: producto.querySelector('button').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( (producto:any) => producto.id === infoProducto.id ) ) { 
          const productos = articulosCarrito.map( (producto:any) => {
               if( producto.id === infoProducto.id ) {
                    let cantidad = parseInt(producto.cantidad);
                    cantidad++
                    producto.cantidad =  cantidad;
                    return producto;
               } else {
                    return producto;
               }
          })
          articulosCarrito = [...productos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }

     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarProducto(e:any) {
     e.preventDefault();
     if(e.target.classList[4] == 'borrarCurso' ) {
          const producto = e.target.parentElement.parentElement;
          const productoId = producto.querySelector('a').getAttribute('data-id');
          
          articulosCarrito = articulosCarrito.filter((producto:any) => producto.id !== productoId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach((producto:any) => {
          const row = document.createElement('tr');
          row.innerHTML = `
                    <td scope="row">  
                            <img src="${producto.imagen}" width="100">
                    </td>
                    <td>${producto.titulo}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.cantidad} </td>
                    <td>
                        <a href="#" class="align-middle" data-id="${producto.id}"><i class="fa fa-trash fa-lg text-danger borrarCurso" aria-hidden="true"></i></a>
                    </td>
          `;
          contenedorCarrito!.appendChild(row);
     });

     sincronizarStorage();
}

// Sincronizar localStorage
function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     while(contenedorCarrito!.firstChild) {
          contenedorCarrito!.removeChild(contenedorCarrito!.firstChild);
      }
}

