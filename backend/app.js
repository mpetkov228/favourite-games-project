const express = require('express');

const authRouter = require('./routes/auth');

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/users', (req, res) => {
    res.json('some users here');
});

module.exports = app;