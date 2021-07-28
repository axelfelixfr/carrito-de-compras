"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuToggle = void 0;
function menuToggle() {
    $("#menu-toggle").on('click', function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
}
exports.menuToggle = menuToggle;
