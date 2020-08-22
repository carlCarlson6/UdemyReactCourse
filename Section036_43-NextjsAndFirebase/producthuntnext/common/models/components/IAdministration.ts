import { User } from "firebase";
import {Firebase} from '../../firebase/Firebase'

export interface IAdministration {
    user: User;
    firebase: Firebase;
}