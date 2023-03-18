const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = 4000;
app.use(express.json());
app.use("/", require( "./routes/taskRoute"));
app.use("/calculator", require("./routes/calRoute"));
app.use("/todos", require("./routes/todoRoute"));
app.use("/user",require("./routes/userRoute"))
app.listen(port, () => console.log(`server started on ${port}`));
