"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var lightbox_1 = require("./lightbox");
var menuToggle_1 = require("./menuToggle");
var login_1 = __importDefault(require("./login"));
require("jquery");
var loggedIn_1 = __importDefault(require("./loggedIn"));
var alert_1 = require("./alert");
// Toggle para el boton del menú
menuToggle_1.menuToggle();
// Efecto lightbox
lightbox_1.lightbox();
// Alerta para productos
alert_1.alertaProductos();
// Checar el login
loggedIn_1.default();
document.getElementById('botonIniciarSesion').addEventListener('click', function (e) {
    e.preventDefault();
    var email = document.getElementById('correoElectronico').value;
    var password = document.getElementById('password').value;
    login_1.default(user_1.getUsers()[0], { email: email, password: password });
});
