var soundButtons = document.getElementById("soundButtons");


var sounds = [
    "chimes_long.mp3", "click_clock_loop.mp3", "pop_10.mp3", "puff.mp3", "rustle_5.mp3"
];

var soundElements = [];

//loop through all sounds and create audio tags
sounds.forEach((soundURL, idx) => {
    
    //sound names
    var soundNames = ["chimes", "click", "pop", "puff", "rustle"];

    //sound 
    var newSound = new Audio("sounds/" + soundURL);

    //store each sound in array for reference
    soundElements.push(newSound);

    //create the button to play sound
    var newButton = document.createElement("button");
    newButton.innerHTML = soundNames ;

    //store the sounds index
    newButton.setAttribute("data-sound-id", idx);

    //add it to page
    soundButtons.appendChild(newButton);

    //listen for click on button and invoke play sound function
    newButton.addEventListener("click", playSoundInArray);
})

function playSoundInArray(event) {
    //get sound index
    var soundIndex = Number(event.target.getAttribute("data-sound-id"));

    //get sound from array
    var selectedSound = soundElements[soundIndex];

    //play sound
    selectedSound.play();

}


//get the audio tag
// var myAudio = document.getElementById("myAudio");


// function playAudio() {
//     myAudio.play();

// }

// function stopMainAudio() {
//     myAudio.pause();
//     myAudio.currentTime = 0;
// }

