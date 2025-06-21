import express from "express";
import fs from "fs/promises";
import path from "path";
const { Router } = express;
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = Router();

const usersPath = path.join(__dirname, "..", "data", "users.json");

const fetchUsersData = async () => {
  try {
    const usersData = await fs.readFile(usersPath, { encoding: "utf8" });
    return JSON.parse(usersData);
  } catch (error) {
    console.log(error);
  }
};

async function getUsers(req, res) {
  const users = await fetchUsersData();

  res.json(users);
}

async function getUserById(req, res) {
  const { id } = req.params;

  const usersData = await fetchUsersData();

  const foundUser = await usersData.find((user) => user._id === id);

  if (foundUser !== undefined) {
    return res.send(foundUser);
  }
  return res.status(404).send({ message: "ID de usuario no encontrado" });
}
// function createUser(req,res){

// }

routes.get("/", getUsers);

routes.get("/:id", getUserById);

// routes.post("/",)

export default routes;
