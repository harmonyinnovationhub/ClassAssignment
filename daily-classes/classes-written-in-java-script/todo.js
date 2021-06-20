function todo() {
    let choice1, choice2;
  
    // function for adding task
    function addTask() {
        var task = [""]
        var taskAdd = prompt("add task");
        task.push(taskAdd);

        var con = prompt("do you want to add another task; yes or No");

        if(con == "yes") {
            addTask();
        } else {
            for(let i in task){
                console.log(task[i]);
            }
        }
        
    }

    // message that is asking of what you want to do
    var choice = prompt("Do you want to add task? Enter yes or no")
    choice1 = "yes";
    choice2 = "no";

    // condition on the choice made
    if (choice == choice1) {
        addTask();
    }else if(choice == choice2) {
        console.log("thank you for working with us");
        for(let i in task){
            console.log(task[i]);
        }
       
    }else {
        console.log("you have made an invalid choice");
    }

    // function choices(madeChoice) {
    //     if(madeChoice == choice1) {
    //         addTask();
    //     }else {
    //         console.log(task1);
    //         console.log(task2);
    //         console.log(task3);
    //         console.log(task4);
    //         console.log(task5);
    //         console.log(task6);
    //         console.log(task7);
    //         console.log(task8);
    //         console.log(task9);
    //         console.log(task10);
    //     }
    // }



}

todo();