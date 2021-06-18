import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for Mongoose

/* schema for contact_list db*/
const ContactsSchema = new Schema(
  {
    Name: String,
    Number: String,
    Email: String
  },
  {
    collection: "contacts",
  }
);

const Model = mongoose.model("Contacts", ContactsSchema);
export default Model;
