const express = require("express");

const hostname = "0.0.0.0";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.end("hello world 🫡 siddarth jara gu khaa 🤣");
})

app.listen(port, hostname, () => {
    console.log("listening.....");
})
