const express = require('express');
const mongojs = require('mongojs');
const mongoose = require("mongoose");


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/htnl-routes.js"));
 

app.listen(5000, () => {
    console.log(`Listening on port ${PORT}`)
});

