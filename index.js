const express = require("express");

const hostname = "0.0.0.0";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.end("<h1>hello world 🫡 siddarth jara gu khaa 🤣 "</h1>);
})

app.listen(port, hostname, () => {
    console.log("listening.....");
})
