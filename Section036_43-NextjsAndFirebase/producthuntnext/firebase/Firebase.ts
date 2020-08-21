import app, {auth, User} from 'firebase/app';
import config from './Config'
import 'firebase/auth';

export class Firebase {
    auth: auth.Auth;
    
    constructor() {
        if(!app.apps.length){
            app.initializeApp(config);
        }
        this.auth = auth();
    }

    async AddUser(name: string, email: string, password: string): Promise<User> {
        const newUser: auth.UserCredential = await this.auth.createUserWithEmailAndPassword(email, password);
        await newUser.user.updateProfile({displayName: name});
        return newUser.user;
    }

    async AutheticateUser(email: string, password: string): Promise<User> {
        const userCreadential: auth.UserCredential = await this.auth.signInWithEmailAndPassword(email, password)
        return userCreadential.user;
    }

    async SignOut(): Promise<void> {
        await this.auth.signOut();
    }
}

export const firebase = new Firebase();
