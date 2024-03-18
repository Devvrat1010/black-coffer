const data = require('../data.json');
const jsonData = require('../models/jsonData');
const client = require('../db');
const mongoose = require('mongoose');
const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        await collection.insertMany(data);
        console.log('Data inserted');
        res.send("Data inserted")
    } catch (err) {
        console.log(err);
    }
});