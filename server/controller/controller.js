const express = require('express');
const logic = require('../logic/logic');

const route = express.Router();

// URL: http://localhost:5000/toys
// DESC: Fetch All Toys
// Method: GET
route.get('/', logic.getAll);

// URL: http://localhost:5000/toys/more-then
// DESC: Fetch Bigger Than
// Method: GET
route.get('/more-then/:limit', logic.moreThan);

// URL: http://localhost:5000/toys/less-then
// DESC: Fetch Less Than
// Method: GET
route.get('/less-then/:limit', logic.lessThan);

// URL: http://localhost:5000/toys/get-one/:id
// DESC: Fetch By Id
// Method: GET
route.get('/get-one/:id', logic.getById);

module.exports = route;