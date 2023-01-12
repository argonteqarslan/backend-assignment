const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const userRoutes = require("./src/modules/users/user.routes");
const { dbConnection } = require("./src/config/db-connection");
const taskRoutes = require("./src/modules/tasks/task.routes");
const cors = require("cors");

dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);
var whitelist = ['http://localhost:3005', 'http://localhost:8080']; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

app.use(cors(corsOptions)); //adding cors middleware to the express with above configurationsapp.use(express.json()) 

app.use(function (err, req, res, next) {
    console.log({ err });
    res
        .status(err.status || 500)
        .send({ status: err.status, message: err.message, data: {} });
});

app.use(
    express.raw({
        inflate: true,
        limit: '50mb',
        type: () => true,
    })
);
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
