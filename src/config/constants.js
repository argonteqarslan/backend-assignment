module.exports = {
    USER_PRIVATE_FIELDS: [
        "password",
        "uId",
        "accessToken",
    ],
    USER_PUBLIC_FIELDS: [
        "firstName",
        "lastName",
        "username",
        "dob"
    ],
    PASSWORD_MIN_LENGTH: 8,
    EMAIL_REGEX:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
