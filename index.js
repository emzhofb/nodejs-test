const express = require("express");
const customer = require("./routes/customer");
const data = require("./routes/data");
const app = express();

app.use("/api/v2/customer", customer);
app.use("/api/v2/data", data);

app.set("view engine", "ejs");
app.set("views", "./views");

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`listening on port ${port}....`));
