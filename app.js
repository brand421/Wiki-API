require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ejs = require("ejs");
const bodyParser = require("body-parser");
const url = 'mongodb://0.0.0.0:27017';

const app = express();
mongoose.connect(url, { useNewUrlParser: true });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

const dbName = wikiDB;

const client = new MongoClient(url);
