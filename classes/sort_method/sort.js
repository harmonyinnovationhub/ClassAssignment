let toDo = [
    {
        title: "practice javascript",
        completed: true
    }, {
        title: "watch my zuri videos",
        completed: false
    }, {
        title: "do my scrimba frontend course",
        completed: false
    }, {
        title: "pray",
        completed: true
    }, {
        title: "call a friend",
        completed: true
    }

]

//using the sort method to sort the toDo array where uncompleted objects appear at the top
const sortTodo = function(toDo) {
    
    toDo.sort(function (a, b) {
        
      if (!a.completed && b.completed) {
    return -1
    }
    else if (!b.completed && a.completed) {
    return 1
    }
    else {
    return 0
    }  
    })
}

sortTodo(toDo);
console.log(toDo);