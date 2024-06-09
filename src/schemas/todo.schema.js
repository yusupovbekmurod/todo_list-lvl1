import { Schema, model, Types } from "mongoose";
const TodoSchema = new Schema(
    {

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
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
