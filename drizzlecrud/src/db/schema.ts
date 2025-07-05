/* eslint-disable prettier/prettier */
//import { integer } from 'drizzle-orm/gel-core';
// import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

// export const kumar = pgTable('kumar',{
//   id: serial('id').primaryKey(),
//   phonenumber:integer('phonenumber'),
//   name: text('name').notNull(),
//   profession: text('profession').notNull(),
// });

// export const users = pgTable('users', {
//   id: serial('id').primaryKey(),
//   phonenumber: integer('phonenumber'),
//   name: text('name').notNull(),
//   profession: text('profession,').notNull(),
//   kumarId: integer('kumar_id').notNull(), // foreign key to users.id
// });
import { drizzle } from 'drizzle-orm/node-postgres';
import * as  postgres from 'postgres';
import { kumar } from './kumar.entity';
import { users } from './users.entity';

import * as dotenv from 'dotenv';
dotenv.config();

 
const client = postgres(process.env.DATABASE_URL!);

 
export const db = drizzle(client, { 
  schema: { 
    kumar, 
    users,
  },
});
