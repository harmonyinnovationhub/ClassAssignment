function authentication() {
    let username, password;

    username = prompt("please a username of your choice");
    password = prompt("please enter a password of your choice");

    login();

    function login() {
        console.log("Welcome to the login page");

        usernameInput = prompt("please enter your username");
        passwordInput = prompt("please input  your password");

        if (usernameInput == username) {
            passwordInput = prompt("please input  your password");

            if (passwordInput == password) {
                console.log("Login Success!!!!")
            } else{
                console.log("you have entered a wrong password")
                login();
            }
        }else {
            console.log("you entered an invalid password ");
        }
    }

} 

authentication();