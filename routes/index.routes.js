import { Router } from "express";
import routeBooksGay from "./BooksGay.routes.js";
import authRouter from "./auth.routes.js"

const route = Router();

route.use('/BooksGay', routeBooksGay)
route.use('/auth', authRouter);

export default route;