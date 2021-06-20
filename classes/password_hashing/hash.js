//generate a password salt using the genSalt method that takes 12 rounds as a parameter, use the bcrypt package to hash the password. return the value of the salt and encrypted password.

const bcrypt = require("bcrypt");
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hash);
}

hashPassword("monkey");

