const app = require('./app');
const connectDb = require('./config/db');
require('dotenv').config();

connectDb();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});