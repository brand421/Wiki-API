const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://0.0.0.0:27017';

const dbName = wikiDB;

const client = new MongoClient(url);
