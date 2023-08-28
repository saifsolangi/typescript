function addTwo(num) {
    return num + 2;
}
function getUpper(name) {
    return name.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return name;
    email;
    isPaid;
}
signUpUser("saif", "saif@gmail.com", false);
// passing default parametre in function
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("saify", "saify@gmail.com");
