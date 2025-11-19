const express = require('express');
const authRouter = require('./routes/auth');

const app = express();

const users = [
    { id: 1, name: 'Name1' },
    { id: 2, name: 'Name2' }
];

app.use('/api/auth', authRouter);

app.get('/users', (req, res) => {
    res.json(users);
});

module.exports = app;