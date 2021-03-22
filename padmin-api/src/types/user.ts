import { Knex } from "knex";

export type User = {
    id?: number;
    name: string;
    email: string;
    password: string;
    active: boolean;
    create_at: Knex.Raw;
    update_at: Knex.Raw;
}