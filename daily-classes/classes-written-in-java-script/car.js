function Car() {

  drive ();
  about ();
    

    function drive() {
        model = '2020 Toyota Camry'
        movement = `The car you will be driving is a ` + model;

        console.log(movement);


    }

    function about() {

        var dimensions = ['Wheelbase (in.): 111.2', 'Width, Max w/o mirrors (in.): 72.4'];
        var body = ['Body Style: Sedan'];
        var doorsAndWindows = ['Rear Defrost'];
        var engineAndPerformance = ['Front Wheel Drive', 'Engine Type: Regular Unleaded I-4', 'Horsepower (Net @ RPM): 203 @ 6600', 'Transmission: Automatic w/OD', '4 Cylinder Engine', 'Displacement: 2.5 L/152', 'Torque (Net @ RPM): 184 @ 5000', 'Turning diameter: 37.4'];
        
        console.log("which has the following Specification")
        // var colors=["red","blue","green"];
        console.log("###############################################################")
        console.log("DIMENSION");
        for (let i = 0; i < dimensions.length; i++) { 
          console.log(dimensions[i]);
        }

        console.log("#################################################################")
        console.log("BODY");
        for (let i = 0; i < body.length; i++) { 
            console.log(body[i]);
          }

        console.log("#################################################################")
        console.log("DOORS AND WINDOWS");
        for (let i = 0; i < doorsAndWindows.length; i++) { 
            console.log(doorsAndWindows[i]);
          }

        console.log("#################################################################")
        console.log("ENGINE AND PERFORMANCE");
        for (let i = 0; i < engineAndPerformance.length; i++) { 
            console.log(engineAndPerformance[i]);
          }



        

    }
}

Car();

