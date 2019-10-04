var grid = document.querySelector(".grid");

var i = 0;
//for loop will create up to 6 pics
for(i = 0; i < 6; i++) {

    //create the new pic div and customize it
    let pic = document.createElement("div");
    pic.classList.add("pic");
    pic.style.animationDelay = i*.3 + "s";
    
    //event handlers
    pic.addEventListener("mouseover", onPicOver);
    pic.addEventListener("mouseout", onPicOut);
    pic.addEventListener("click", onClick);
    
    //append elements to page
    grid.appendChild(pic);
    
}

//when mouseover occurs picOver div will display
function onPicOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("picOver");
  event.target.classList.remove("picOut");
}
//when mouseout occurs picOut div will display
function onPicOut(event) {
  event.target.classList.add("picOut");
  event.target.classList.remove("picOver");
}
//when click occurs onClick div will display
function onClick(event) {
    event.target.classList.remove("picOut");
    event.target.classList.remove("picOver");
    event.target.classList.add("onClick");
}


