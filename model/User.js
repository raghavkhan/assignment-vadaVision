const mongoose = require("mongoose");

const SchemaObject = {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  active: { type: Boolean, default: false },
};

const User = mongoose.Schema(SchemaObject);
const model = mongoose.model("users", User);
module.exports = model;
