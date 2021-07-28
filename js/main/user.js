"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.User = void 0;
var User = /** @class */ (function () {
    function User(_email, _password) {
        this._email = _email;
        this._password = _password;
    }
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (email) {
            this._email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
var users = [];
var userFirst = new User('axel@mercadoadistancia.com', 'mercado');
users.push(userFirst);
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
