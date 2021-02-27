const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      unique: false,
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
      unique: false,
    },
    owner: {
      name: String,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.virtual("strNameAge").get(function () {
  return `${this.name}  ${this.phone}`;
});

const Contact = model("contact", contactSchema);

module.exports = Contact;
