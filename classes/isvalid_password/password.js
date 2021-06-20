//create a function that checks a password has 8 or more characters and does not include the string "password"
let isValidPassword = function (password) {
    return password.length >= 8 && !password.includes("password")
}

console.log(isValidPassword("gojhtlg455password"))