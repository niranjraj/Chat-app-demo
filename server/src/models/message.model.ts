import mongoose, { Schema, Document } from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const messageSchema: Schema = new Schema(
  {
    from: { type: ObjectId, ref: "User" },
    to: { type: ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: ObjectId, ref: "Chat" },
    readBy: [{ type: ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Message = mongoose.model("message", messageSchema);

export default Message;
