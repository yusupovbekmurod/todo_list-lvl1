import todoList from "../models/todo.models.js";

class todoContr {
    async get(req, res) {
        try {
            const id = req.params?.id;
            let data;
            if (id) data = await todoList.select(id);
            else if (Object.keys(req.query).length)
                data = await todoList.select(null, req.query);
            else data = await todoList.select();
            return res.send({
                status: 200,
                data,
                message: "todoList",
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
    async post(req, res) {
        try {
            let { title, description } = req.body;


            res.send({
                status: 201,
                data: await todoList.insert({
                    title: title,
                    description: description

                }),
                message: "success",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                data: null,
                message: error.message,
            });
        }
    }
    async put(req, res) {
        try {
            const id = req.params?.id;
            let data;
            if (id) data = await todoList.select(id);
            let { title, description } = req.body;
            const obj = {
                $set: {
                    title: title ? title : data.title,
                    description: description ? description : data.description,
                },
            };
            return res.send({
                status: 201,
                data: await todoList.update({ _id: id }, obj),
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
    async delete(req, res) {
        try {
            const id = req.params?.id;
            return res.send({
                status: 201,
                data: await todoList.delete(id),
                message: "success",
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
}

export default new todoContr();
