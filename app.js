import express from "express";
import usersRoutes from "./routes/users.js";
import cardsRoutes from "./routes/cards.js";

const app = express();

const { PORT = 3000 } = process.env;

app.use("/users", usersRoutes);

app.use("/cards", cardsRoutes);

app.use("/", function (req, res) {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log("App ejecutandose en puerto: ", PORT);
});
