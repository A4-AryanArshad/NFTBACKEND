const connectToMongo = require('../db');
const express = require('express');
const cors = require('cors');
const serverless=require("serverless-http");

connectToMongo();

const app = express();


app.use(cors());
app.use(express.json());

// Add this route to respond in the browser
app.get('/', (req, res) => {
    res.send('Hello Server Listening');
});

// Existing routes
app.use('/api/auth', require('../routes/auth'));
app.use('/api/nft', require('../routes/nft'));
app.use('/api/cart', require('../routes/cart'));
app.use('/api/chat', require('../routes/chat'));

module.exports=app;
module.exports.handler=serverless(app);
