//GRADE CALCULATOR
let result = function (studentScore, totalScore) {
    let results = (studentScore / totalScore) * 100
    return results
    
}

 results = result(15, 20)
console.log(results)

if (results >= 90 && results <= 100) {
    console.log("you got an A")
} else if (results >= 80 && results <= 89) {
    console.log("you got a B")
} else {
    console.log("you got a C")
}