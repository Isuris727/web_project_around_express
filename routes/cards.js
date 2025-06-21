import express from "express";
const { Router } = express;
import { getCards, createCard, deleteCard } from "../controllers/cards.js";

const routes = Router();

routes.get("/", getCards);

routes.post("/", createCard);

routes.delete("/:cardId", deleteCard);

export default routes;
