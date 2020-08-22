import { User } from "firebase";
import {Firebase} from '../../../database/firebase/Firebase'

export interface IAdministration {
    user: User;
    firebase: Firebase;
}