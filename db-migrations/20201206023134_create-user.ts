import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (builder) => {
    builder.string("id").unique().notNullable().primary();
    builder.string("first_name").notNullable();
    builder.string("last_name").notNullable();
    builder.string("email").notNullable().unique();
    builder.string("password").notNullable();
    builder.dateTime("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
