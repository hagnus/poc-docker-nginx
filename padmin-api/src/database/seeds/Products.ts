import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {title: 'Simple', description: 'Simple Product', active: true },
        {title: 'Complex One', description: 'It is a complex product', active: true },
        {title: 'Special Ofer', description: 'Special option', active: true },
        {title: 'Another Sample', description: 'Just another one', active: true }
      ]);
    });
}
