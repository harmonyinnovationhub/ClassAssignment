function nextInteger() {

    var num = prompt("enter a number and i will tell you the integer next to it");
    var nextNum = num++;

    console.log(nextNum);
}

nextInteger();