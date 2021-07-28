import {interaccionesCarrito} from './cart';
import "jquery";

export default function(){

    if(localStorage.email){

        document.getElementById('botonIniciarSesion')!.remove();
        
        document.getElementById('inicioSesionHeader')!.innerHTML = `Hola, bienvenido(a)`;

        document.getElementById('formularioInicio')!.innerHTML = `<div class="col text-center mx-auto"><button id="botonCerrarSesion" type="button" class="btn btn-outline-danger font-weight-bold text-dark boton-domine">Cerrar
        Sesión</button></div>`;

        $('#carritoCompras').removeClass('d-none');

        interaccionesCarrito();
        
        $('.agregarCarrito').unbind();
        document.getElementById('alertaProductos')!.innerHTML = '';
        
        $('#botonCerrarSesion').on('click', function(e){
            e.preventDefault();

            localStorage.clear();

            window.location.reload();
        });
    }
}