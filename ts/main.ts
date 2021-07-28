import {getUsers} from './user';
import {lightbox} from './lightbox';
import {menuToggle} from './menuToggle';
import login from './login';
import "jquery";
import loggedIn from './loggedIn';
import {alertaProductos} from './alert';

// Toggle para el boton del menú
menuToggle();

// Efecto lightbox
lightbox();

// Alerta para productos
alertaProductos();

// Checar el login
loggedIn();

document.getElementById('botonIniciarSesion')!.addEventListener('click', function(e){

    e.preventDefault();

    let email:string = (<HTMLInputElement>document.getElementById('correoElectronico')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;

    login(getUsers()[0], {email, password});
});
