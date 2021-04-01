import { Knex } from "knex";

export interface Model {
    id: string;
    create_at?: Knex.Raw;
    update_at?: Knex.Raw;
}

export interface PostProduct {
    title: string;
    description: string;
    published_at?: Knex.Raw;
    active?: boolean;
}
export interface Product extends PostProduct {
    id: string;
    create_at?: Knex.Raw;
    update_at?: Knex.Raw;
}

export interface PostUser {
    name: string;
    email: string;
    password?: string;
    active?: boolean;
}
export interface User extends PostUser {
    id: string;
    create_at?: Knex.Raw;
    update_at?: Knex.Raw;
}

// export enum FailureType {
//     InvalidId = 0,
//     RecordNotFound = 1,
//     RecordDuplicated = 2
// }

// export type Failure = {
//     errorType: FailureType;
//     message: string;
// }

// export type Failable<Data> = Failure | Data;
