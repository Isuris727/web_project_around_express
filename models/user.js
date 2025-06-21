import mongoose from "mongoose";
// import validator -- revisar como se importa el validador

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String, // revisar si es correcto
    required: true,
    // validate: {validator(){ --- revisar si es correcto
    //   return
    // }, message: },
  },
});

const usermodel = mongoose.model("user", userSchema);

export default usermodel;
