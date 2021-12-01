import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
const ObjectId = mongoose.Schema.Types.ObjectId;

interface User {
  userName: string;
  email: string;
  password: string;
  profileURL?: string;
  createdAt: number;
}
interface UserDocument extends User, Document {
  passwordCheck: (password: string) => Promise<boolean>;
}

const userSchema: Schema<UserDocument> = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 15,
  },
  profileURL: {
    type: String,
    default:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png",
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

userSchema.methods.passwordCheck = async function (
  this: User,
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (this: UserDocument, next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
