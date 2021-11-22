const express = require("express");
const port = process.env.port || 8080;

require("./config")();

const app = express();
app.use(express.json());

require("./route/members")(app);
app.listen(port, () => console.log(`server is listening to port ${port}`));
