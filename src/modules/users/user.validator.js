const constants = require("../../config/constants");
const messages = require("../../config/messages");
const expressValidator = require("express-validator")
const { body, query, param } = expressValidator;

const { EMAIL_REGEX, PASSWORD_MIN_LENGTH } = constants;

let signUpPayloadValidation = [
    body("firstName")
        .notEmpty()
        .withMessage(messages.notEmpty)
        .isString()
        .withMessage(messages.invalidDataType("String"))
        .optional(true),
    body("lastName")
        .notEmpty()
        .withMessage(messages.notEmpty)
        .isString()
        .withMessage(messages.invalidDataType("String"))
        .optional(true),
    body("password")
        .notEmpty()
        .withMessage(messages.notEmpty)
        .isLength({ min: PASSWORD_MIN_LENGTH })
        .withMessage(messages.invalidLength)
        .isString()
        .withMessage(messages.invalidDataType("String")),
    body("email")
        .exists()
        .withMessage(messages.notPresent)
        .matches(EMAIL_REGEX)
        .withMessage(messages.invalidFormat("Email"))
        .isString()
        .withMessage(messages.invalidDataType("String"))
        .optional(),
];

let signInPayloadValidation = [
    body("email")
        .exists()
        .withMessage(messages.notPresent)
        .notEmpty()
        .withMessage(messages.notEmpty)
        .isString()
        .withMessage(messages.invalidDataType("String")),
    body("password")
        .notEmpty()
        .withMessage(messages.notEmpty)
        .isLength({ min: PASSWORD_MIN_LENGTH })
        .withMessage(messages.invalidLength)
        .isString()
        .withMessage(messages.invalidDataType("String")),
]

module.exports = {
    signUpPayloadValidation,
    signInPayloadValidation
}