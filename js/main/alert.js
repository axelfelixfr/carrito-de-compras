"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertaProductos = void 0;
function alertaProductos() {
    $('.agregarCarrito').on('click', function (e) {
        e.preventDefault();
        // alert('No estas logueado');
        document.getElementById('alertaProductos').innerHTML = "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n                                                                    <strong><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i></strong> Debes estar identificado(a) para comprar productos.\n                                                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                                                    <span aria-hidden=\"true\">&times;</span>\n                                                                    </button>\n                                                                </div>";
    });
}
exports.alertaProductos = alertaProductos;
