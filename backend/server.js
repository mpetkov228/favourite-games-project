const app = require('./app');
const connectDb = require('./config/db');
require('dotenv').config();

connectDb();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});