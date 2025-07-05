/* eslint-disable prettier/prettier */
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

// export const kumar = pgTable("kumar", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
//   profession: text("profession").notNull(),
//   phonenumber: integer("phonenumber")
// });
export const kumar = pgTable('kumar', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
});
