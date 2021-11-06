const express = require("express");
const postRoute = require("./route/post");

require("./config")();

const app = express();

app.use("/api/v1/posts", postRoute);


app.listen(8080, () => console.log("server is listening to port 8080"));
