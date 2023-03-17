const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
app.use("/api", require( "./routes/taskRoute"));
app.use("/calc", require("./routes/calRoute"));
app.use("/todo", require("./routes/todoRoute"));
app.listen(port, () => console.log(`server started on ${port}`));
