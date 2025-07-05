/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { db } from '../db/drizzle.config';
// import { kumar} from '../db/kumar.entity';
// import { users } from '../db/users.entity';
// import { eq } from 'drizzle-orm';
// @Injectable()
// export class UsersService {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   create(body: { name: string; email: string; }) {
//     throw new Error('Method not implemented.');
//   }
//   async findAll() {
//     return await db.select().from(kumar);
//   }

//   async createkumar(data: { name: string; email:string}) {
//     return await db.insert(kumar).values(data).returning();
//   }

//    async createusers(data: { name: string; profession: string; phonenumber: number}) {
//     return await db.insert(users).values(data).returning();
//   }

//   async update(id:number, data: { name?: string; profession?: string; phonenumber?: number}) {
//     return await db.update(kumar).set(data).where(eq(kumar.id, id)).returning();
//   }

//   async delete(id: number) {
//     return await db.delete(kumar).where(eq(kumar.id, id)).returning();
//   }

// }
// import { Injectable } from '@nestjs/common';
// import { db } from '../db/drizzle.config';
// import { kumar, users } from './db/schema'; // if schema is defined here
// import { eq } from 'drizzle-orm';
// import { InferModel } from 'drizzle-orm';

// //  Infer types for 'kumar' table
// type Kumar = InferModel<typeof kumar>;
// type NewKumar = InferModel<typeof kumar, 'insert'>;

// @Injectable()
// export class UsersService {
//   async findAll(): Promise<Kumar[]> {
//     return db.select().from(kumar);
//   }

//   async create(data: NewKumar): Promise<Kumar[]> {
//     return db.insert(kumar).values(data).returning();
//   }

//   async update(id: number, data: Partial<NewKumar>): Promise<Kumar[]> {
//     return db.update(kumar).set(data).where(eq(kumar.id, id)).returning();
//   }

//   async delete(id: number): Promise<Kumar[]> {
//     return db.delete(kumar).where(eq(kumar.id, id)).returning();
//   }
// }
// src/app.service.ts
// import { Injectable } from '@nestjs/common';
// import { db } from './db';
// import { kumar, users } from './db/schema';
// import { eq } from 'drizzle-orm';

// @Injectable()
// export class AppService {
//   // Customer methods
//   async createkumar(fullName: string) {
//     return db.insert(kumar).values({ full_name: fullName });
//   }

//   async getAllkumar() {
//     return db.select().from(kumar);
//   }

//   // Purchase methods
//   async createusers(kumarId: number) {
//     return db.insert(users).values({ kumar_id: kumarId });
//   }

//   async getAllusers() {
//     return db.select().from(purchases);
//   }

//   async getCustomerPurchases(customerId: number) {
//     return db.select().from(purchases).where(eq(purchases.customer_id, customerId));
 
//   }
// }

import { Injectable } from '@nestjs/common';
//import { db } from './db/schema';
import { kumar } from '../db/kumar.entity';
import { users } from '../db/users.entity';
import { eq } from 'drizzle-orm';
import { db } from 'src/db/drizzle.config';

@Injectable()
export class UserService {
  private getTable(type: string) {
    switch (type) {
      case 'kumar': return kumar;
      case 'users': return users;
      default: throw new Error('Invalid table type');
    }
  }

  async create(type: string, data: any) {
    const table = this.getTable(type);
    return db.insert(table).values(data); // or .returning() if valid
  }

  async findAll(type: string) {
    const table = this.getTable(type);
    return db.select().from(table);
  }

  async findOne(type: string, id: number) {
    const table = this.getTable(type);
    const result = await db.select().from(table).where(eq(table.id, id));
    return result.length ? result[0] : null;
  }

  async update(type: string, id: number, data: any) {
    const table = this.getTable(type);
    return db.update(table).set(data).where(eq(table.id, id));
  }

  async remove(type: string, id: number) {
    const table = this.getTable(type);
    return db.delete(table).where(eq(table.id, id));
  }
}



