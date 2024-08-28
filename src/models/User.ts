import mongoose, { Document, Model } from "mongoose";

interface IUser extends Document {
  mobile: string;
  email: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  mobile: {
    type: String,
    required: [true, "Please provide a title for this post."],
    maxlength: [60, "Title cannot be more than 60 characters"],
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
