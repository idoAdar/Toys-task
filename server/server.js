const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const controller = require('./controller/controller');

const app = express();
app.use(cors({ extended: false }));

app.use('/toys', controller);

// Error Middleware:
app.use((error, req, res, next) => {
    throw new Error(`Error ${error.code || 500}: ${error.message || 'An unknown error occurred'}`);
})

app.listen(port, () => console.log(`Server started on port ${port}`));