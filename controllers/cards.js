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

    const newCard = await Card.create({
      name,
      link,
      owner: req.user._id,
    });
    res.send(newCard);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function deleteCard(req, res, next) {
  const { cardId } = req.params;

  Card.findByIdAndDelete(cardId)
    .then((cardId) =>
      res.send({
        message: `Carta ${cardId.name} con ID: ${cardId._id} eliminada correctamente`,
      })
    )
    .catch((err) => next());
}

export { getCards, createCard, deleteCard };
