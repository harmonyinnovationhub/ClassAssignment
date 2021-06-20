let interns = [
    {
        name: "Mudia",
        stack: "javascript"
    }, {
        name: "Taofeek",
        stack: "javascript"
    }, {
        name: "Abdul",
        stack: "PHP"
    }, {
        name: "Nathaniel",
        stack: "Python"
    }, {
        name: "Isaiah",
        stack:"Python"
    }
]

//USING THE SPLICE METHOD TO DELETE "NATHANIEL" FROM THE ARRAY OF OBJECTS,"INTERNS"

    deleteIntern = function (interns, stack) {
    const index = interns.findIndex(function (intern) {
            return intern.name.toLowerCase() === stack.toLowerCase()
            })

        if (index > -1) {
        interns.splice(index,1)
    }
}

deleteIntern(interns, "Nathaniel");
console.log(interns);