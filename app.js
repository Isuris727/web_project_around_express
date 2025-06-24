import express from "express";
import mongoose from "mongoose";
import usersRoutes from "./routes/users.js";
import cardsRoutes from "./routes/cards.js";

const app = express();

const { PORT = 3000 } = process.env;

mongoose
  .connect("mongodb://localhost:27017/aroundbd")
  .then(() => console.log("conectado a la base de datos"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "685629b5e669a26424f53b16",
  };
  next();
});

app.use("/users", usersRoutes);

app.use("/cards", cardsRoutes);

app.use((err, req, res, next) => {
  res.status(400).send(err.message);
  console.error(err);
});

app.use("/", function (req, res) {
  res.status(500).send({ message: "Recurso solicitado no encontrado" });
});

app.use((err, req, res, next) => {
  if (err.name === "CastError") {
    console.error(err);
    return res
      .status(400)
      .send({ message: "Por favor introduce unos datos validos." });
  }

  if (err.name === "DocumentNotFoundError") {
    console.error(err);
    return res.status(404).send({
      message:
        "No se encontró el documento solicitado. Por favor verifica tu información",
    });
  }
  res.status(500).send({
    message: "Algo salió mal",
  });
});

app.listen(PORT, () => {
  console.log("App ejecutandose en puerto: ", PORT);
});
