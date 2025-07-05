import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { User } from "./entity/user";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log("Database connected");

    //  CREATE
    app.post("/users", async (req, res) => {
        const { name, email } = req.body;
        const user = AppDataSource.manager.create(User, { name, email });
        await AppDataSource.manager.save(user);
        res.send(user);
    });

    //  READ ALL
    app.get("/users", async (req, res) => {
        const users = await AppDataSource.manager.find(User);
        res.send(users);
    });

    // READ ONE
    app.get("/users/:id", async (req, res) => {
        const user = await AppDataSource.manager.findOneBy(User, { id: parseInt(req.params.id) });
        res.send(user);
    });

    //  UPDATE
    app.put("/users/:id", async (req, res) => {
        const user = await AppDataSource.manager.findOneBy(User, { id: parseInt(req.params.id) });
        if (user) {
            AppDataSource.manager.merge(User, user, req.body);
            const result = await AppDataSource.manager.save(user);
            res.send(result);
        } else {
            res.status(404).send("User not found");
        }
    });

    //  DELETE
    app.delete("/users/:id", async (req, res) => {
        const result = await AppDataSource.manager.delete(User, { id: parseInt(req.params.id) });
        res.send(result);
    });

    app.listen(5050, () => console.log("Server running on port 5050"));
});
