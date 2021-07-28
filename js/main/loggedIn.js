"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("./cart");
require("jquery");
function default_1() {
    if (localStorage.email) {
        document.getElementById('botonIniciarSesion').remove();
        document.getElementById('inicioSesionHeader').innerHTML = "Hola, bienvenido(a)";
        document.getElementById('formularioInicio').innerHTML = "<div class=\"col text-center mx-auto\"><button id=\"botonCerrarSesion\" type=\"button\" class=\"btn btn-outline-danger font-weight-bold text-dark boton-domine\">Cerrar\n        Sesi\u00F3n</button></div>";
        $('#carritoCompras').removeClass('d-none');
        cart_1.interaccionesCarrito();
        $('.agregarCarrito').unbind();
        document.getElementById('alertaProductos').innerHTML = '';
        $('#botonCerrarSesion').on('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = default_1;
