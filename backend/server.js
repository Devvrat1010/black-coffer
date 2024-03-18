const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose.set("strictQuery", false);

const dbURI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

const start = async (req, res) => {
    try {
        await mongoose.connect(dbURI);
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
        res.status(200).json({ message: "server started" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message : "server side error" });
    }
};

app.use("/", (req, res) => {
    res.send("Hello World");
});

start();
