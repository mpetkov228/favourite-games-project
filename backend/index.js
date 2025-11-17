const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const users = [
    { id: 1, name: 'Name1' },
    { id: 2, name: 'Name2' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

const PORT = 3000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to db');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    })
    .catch(err => {
        console.log(err);
    });

