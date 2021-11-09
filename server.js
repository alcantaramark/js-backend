const express = require("express");

require("./config")();

const app = express();
app.use(express.json());

require("./route/members")(app);
app.listen(8080, () => console.log("server is listening to port 8080"));
