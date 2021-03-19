import { Knex } from "knex";

export type Product = {
    id?: number;
    title: string;
    description: string;
    published_at: Knex.Raw;
    create_at: Knex.Raw;
    update_at: Knex.Raw;
    active: boolean;
}