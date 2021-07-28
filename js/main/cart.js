"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interaccionesCarrito = void 0;
// Variables
var carritoCompras = document.querySelector('#tablaCarrito');
var listaProductos = document.querySelector('#listaProductos');
var contenedorCarrito = document.querySelector('#listaComprados tbody');
var botonVaciarCarrito = document.querySelector('#vaciarCarrito');
var articulosCarrito = [];
function interaccionesCarrito() {
    listaProductos.addEventListener('click', agregarProducto);
    carritoCompras.addEventListener('click', eliminarProducto);
    botonVaciarCarrito.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', function () {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        // console.log(articulosCarrito);
        carritoHTML();
    });
}
exports.interaccionesCarrito = interaccionesCarrito;
// Función que añade el curso al carrito
function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregarCarrito')) {
        var producto = e.target.parentElement.parentElement;
        sacarInformacionProductos(producto);
    }
}
// Lee los datos del curso
function sacarInformacionProductos(producto) {
    var infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h5').textContent,
        precio: producto.querySelector('.precio-producto span').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    };
    if (articulosCarrito.some(function (producto) { return producto.id === infoProducto.id; })) {
        var productos = articulosCarrito.map(function (producto) {
            if (producto.id === infoProducto.id) {
                var cantidad = parseInt(producto.cantidad);
                cantidad++;
                producto.cantidad = cantidad;
                return producto;
            }
            else {
                return producto;
            }
        });
        articulosCarrito = __spreadArray([], productos);
    }
    else {
        articulosCarrito = __spreadArray(__spreadArray([], articulosCarrito), [infoProducto]);
    }
    carritoHTML();
}
// Elimina el curso del carrito en el DOM
function eliminarProducto(e) {
    e.preventDefault();
    if (e.target.classList[4] == 'borrarCurso') {
        var producto = e.target.parentElement.parentElement;
        var productoId_1 = producto.querySelector('a').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(function (producto) { return producto.id !== productoId_1; });
        carritoHTML();
    }
}
// Muestra el curso seleccionado en el Carrito
function carritoHTML() {
    vaciarCarrito();
    articulosCarrito.forEach(function (producto) {
        var row = document.createElement('tr');
        row.innerHTML = "\n                    <td scope=\"row\">  \n                            <img src=\"" + producto.imagen + "\" width=\"100\">\n                    </td>\n                    <td>" + producto.titulo + "</td>\n                    <td>" + producto.precio + "</td>\n                    <td>" + producto.cantidad + " </td>\n                    <td>\n                        <a href=\"#\" class=\"align-middle\" data-id=\"" + producto.id + "\"><i class=\"fa fa-trash fa-lg text-danger borrarCurso\" aria-hidden=\"true\"></i></a>\n                    </td>\n          ";
        contenedorCarrito.appendChild(row);
    });
    sincronizarStorage();
}
// Sincronizar localStorage
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
