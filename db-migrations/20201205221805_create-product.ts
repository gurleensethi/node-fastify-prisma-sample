import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("products", (table) => {
    table.string("id").primary().unique().notNullable();
    table.string("name").notNullable();
    table.string("description").nullable();
    table.double("price").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("products");
}
