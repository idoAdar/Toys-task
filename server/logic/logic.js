const db = require('../utills/database');

exports.getAll = async (req, res, next) => {
    const query = `SELECT * FROM toys`;
    try {
        const [ results ] = await db.query(query);
        return res.status(200).json(results);
    } catch (error) {
        next(error);
    }
}

exports.moreThan = async (req, res, next) => {
    const limit = +req.params.limit;
    const query = `SELECT * FROM toys WHERE price > ?`;
    try {
        const [ results ] = await db.query(query, limit);
        return res.status(200).json(results);
    } catch (error) {
        next(error);
    }
}

exports.lessThan = async (req, res, next) => {
    const limit = +req.params.limit;
    const query = `SELECT * FROM toys WHERE price < ?`;
    try {
        const [ results ] = await db.query(query, limit);
        return res.status(200).json(results);
    } catch (error) {
        next(error);
    }
}

exports.getById = async (req, res, next) => {
    const id = +req.params.id;
    const query = `SELECT * FROM toys WHERE id = ?`;
    try {
        const [ results ] = await db.query(query, id);
        return res.status(200).json(results);
    } catch (error) {
        next(error);
    }
}