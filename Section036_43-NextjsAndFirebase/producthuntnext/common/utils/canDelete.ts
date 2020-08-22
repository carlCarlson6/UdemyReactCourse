import { User } from "firebase";
import { IUser } from "../models/entities/IUser";

export const canDelete = (user: User, productCreator: IUser): boolean => {
    if(!user) return false;

    if(user.uid === productCreator.id){
        return true;
    } else {
        return false
    }
}