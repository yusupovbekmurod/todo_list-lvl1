import { Schema, model, Types } from "mongoose";
const TodoSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    active: {
      type: String,
      required: true,
    },
    street_address: {
      type: String,
    },
    city: {
      type: String,
    },
    post_code: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "create_at",
      updatedAt: "update_at",
      deletedAt: "delete_at",
    },
  }
);

export default model("todo", TodoSchema);
