import { Knex } from "knex";

export interface Basic {
    id?: number;
    create_at?: Knex.Raw;
    update_at?: Knex.Raw;
}

export interface Product extends Basic {
    title: string;
    description: string;
    published_at?: Knex.Raw;
    active?: boolean;
}

export interface User extends Basic {
    name: string;
    email: string;
    password: string;
    active?: boolean;
}
