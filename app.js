const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const userRoutes = require("./src/modules/users/user.routes");
const { dbConnection } = require("./src/config/db-connection");
const taskRoutes = require("./src/modules/tasks/task.routes");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.use(function (err, req, res, next) {
  console.log({ err });
  res

    .status(err.status || 500)
    .send({ status: err.status, message: err.message, data: {} });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});


