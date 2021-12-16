const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { json } = require('express');

//import routes in index.js
const todoRoutes = require("./routes/todoRoutes")

const app = express();

const port = 5000;

app.use(cors());

app.use(json());

app.get('/', function(req, res) {
    res.send("Welcome to homepage");
});

//assign route to app and identify them with a particular path
app.use("/todos", todoRoutes);

//server listen port 5000
app.listen(port, function(){
    console.log(`Listening on http://localhost:${port}`);
})

const dbURI = 'mongodb+srv://al_dov:0203754879@cluster0.868ni.mongodb.net/proj-mng?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));