const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require("./config/database");

// Connect to db via url
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database'+config.database);
})

mongoose.connection.on('error', (err) => {
    console.log('DATABASE CONNECT ERROR:' + err);
})

const app = express();
// Routes for the /users endpoint
const users = require("./routes/users");
const port = 9244;

app.use(cors());

// Static folder for the client side ng app
app.use(express.static(path.join(__dirname, 'src')));

app.use(bodyParser.json());
app.use("/users", users);
app.get('/', (req,res) =>{
    res.send("Invalid Endpoint");
});
app.listen(port, () => {
    console.log("App running");
});