import { eq } from 'drizzle-orm';
import { db } from "./db";
import { users } from "./db/schema";

// CREATE
async function createUser(name: string, email: string) {
  await db.insert(users).values({ name, email });
  console.log("User created");
}

// READ
async function getAllUsers() {
  const result = await db.select().from(users);
  console.log("All Users:", result);
}

// UPDATE
async function updateUser(id: number, name: string) {
  await db.update(users).set({ name }).where(eq(users.id,id));
  console.log("User updated");
}

// DELETE
async function deleteUser(id: number) {
  await db.delete(users).where(eq(users.id, id));
  console.log("User deleted");
}

// RUN
(async () => {
  await createUser("kumar", "name@example.com");
  await getAllUsers();
  await updateUser(1,"name");
  await deleteUser(1);
})();
