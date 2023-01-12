const express = require("express");
const { signUpPayloadValidation, signInPayloadValidation } = require("../users/user.validator");
const { requestValidator } = require("../../middlewares/validation.middleware");
const userRouter = express.Router();
const { auth } = require("./user.auth.controller")
const {verifyToken} = require("../../middlewares/verifyToken.middleware");

userRouter
  .post(
    "/auth/register",
    signUpPayloadValidation,
    requestValidator,
    auth.signUp
  )

userRouter
  .post(
    "/auth/login",
    signInPayloadValidation,
    requestValidator,
    auth.signIn
  )
  userRouter
  .get(
    "/",
    verifyToken,
    auth.getUsers
  )
  module.exports = userRouter;
