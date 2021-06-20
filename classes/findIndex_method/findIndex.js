const notes = [ {}, {
    title: "My next trip",
    body: "I would loke to go to Spain"
},
    {
    title: "Habits to work on",
    body : "Exercise, eating a bit better"
    },
    {
        title: "Workspace modification",
        body:"Get a new seat"
    }]

    //Access the object title in the notes array with the findIndex function and using the dot notation to access the title property. The returned result is the index position of the searched title if found or  -1 if not found in the array of objects.

    const index = notes.findIndex(function(note, index){
        return note.title==="Habits to work on"
    })
   //console.log (notes.indexOf({}))
    console.log(index);