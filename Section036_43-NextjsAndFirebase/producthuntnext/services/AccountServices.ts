import { IFormValue } from "../common/models/IFormValue";
import {firebase} from "../firebase";
import Router from "next/router";
import { unpackCreateAccountFormValues } from "../common/utils/unpackValues/unpackCreateAccount";
import { unpackLoginFormValues } from "../common/utils/unpackValues/unpackLogin";

export class AccountServices {
    static async CreateAccount(userInfo: Array<IFormValue>): Promise<void> {
        const {name, password, email} = unpackCreateAccountFormValues(userInfo);
        
        await firebase.AddUser(name.value, email.value, password.value);
        Router.push('/');
    }

    static async LoginUser(userInfo: Array<IFormValue>): Promise<void> {
        const {email, password} = unpackLoginFormValues(userInfo);
        
        await firebase.AutheticateUser(email.value, password.value);
        Router.push('/');
    }

}