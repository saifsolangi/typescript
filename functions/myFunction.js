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
// strictly bounding functions to return only one type of value like string, number or boolean
// here are we strictly saying return only number
function getValue(num) {
    return num;
}
var consoleError = function (errorMsg) {
    console.log(errorMsg);
};
