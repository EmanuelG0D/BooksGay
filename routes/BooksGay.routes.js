import { Router } from "express";
import booksGayController from "../controllers/BooksGay.controller.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { postBooksGayValidator } from "../validators/BooksGay.validator.js";

const routeBooksGay = Router();

routeBooksGay.get("/", booksGayController.getBooksGay);
routeBooksGay.get("/:id", booksGayController.getBooksGayUnique);
routeBooksGay.post("/", validate(postBooksGayValidator), booksGayController.postBooksGay);
routeBooksGay.put("/:id", booksGayController.putBooksGay);
routeBooksGay.delete("/:id", booksGayController.deleteBooksGay);

export default routeBooksGay;