import {User} from './user';
import loggedIn from './loggedIn';

export default function(dbUser:User, formInfo:{email:string, password:string}){

    if( formInfo.email === dbUser.email ){
        
        if( formInfo.password === dbUser.password ){

            localStorage.setItem('email', formInfo.email);
            
            loggedIn();

        } else{

            return;

        }

    } else{
        return;
    }

}