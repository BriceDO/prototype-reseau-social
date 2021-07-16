const express = require('express');
require('dotenv').config();

// Permet une meilleure protection de l'app en définissant des headers HTTP liés à la sécurité 
const helmet = require("helmet");

const bodyParser = require('body-parser');
const path = require('path');

const userRoutes = require('./routes/user');
const articlesRoute = require('./routes/article');

const app = express();
app.use(helmet());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/articles', articlesRoute);

module.exports = app;