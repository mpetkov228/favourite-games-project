const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

connectDb();
const app = express();

const users = [
    { id: 1, name: 'Name1' },
    { id: 2, name: 'Name2' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});