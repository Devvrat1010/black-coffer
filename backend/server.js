require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", false);

const dbURI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

const jsonDataRoutes = require("./routes/saveJsonData");

app.use("/jsonData", jsonDataRoutes);

const start = async () => {
    try {
        await mongoose.connect(dbURI);
        app.listen(5000, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "server side error" });
    }
};

app.use("/", (req, res) => {
    res.send("Hello World");
});

start();
