import express from "express";
import fs from "fs/promises";
import path from "path";
const { Router } = express;
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = Router();
const cardsPath = path.join(__dirname, "..", "data", "cards.json");

const fetchCardsData = async () => {
  try {
    const cardsData = await fs.readFile(cardsPath, { encoding: "utf8" });
    return JSON.parse(cardsData);
  } catch (error) {
    console.log(error);
  }
};

async function getCards(req, res) {
  const cards = await fetchCardsData();
  res.send(cards);
}

routes.get("/", getCards);

export default routes;
