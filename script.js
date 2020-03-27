console.log("Javascript is cooking!");



                    // global variables to be created

                    // steps taken
                    // whats on the plate
                    // winning recipe


                    // elements

                    // buttons to select input


                    // elements to be created through AJAX

                    // display images of ingredients
                    // process/loading screen between each step


// To check the winning array
var resultedRecipe
// To count the number of steps
var stepsTaken = 0;
// An array that tracks the ingredients
var currentPlate = [];

var combination =[ ["noodle","chili"], ["pasta", "cream"] ];
var recipe = ["spicynoodle", "carbonara"];


var baseIngredients = ["rice", "pasta", "noodle"];
var sauceIngredients = ["tomato", "cream", "chili"];


var i;

// listener to activate when ingredient is typed
var ingrtTyped = document.querySelector("#ingredient-selector").addEventListener("change",function(event){


        // var setPlate = function(ingrtTyped){
        //     console.log("plate is being set...");

        //     // checks for the first step

        //     console.log("Checking the food on the plate...");
        // }



        //defines the text given by user as an ingredient
        var ingredient = event.target.value;
        console.log("selecting typed ingredient...");

        // checks for the first step
            if(stepsTaken === 0){
                // run the setSauce function to get the input
                output = checkBase(ingredient);

                if(output === true){
                    setBase(ingredient);
                    console.log("base is done");
                    return
                }
            }else if(stepsTaken === 1){
                    // checks for the 2nd step

                        // run the setSauce function to get the output
                        output = checkSauce(ingredient);

                        if(output === true){
                            setSauce(ingredient);
                            console.log("sauce is done");
                            return
                        }
                    }
console.log("output ingredient...failed")
console.log(this);
return this;

})
// checks if typed ingredient exists in the base array
var checkBase = function(ingrtTyped){

    // loop to check for baseIngredients
    for(i = 0; i < baseIngredients.length; i++){
        console.log(baseIngredients[i]);
        console.log("checking ingredients...");

        if(baseIngredients[i] === ingrtTyped){
        console.log(baseIngredients[i]);
        console.log("ingredient is true");
        return true;
        }
    }
    return false;
}

var checkSauce = function(ingrtTyped){

    // loop to check for baseIngredients
    for(i = 0; i < sauceIngredients.length; i++){
        console.log(sauceIngredients[i]);
        console.log("checking ingredients...");

        if(sauceIngredients[i] === ingrtTyped){
        console.log(sauceIngredients[i]);
        console.log("ingredient is true");
        return true;
        }
    }
    return false;
}

//functions that runs on each set
// this function runs on the first step
var setBase = function(ingrtTyped){
    console.log("base is being set...");
    //update steps to +1
    stepincrement = 1;
    stepsTaken = stepsTaken + stepincrement;
    console.log("step increased");

    //update plate with ingredient to ingrtTyped
    currentPlate.push(ingrtTyped);
        console.log("---------------------------------")
        console.log("plate contains : " + currentPlate);
        console.log("steps taken so far : " + stepsTaken);
}

// this function runs on the second step
var setSauce = function(ingrtTyped){
    console.log("sauce is being set...");

    //update steps to +1
    stepincrement = 1;
    stepsTaken = stepsTaken + stepincrement;
    console.log("step increased");

    // add sauce into the array
    currentPlate.push(ingrtTyped);
        console.log("---------------------------------")
        console.log("plate contains :" + currentPlate);
        console.log("steps taken so far : " + stepsTaken);
}