const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

async function register(req, res) {
    const { email, username, password } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    try {
        await User.create({ email, username, password: passwordHash });
        res.status(201).json({ message: 'user created' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: 'Incorrect email or password!' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ message: 'Incorrect email or password!' });
    }

    // jwt.sign({ useruser.username });

    return res.status(200).json({ message: 'login successful' });
}

module.exports = {
    register,
    login
};