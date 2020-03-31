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
var currentPlate = "";

var combination =[

"rice, tomato, chicken",
"rice, tomato, bacon",
"rice, tomato, seafood",
"rice, cream, chicken",
"rice, cream, bacon",
"rice, cream, seafood",
"rice, garlic, chicken",
"rice, garlic, bacon",
"rice, garlic, seafood",

"pasta, tomato, chicken",
"pasta, tomato, bacon",
"pasta, tomato, seafood",
"pasta, cream, chicken",
"pasta, cream, bacon",
"pasta, cream, seafood",
"pasta, garlic, chicken",
"pasta, garlic, bacon",
"pasta, garlic, seafood",

"noodle, tomato, chicken",
"noodle, tomato, bacon",
"noodle, tomato, seafood",
"noodle, cream, chicken",
"noodle, cream, bacon",
"noodle, cream, seafood",
"noodle, garlic, chicken",
"noodle, garlic, bacon",
"noodle, garlic, seafood"
                        ];



var baseIngredients = ["rice","pasta","noodle"];
var sauceIngredients = ["tomato","cream","garlic"];
var meatIngredients = ["chicken","bacon","seafood"];
var topIngredients = ["cheese","shallots","spring onion"]
var recipe = [
// rice recipes
"Tomato Chicken Rice",
"Bacon ranch one pot chicken rice",
"Tomato, rice and seafood stew",

"Creamy Parmesan One pot chicken rice",
"Korean rice cake with bacon and cream sauce",
"Seafood baked rice",

"Burnt garlic chicken fried rice",
"Bacon Garlic fried rice",
"Thai garlic seafood fried rice",
// pasta recipes
"Tomato chicken pasta",
"Bacon pasta with tomato sauce",
"Seafood Linguini pasta",

"Chicken Alfredo",
"Carbonara",
"Creamy Shrimp Pasta",

"Garlic Chicken Pasta",
"Aglio Olio",
"Lemon garlic shrimp pasta",
// noodle recipes
"Tomato Noodles with fried egg",
"Bacon Sausage sun dried tomato angel hair pasta",
"Spicy tomato seafood noodle soup",

"Creamy chicken noodle soup",
"Char siew wanton noodle",
"Butter crab bee hoon",

"Stir fried garlic chicken noodle",
"Cantonese soy garlic pork fillet noodle",
"Grilled lobster garlic noodle"
];


var image = [
"https://cafedelites.com/wp-content/uploads/2016/09/One-Pan-Tomato-Basil-Chicken-Rice-cafedelites-16-1-500x500.jpg",
"https://thesaltymarshmallow.com/wp-content/uploads/2018/09/bacon-ranch-chicken-rice3.jpg",
"https://gbc-cdn-public-media.azureedge.net/img78094.768x512.jpg",

"https://thesaltymarshmallow.com/wp-content/uploads/2018/01/creamy-one-pot-chicken-and-rice3.jpg",
"https://marinaohkitchen.files.wordpress.com/2017/03/korean-rice-cake-with-bacon-cream-sauce.jpg",
"https://2.bp.blogspot.com/_Q5SpTKazer0/SnjC01akiRI/AAAAAAAAE9A/XvSN0Ou6S18/s400/seafood+bake+rice+3.JPG",

"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Monika_Manchanda/Burnt_Garlic_Chicken_Fried_Rice.jpg",
"https://www.foodiewithfamily.com/wp-content/uploads/2050/06/Bacon-Garlic-Rice-square-2.jpg",
"https://burpple-3.imgix.net/foods/1cf99a8c3d1c7181ffe1478344_original.?w=645&dpr=1&fit=crop&q=80&auto=format",

"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1516915682%2Ftomato-basil-and-chicken-pasta-ck-1803.jpg%3Fitok%3DtMcA1oAd",
"https://www.recipetineats.com/wp-content/uploads/2017/05/Bacon-Tomato-Pasta-3.jpg",
"https://rasamalaysia.com/wp-content/uploads/2016/10/one-pot-seafood-pasta-thumb.jpg",

"https://www.supergoldenbakes.com/wordpress/wp-content/uploads/2019/09/Chicken_Alfredo.jpg",
"https://www.recipetineats.com/wp-content/uploads/2016/12/Creamy-Chicken-Bacon-Pasta-landscape-2.jpg",
"https://natashaskitchen.com/wp-content/uploads/2017/05/Creamy-Shrimp-Alfredo-Pasta-600x900.jpg",

"https://emilybites.com/wp-content/uploads/2019/08/One-Pot-Creamy-Garlic-Chicken-Pasta-8b-620x892.jpg",
"https://www.sprinklesandsprouts.com/wp-content/uploads/2019/06/Easy-Garlic-Bacon-Pasta-SQ-500x375.jpg",
"https://www.spendwithpennies.com/wp-content/uploads/2019/08/Shrimp-Garlic-Pasta3-SpendWithPennies.jpg",

"https://chinasichuanfood.com/wp-content/uploads/2014/07/scramed-egg-tomato-noodles-9.jpg",
"https://www.smalltownwoman.com/wp-content/uploads/2017/04/Bacon-Sausage-Sun-Dried-Tomato-Angel-Hair-Pasta-2.jpg",
"https://chowhound1.cbsistatic.com/thumbnail/800/0/www.chowstatic.com/assets/models/image_uploads/images/23362/original/IMG_3797.jpg",

"https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/12/Creamy-Chicken-Noodle-Soup-6-680x1020.jpg",
"https://delishar.com/wp-content/uploads/2013/10/wanton-noodle--1080x1386.jpg",
"https://sethlui.com/wp-content/uploads/2016/03/Screen-Shot-2016-03-23-at-01.01.34-800x800.png",

"https://www.jessicagavin.com/wp-content/uploads/2016/02/asian-garlic-noodles-with-chicken-vegetables-1200.jpg",
"https://asianinspirations.com.au/wp-content/uploads/2018/07/R00315%20Cantonese%20Soy%20Garlic%20Pork%20Fillet%20and%20Mushrooms%20with%20Egg%20Noodles.jpg",
"https://s3-media2.fl.yelpcdn.com/bphoto/kFEJFBJUG_6oY8FzucIi2g/o.jpg" ];

var createButton = document.querySelector("#create-button");
var i;

// listener to activate when ingredient is typed
// var ingrtTyped = document.querySelector("#ingredient-selector").addEventListener("change",function(event){

//         //defines the text given by user as an ingredient
//         var ingredient = event.target.value;
//         console.log("selecting typed ingredient...");

//         // checks for the first step
//             if(stepsTaken === 0){
//                 // run the setSauce function to get the input
//                 output = checkBase(ingredient);

//                 if(output === true){
//                     setBase(ingredient);
//                     console.log("base is done");
//                     return
//                 }
//             }else if(stepsTaken === 1){
//                     // checks for the 2nd step

//                         // run the setSauce function to get the output
//                         output = checkSauce(ingredient);

//                         if(output === true){
//                             setSauce(ingredient);
//                             console.log("sauce is done");
//                             return
//                         }
//                     }
// console.log("output ingredient...failed")
// console.log(this);
// return this;

// })
// // checks if typed ingredient exists in the base array
// var checkBase = function(event){

//     // loop to check for baseIngredients
//     for(i = 0; i < baseIngredients.length; i++){
//         console.log(baseIngredients[i]);
//         console.log("checking ingredients...");

//         if(baseIngredients[i] === event){
//         console.log(baseIngredients[i]);
//         console.log("ingredient is true");
//         return true;
//         }
//     }
//     return false;
// }

// var checkSauce = function(event){

//     // loop to check for baseIngredients
//     for(i = 0; i < sauceIngredients.length; i++){
//         console.log(sauceIngredients[i]);
//         console.log("checking ingredients...");

//         if(sauceIngredients[i] === event){
//         console.log(sauceIngredients[i]);
//         console.log("ingredient is true");
//         return true;
//         }
//     }
//     return false;
// }
var output = document.getElementById("output");

var img = document.createElement("img");

var displayRecipe = function(combinationID){
    img.src = image[combinationID];
    console.log(recipe[combinationID]);
    console.log(img.src);
    output.innerHTML = recipe[combinationID];
    document.getElementById("picture-output").appendChild(img);
    img.style = "display: block;"
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
    currentPlate = (event.target.id);
    var plateBar = document.querySelector("#plate");
        plateBar.innerText = "plate contains : " +currentPlate;
        console.log(event.target.id);
        console.log("---------------------------------")
        console.log("plate contains : " + currentPlate);
        console.log("steps taken so far : " + stepsTaken);
    // selecting all the buttons in game1
    var baseButton = document.querySelectorAll(".game");
        console.log(baseButton);
    // modify the button to display hidden
        baseButton[0].style = "display: none;";
        baseButton[1].style = "display: none;";
        baseButton[2].style = "display: none;";

    var sauceButton = document.querySelectorAll(".sauce");
        console.log(sauceButton);
        sauceButton[0].style = "display: inline;";
        sauceButton[1].style = "display: inline;";
        sauceButton[2].style = "display: inline;";
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
    currentPlate += ", " + (event.target.id);
    var plateBar = document.querySelector("#plate");
    plateBar.innerText = "plate contains : " +currentPlate;
        console.log("---------------------------------")
        console.log("plate contains :" + currentPlate);
        console.log("steps taken so far : " + stepsTaken);
    var sauceButton = document.querySelectorAll(".sauce");
        console.log(sauceButton);
        sauceButton[0].style = "display: none;";
        sauceButton[1].style = "display: none;";
        sauceButton[2].style = "display: none;";

    var meatButton = document.querySelectorAll(".meat");
        console.log(meatButton);
        meatButton[0].style = "display: inline;";
        meatButton[1].style = "display: inline;";
        meatButton[2].style = "display: inline;";
}
// step 3
// choosing a meat
var setMeat = function(event){
    console.log("Meat is being set...");

    //update steps to +1
    stepincrement = 1;
    stepsTaken = stepsTaken + stepincrement;
    console.log("step increased");

    // add meat into the array
    currentPlate += ", " + (event.target.id);
    var plateBar = document.querySelector("#plate");
    plateBar.innerText = "plate contains : " +currentPlate;
        console.log("---------------------------------")
        console.log("plate contains :" + currentPlate);
        console.log("steps taken so far : " + stepsTaken);
    var meatButton = document.querySelectorAll(".meat");
        console.log(meatButton);
        meatButton[0].style = "display: none;";
        meatButton[1].style = "display: none;";
        meatButton[2].style = "display: none;";
}


var checkRecipe = function(event){
    // loop to check all ingredients in combinations
    for(var i = 0; i < combination.length; i++){

            if(currentPlate == combination[i]){
                console.log("Checking if plate equal to combination is true");
            console.log(i);
            displayRecipe(i);
            console.log("Displaying recipe...")
            return
            }

    }
    console.log("plate is false")
    return

}

var Button = document.querySelectorAll(".game");

    Button[0].addEventListener("click", setBase);
    console.log("Rice is listening...");
    Button[1].addEventListener("click", setBase);
    console.log("Pasta is listening...");
    Button[2].addEventListener("click", setBase);
    console.log("noodle is listening...");

    Button[3].addEventListener("click", setSauce);
    console.log("tomato is listening...");
    Button[4].addEventListener("click", setSauce);
    console.log("cream is listening...");
    Button[5].addEventListener("click", setSauce);
    console.log("garlic is listening...");

    Button[6].addEventListener("click", setMeat);
    console.log("chicken is listening...");
    Button[7].addEventListener("click", setMeat);
    console.log("bacon is listening...");
    Button[8].addEventListener("click", setMeat);
    console.log("seafood is listening...");

// create dish button


    createButton.addEventListener("click", checkRecipe);