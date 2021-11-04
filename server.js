const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(8080, () => console.log("server is listening to port 8080"));
