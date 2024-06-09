import todoMod from "../schemas/todo.schema.js";
import { Types } from "mongoose";

class TodoMod {
    async select(id, filter, option) {
        try {
            if (id) return await todoMod.findById(id, option)
            return await todoMod.find(filter, option)
        } catch (error) {
            return error.message;
        }
    }
    async insert(body) {
        try {
            return await todoMod.create(body);
        } catch (error) {
            return error.message;
        }
    }
    async update(id, obj) {
        return await todoMod.findOneAndUpdate(id, obj);
    }
    async delete(id) {
        return await todoMod.deleteOne(
            { _id: new Types.ObjectId(id) },
            { close_at: Date.now() },
            { upsert: true }
        );
    }
}

export default new TodoMod();
