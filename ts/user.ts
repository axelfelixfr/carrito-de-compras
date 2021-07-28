export class User {

    constructor(private _email:string, private _password:string){

    }

    get email():string{
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get password():string{
        return this._password;
    }

    set password(password){
        this._password = password;
    }

}

let users:User[] = [];

let userFirst = new User('axel@mercadoadistancia.com', 'mercado');
users.push(userFirst);

export function getUsers(){
    return users;
}
