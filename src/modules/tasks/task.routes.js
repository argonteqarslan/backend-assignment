const express = require("express");
const { verifyToken } = require("../../middlewares/verifyToken.middleware");
const { task } = require("./task.controller")
const taskRouter = express.Router();

taskRouter
  .post(
    "/create",
    verifyToken,
    task.create
  );

taskRouter
  .get(
    "/all",
    verifyToken,
    task.fetchAll
  );

taskRouter
  .delete(
    "/:id",
    verifyToken,
    task.deleteById
  );

module.exports = taskRouter;
