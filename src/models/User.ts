import mongoose, { Document, Model } from "mongoose";

interface IUser extends Document {
  mobile: string;
  email: string;
  step: number;
  loanType: string;
  amount: string;
  city: string;
  duration: string;
  employmentType: string;
  bankAccount: string;
  gender: string;
  fullName: string;
  dob: string;
  pinCode: string;
  panCard: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  mobile: {
    type: String,
    required: [true, "Please provide a mobile for this user."],
    maxlength: [10, "Mobile cannot be more than 10 characters"],
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  step: {
    type: Number,
    required: false,
  },
  loanType: {
    type: String,
    required: false,
  },
  amount: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: false,
  },
  employmentType: {
    type: String,
    required: false,
  },
  bankAccount: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  fullName: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  pinCode: {
    type: String,
    required: false,
  },
  panCard: {
    type: String,
    required: false,
  },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
