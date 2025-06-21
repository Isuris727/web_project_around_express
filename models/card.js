import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {},
  owner: {},
  // likes: {[
  //   type: m
  // ],
  // default: field},
  // createdAt: {

  // }
});

const cardmodel = mongoose.model("card", cardSchema);

export default cardmodel;
