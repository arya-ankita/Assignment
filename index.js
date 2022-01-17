const express = require('express');
const app = express();
const authRouter = require('./routes/authRoute');

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log("Hello I am middleware");
    next();
})

// Routers
app.use('/a', authRouter);

module.exports = app;


