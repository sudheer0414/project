/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import * as dotenv from 'dotenv';


dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const db = drizzle(pool, { schema });
