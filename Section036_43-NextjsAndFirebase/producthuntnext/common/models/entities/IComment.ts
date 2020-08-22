import { IUser } from "./IUser";

export interface IComment {
    message: string
    createdBy: IUser
}