import { DataSource } from "typeorm";
import { User } from "./entity/user";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",    // your DB user
    password: "kumar",    // your DB password
    database: "sudheer",      // your DB name
    synchronize: true,       // auto create tables (don't use in prod)
    logging: false,
    entities: [User],
});
