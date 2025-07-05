/* eslint-disable prettier/prettier */
import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';
//import { kumar } from './kumar.entity';

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  profession: text("profession").notNull(),
  phonenumber: integer("phonenumber"),
  //kumarid: integer("kumar_id").references(() => kumar.id),
});