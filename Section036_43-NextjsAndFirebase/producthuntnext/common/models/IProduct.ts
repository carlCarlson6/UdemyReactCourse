import { IComment } from "./IComment";

export interface IProduct {
    name: string
    company: string
    url: string
    description: string
    imageUrl: string
    votes: number
    comments: Array<IComment>
    createdBy: string
    createdAt: Date
}