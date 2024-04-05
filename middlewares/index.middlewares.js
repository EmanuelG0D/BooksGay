import { Router } from "express";
import { verifyToken } from "./token.middlewares.js";

const middleware = Router();

middleware.use("/BooksGay", verifyToken);

export default middleware;