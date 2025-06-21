import Card from "../models/Card.js";

async function getCards(req, res, next) {
  try {
    const cards = await Card.find({});
    res.send(cards);
  } catch (err) {
    next(err);
  }
}

async function createCard(req, res, next) {
  try {
    const { name, link } = req.body;
    console.log("linea 15");

    const newCard = await Card.create({
      name,
      link,
      owner: req.user._id,
    });
    console.log("linea 27");
    res.send(newCard);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function deleteCard(req, res, next) {
  const { id } = req.body;

  Card.findByIdAndDelete(id)
    .then((card) => res.send("Carta eliminada:", card))
    .catch((err) => next());
}

export { getCards, createCard, deleteCard };
