console.log("Script started")

//Variable to track the number of clicks
let clicks = 0;
let clickValue = 1;

// Variable to store the click display h1 element
let clickDisplay = document.getElementById("click-display");

//variable to store the level display element 
let levelDisplay = document.getElementById("level-display");

// Set the initial text 
clickDisplay.innerText = "Clicks: " + clicks;

// Called when the potato is clicked 
function handleClick() {
    console.log("clickValue");


    //Count the click
    clicks = clicks + clickValue;

    //Update display with new value
    clickDisplay.innerText = "Clicks: " + clicks;

    //check if we're to another level
    if (clicks == 10) {
        alert("Congrants! You've reached level 2");
        levelDisplay.innerText = "Level 2";
        clickValue = 2;
    }
    else if (clicks ==50) {
        alert("Congrats! You've reached level 3");
        levelDisplay.innerText = "Level 3";
        clickValue = 5;
    }
        
}

