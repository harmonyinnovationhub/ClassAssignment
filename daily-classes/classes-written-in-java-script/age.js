
function ageToDays(){
    let age, daysInYear, ageInDays;


    date = new Date()

    currentYear = date.
    birthYear= prompt("input birth year")
    age = currentYear - birthYear;
    daysInYear= 365;
    ageInDays = daysInYear * age;

    console.log(currentYear)
    console.log(age)
    console.log("you have lived " + ageInDays + " days");
}

ageToDays();


