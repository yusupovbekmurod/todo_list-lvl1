import { Router } from "express";
import todo from "../controller/todo.controller.js";

const todoRouter = Router();

todoRouter
    .get("/", todo.get)
    .get("/:id", todo.get)
    .post("/", todo.post)
    .put("/:id", todo.put)
    .delete("/:id", todo.delete);

export default todoRouter;
