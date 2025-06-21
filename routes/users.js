import express from "express";
import { getUsers, getUserById, createUser } from "../controllers/users.js";

const { Router } = express;

const routes = Router();

routes.get("/", getUsers);

routes.get("/:id", getUserById);

routes.post("/", createUser);

export default routes;
