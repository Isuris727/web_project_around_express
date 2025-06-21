import mongoose from "mongoose";
// import validator -- revisar como se importa el validador

const userSchema = new mongoose.Schema({
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
    validate: {
      validator: function isUrl(value) {
        const urlRegex =
          /https?:\/\/[w{3}.]?[\w|\W|\d]+[\.com|.net|.mx]\/?.{1,}/;

        return urlRegex.test(value);
      },
      message: props`${props.value} is not a url, please use a valid url`,
    },
  },
});

const User = mongoose.model("user", userSchema);

export default User;
