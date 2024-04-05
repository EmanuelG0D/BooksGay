import pgService from "../services/pg.service.js";

// Función para obtener todos los productos
export const getBooksGayModel = async () => {
    const pg = new pgService();
    return await pg.connection.query(
        `SELECT * FROM PRODUCT`
    );
}

// Función para obtener un producto único por su ID
export const getBooksGayUniqueModel = async (id) => {
    try {
        const pg = new pgService();
        return await pg.connection.query(
            `SELECT * FROM PRODUCT WHERE ID_PRODUCT = $1`,
            [id]
        );
    } catch (error) {
        return 'Esto es un error';
    }
}

// Función para agregar un nuevo producto
export const postBooksGayModel = async (detail, name, value) => {
    const pg = new pgService();
    return await pg.connection.oneOrNone(
        `INSERT INTO PRODUCT (DETAIL, NAME, VALUE)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [detail, name, value]
    );
}

// Función para actualizar un producto existente
export const putBooksGayModel = async (id, detail, name, value) => {
    const pg = new pgService();
    return await pg.connection.query(
        `UPDATE PRODUCT
        SET DETAIL = $2,
            NAME = $3,
            VALUE = $4
        WHERE ID_PRODUCT = $1
        RETURNING *`,
        [id, detail, name, value]
    );
}

// Función para eliminar un producto
export const deleteBooksGayModel = async (id) => {
    const pg = new pgService();
    return await pg.connection.query(
        `DELETE FROM PRODUCT
        WHERE ID_PRODUCT = $1
        RETURNING *`,
        [id]
    );
}