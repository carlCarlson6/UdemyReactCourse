import { IComment } from "./IComment";
import { IUser } from "./IUser";

export interface IProduct {
    id?: string
    name: string
    company: string
    url: string
    description: string
    imageUrl: string
    votes: Array<string>
    comments: Array<IComment>
    createdBy: IUser
    createdAt: number
}