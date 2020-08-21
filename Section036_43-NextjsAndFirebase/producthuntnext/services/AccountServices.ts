import { IFormValue } from "../common/models/IFormValue";
import {firebase} from "../firebase";
import Router from "next/router";

export class AccountServices {
    static async CreateAccount(userInfo: Array<IFormValue>): Promise<void> {
        const name: string = userInfo.find(info => info.name === 'name').value;
        const password: string = userInfo.find(info => info.name === 'password').value;
        const email: string = userInfo.find(info => info.name === 'email').value;
        
        await firebase.AddUser(name, email, password);
        Router.push('/');
    }

    static async LoginUser(userInfo: Array<IFormValue>): Promise<void> {
        const password: string = userInfo.find(info => info.name === 'password').value;
        const email: string = userInfo.find(info => info.name === 'email').value;
        
        await firebase.AutheticateUser(email, password);
        Router.push('/');
    }

}