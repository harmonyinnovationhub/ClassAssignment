const mystery = function makeMystery() {
    const rand = Math.random();
    if (rand > 0.5) {
        return  () => {
            console.log("Congratulations!Ask any mystery and you will find answers here");s
        }
    } else {
        return () => {
            console.log("Sorry,better luck next time");
        }
    }
}
 console.log(mystery());