import { ITag } from "./ITag";

export interface IEmployee {
    id: number,
    full_name: string,
    username: string,
    tags: Array<ITag>,
    ids: Array<number>,
    tg_username: string
}

export interface ISingleEmployee {
    id: number,
    tg_username: string,
    first_name: string,
    last_name: string,
    patronymic: string,
    chats: Array<number>,
    tags: Array<number>
}

export interface IPostEmployee {
    tg_username: string,
    first_name: string,
    last_name: string,
    patronymic: string,
    chats: Array<number>,
    tags: Array<number>
}