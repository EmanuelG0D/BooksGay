import { getBooksGayModel, getBooksGayUniqueModel, postBooksGayModel, putBooksGayModel, deleteBooksGayModel } from "../models/BooksGay.model.js";

export const getBooksGay = async (req, res) => {
    let data = await getBooksGayModel();
    res.status(200).json({ msg: "Esto es get", data: data });
}

export const getBooksGayUnique = async (req, res) => {
    let { id } = req.params;
    let data = await getBooksGayUniqueModel(id);
    res.status(200).json({ msg: "Esto es get", data: data })
}

export const postBooksGay = async (req, res) => {
    let { title, author, price } = req.body;
    let data = await postBooksGayModel(title, author, price);
    res.status(200).json({ msg: "Esto es post", data: data })
}

export const putBooksGay = async (req, res) => {
    let { id } = req.params;
    let { title, author, price } = req.body;
    let data = await putBooksGayModel(id, title, author, price);
    res.status(200).json({ msg: "Esto es put", data: data })
}

export const deleteBooksGay = async (req, res) => {
    let { id } = req.params;
    let data = await deleteBooksGayModel(id);
    res.status(200).json({ msg: "Esto es delete", data: data })
}

export default {
    getBooksGay,
    getBooksGayUnique,
    postBooksGay,
    putBooksGay,
    deleteBooksGay
}