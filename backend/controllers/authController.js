const User = require('../models/User');

async function register(req, res) {
    const { email, username, password } = req.body;

    try {
        await User.create({ email, username, password });
        res.status(201).json({ message: 'user created' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    register
};