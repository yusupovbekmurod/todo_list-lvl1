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
      let {
        user_id,
        name,
        price,
        active,
        street_address,
        city,
        post_code,
        country,
      } = req.body;

      res.send({
        status: 201,
        data: await todoList.insert({
          user_id: user_id,
          name: name,
          price: price,
          active: active,
          street_address: street_address,
          city: city,
          post_code: post_code,
          country: country,
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
      let {
        user_id,
        name,
        price,
        active,
        street_address,
        city,
        post_code,
        country,
      } = req.body;

      const obj = {
        $set: {
          user_id: user_id ? user_id : data.user_id,
          name: name ? name : data.name,
          price: price ? price : data.price,
          active: active ? active : data.active,
          street_address: street_address ? street_address : data.street_address,
          city: city ? city : data.city,
          post_code: post_code ? post_code : data.post_code,
          country: country ? country : data.country,
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
