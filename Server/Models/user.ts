import mongoose, { PassportLocalSchema } from "mongoose";
const Schema = mongoose.Schema; // alias for Mongoose Schema
import passportLocalMongoose from 'passport-local-mongoose';

/* schema for contact_list db*/
const UserSchema = new Schema(
  {
    username: String,
    emailAddress: String,
    displayName: String,
    created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }
  },
  {
    collection: "users",
  }
);

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("Users", UserSchema as PassportLocalSchema);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        emailAddress: String,
        displayName: String
    }
}
export default Model;