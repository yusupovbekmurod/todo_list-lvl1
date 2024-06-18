import express from "express";
import cors from "cors";
import "./db/mongodb.js";
import todoRouter from "./routers/todo.router.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/todo", todoRouter);


app.listen(PORT);
console.log("server listening " + PORT);