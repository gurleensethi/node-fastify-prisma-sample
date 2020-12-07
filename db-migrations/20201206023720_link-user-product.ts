import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("products", (builder) => {
    builder.string("user_id").notNullable().references("id").inTable("users");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("products", (builder) => {
    builder.dropColumn("user_id");
  });
}
