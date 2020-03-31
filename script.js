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
var meatIngredients = ["fish","chicken","shrimp"];
var topIngredients = ["cheese","shallots","spring onion"]


var i;

// listener to activate when ingredient is typed
var ingrtTyped = document.querySelector("#ingredient-selector").addEventListener("change",function(event){

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
var checkBase = function(event){

    // loop to check for baseIngredients
    for(i = 0; i < baseIngredients.length; i++){
        console.log(baseIngredients[i]);
        console.log("checking ingredients...");

        if(baseIngredients[i] === event){
        console.log(baseIngredients[i]);
        console.log("ingredient is true");
        return true;
        }
    }
    return false;
}

var checkSauce = function(event){

    // loop to check for baseIngredients
    for(i = 0; i < sauceIngredients.length; i++){
        console.log(sauceIngredients[i]);
        console.log("checking ingredients...");

        if(sauceIngredients[i] === event){
        console.log(sauceIngredients[i]);
        console.log("ingredient is true");
        return true;
        }
    }
    return false;
}

// function to set the ingredients on the plate
// step 1
// setting the base, rice noodle...
var setBase = function(event){
    console.log("base is being set...");
    //update steps to +1
    stepincrement = 1;
    stepsTaken = stepsTaken + stepincrement;
    console.log("step increased");
    //update plate with ingredient to event
    currentPlate.push(event.target.value);
        console.log("---------------------------------")
        console.log("plate contains : " + currentPlate);
        console.log("steps taken so far : " + stepsTaken);
}

// step 2
// setting the sauces
var setSauce = function(event){
    console.log("sauce is being set...");

    //update steps to +1
    stepincrement = 1;
    stepsTaken = stepsTaken + stepincrement;
    console.log("step increased");

    // add sauce into the array
    currentPlate.push(event);
        console.log("---------------------------------")
        console.log("plate contains :" + currentPlate);
        console.log("steps taken so far : " + stepsTaken);
}
// step 3
// choosing a meat
// var setMeat = function(event){
//     console.log("Meat is being set...");

//     //update steps to +1
//     stepincrement = 1;
//     stepsTaken = stepsTaken + stepincrement;
//     console.log("step increased");

//     // add meat into the array
//     currentPlate.push(event);
//         console.log("---------------------------------")
//         console.log("plate contains :" + currentPlate);
//         console.log("steps taken so far : " + stepsTaken);
// }
// // step 4
// // choose a topping
// var setTopping = function(event){
//     console.log("Topping is being set...");

//     //update steps to +1
//     stepincrement = 1;
//     stepsTaken = stepsTaken + stepincrement;
//     console.log("step increased");

//     // add topping into the array
//     currentPlate.push(event);
//         console.log("---------------------------------");
//         console.log("plate contains :" + currentPlate);
//         console.log("steps taken so far : " + stepsTaken);
// }

var startGame  = function(event){
    console.log("Game is starting...");
    document.getElementById("title").innerText = " ";
}

var playButton = document.querySelector("#play-button").addEventListener("click", startGame );

var titleScreen = document.getElementById("title");

var Button = document.querySelectorAll(".game");

    rice = Button[0];
    rice.addEventListener("click", setBase);
    console.log("Rice is listening...");

    Button[1].addEventListener("click", setBase);
    console.log("Pasta is listening...");

    Button[2].addEventListener("click", setBase);
    console.log("noodle is listening...");