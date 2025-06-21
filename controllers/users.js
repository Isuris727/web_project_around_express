import User from "../models/User.js";

async function getUsers(req, res) {
  const users = await User.find({});

  res.send(users);
}

async function getUserById(req, res) {
  const { id } = req.params;

  const foundUser = await User.findById(id);

  if (foundUser !== null) {
    return res.send(foundUser);
  }
  return res.status(404).send({ message: "ID de usuario no encontrado" });
}

async function createUser(req, res) {
  const { name, about, avatar } = req.body;
  const user = await User.create({
    name,
    about,
    avatar,
  });

  res.send(user);
}

export { getUsers, getUserById, createUser };
