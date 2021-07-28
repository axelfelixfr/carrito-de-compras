"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightbox = void 0;
function lightbox() {
    // Creamos el evento click a la imagenes con la clase "imagen-proyecto"
    $('.lightbox').on('click', function () {
        // Almacenamos su atributo src de la imagen que se selecciono en una variable
        var rutaImagen = $(this)[0].classList[1];
        var imagenCss = rutaImagen;
        imagenCss = $(this).css("background-image").match(/^url\("?(.+?)"?\)$/)[1];
        // Creamos el modal y le concatenamos la variable de la ruta para hacer el modal dinámico
        var modal = "<div id=\"lightbox_container\">\n                    <div id=\"modal\" style=\"height: 100%;\">\n                        <img class=\"imagen-modal\" src=\"" + imagenCss + "\" alt=\"producto\">\n                        <i id=\"btnCerrar\" class=\"btn-cerrar fa fa-times\" aria-hidden=\"true\"></i>\n                    </div>\n                    </div>";
        // Seleccionamos la caja con id 'portada' y le agregamos el modal que creamos después
        $('#portada').after(modal);
        // Seleccionamos el boton cerrar y le agregamos un evento click
        $('#btnCerrar').on('click', function () {
            // Si se da click se remueve el modal
            $('#lightbox_container').remove();
        });
    });
    $(document).on('keyup', function (e) {
        // La tecla ESC es igual a 27 en código ASCII
        // La propiedad which detecta que tecla se presiono
        if (e.which == 27) {
            // Si se presiona ESC se remueve el modal de igual forma
            $('#lightbox_container').remove();
        }
    });
}
exports.lightbox = lightbox;
