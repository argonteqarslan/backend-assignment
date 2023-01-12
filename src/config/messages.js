module.exports = {
    generalError: "Something went wrong.",
    invalidLogin: "Invalid email or password",
    InvalidToken: "Invalid token",
    created: (name) => {
        return `${name} has been created successfully!`;
    },
    signedIn: "You have been signed in successfully",
    updated: (name) => {
        return `${name} profile has been updated successfully!`;
    },
    closed: (name) => {
        return `${name} has been closed successfully!`;
    },
    dropped: (name) => {
        return `${name} has been dropped successfully!`;
    },
    updatedModel: (model) => {
        return `${model} has been updated successfully!`;
    },
    facebookSignIn: "You have been signed In successfully using Facebook",
    googleSignIn: "You have been signed In successfully using Google",
    userExists: "This user already exists!",
    userWithEmailExists: "An account with this email already exists!",
    invalidPayload: "Invalid payload",
    userNotFound: "Couldn't find your Account",
    success: "Success!",
    notFound: (model) => {
        return `${model} does not exist!`;
    },
    verified: "Phone number / Email verified successfully",
    notVerified: "Unable to verify phone number",
    invalidCode: "Invalid code",
    alreadyVerified: "Your Phone number / Email is already verified",
    resendCode: "verification code has been sent to you again",
    SocialSingInMessage: (provider) => {
        return `You have been signed In successfully using ${provider}`;
    },
    SocialSingUpMessage: (provider) => {
        return `You have been registered successfully using ${provider}`;
    },
    badRequest: "Bad request",
    notPresent: "Not present in the payload",
    notProvided: (key) => {
        return `Please provide ${key}`;
    },
    invalidFormat: (service) => {
        return `Invalid ${service} Format`;
    },
    invalidLength: "Invalid Length!",
    notEmpty: "This field could not be empty!",
    invalidDataType: () => {
        return `Please provide valid email`;
    },
    emailExists: "Email already exists!",
    phoneExists: "Phone Number already exists!",
    sessionExpiry: "Session has been expired!",
    statusAlreadyApplied: (Model, status) => {
        return `${Model} Already ${status}!`;
    },
    alreadyAssigned: "This Case is already been assigned to a lawyer",
    alreadyReport: "Already reported by you",
    notAssigned: "This Case is not assigned to you",
    proposalAlreadySent: (type) => {
        return `${type} on this case has already been sent`;
    },
    updateAttr: (attr) => {
        return `${attr} has been updated successfully!`;
    },
    codeExpried: "Your code has been expired!",
    invalidInvite: "Unable to verify this invite",
    invalidOffer: "Unable to verify this offer",
    invalidCase: "You do not have this case!",
    limitReached: "Your Offers limit for the day has been reached",
    lawyerNotFound: "Could not find the user lawyer",
    notBelongToLawFirm: "You donot belong to a law firm",
    alreadySentInvitation: "You have already sent invitation to this user",
    invalidEmailOrPassword: "invalid email or password",
    invalidFirmPayload: "Firm Name cannot be emty",
    invalidDisplayNamePayload: " Display Name cannot be emty",
    invalidId: "Invalid Id!",
    invalidQuery: (param) => {
        return `Query param ${param} cannot be empty`;
    },
    noConnections: "This user has no followers or followings!",
    invalidFollowRequest: "You cannot follow yourself!",
    followed: "Followed!",
    unFollowed: "Unfollowed!",
    removed: "Removed!",
    invalidUnFollowRequest: "You do not follow this person!",
    invalidRemoveUserRequest: "This person is not in your followings!",
    empty: (attr) => {
        return `${attr} cannot be empty`;
    },
    unFollowError: "You cannot unfollow yourself",
    removeUserError: "You cannot remove yourslef from the followers",
    alreadyClosedCase: "You have already closed this case",
    titleLength: "title should not be more than 80 characters",
    fcmToken: "the device is saved succesfully",
    notBelong: (attr) => {
        return `you do not have authorization to this ${attr}`;
    },
    invalidFileType: "invalid file type",
    deleteInvite: "This invite has been deleted",
    displayName: "Please provide display name",
    caseNotClosed: "you have'nt closed the case yet.",
    caseNotOffered: "This case is not offered to any lawyer",
    invalidPassword: "You have entered an invalid previous password",
    oldSamePassword: "you have entered same password as your previous password",
    confirmPasswordNotMatched: "confirm password does not match",
    codeVerified: "code verified successfully",
    selectTopic: "you must select at least one topic",
    topicLength: "you cannot select more than two topics",
    topicExists: "This topic already exists",
    forbidden: "Access denied. You do not have authorization.",
    unauthorized: "You are not authorized to perform this action",
    answerAlreadySubmitted:
        "You have already submitted an answer on this question",
    canNotAnswerYourOwnQuestion: "You can not answer your own question",
    alreadyExists: (model) => `${model} already exists`,
    repliesRestricted: (model) => `Replies on ${model} can not be liked`,
};
