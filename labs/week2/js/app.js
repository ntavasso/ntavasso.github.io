class Ground {
    //constructor
    //set the starting color
    //start the drop hit count
    constructor() {
        //red
        this.color1 = 0;
        //green
        this.color2 = 0;
        //blue
        this.color3 = .05;
        //intitate counter
        this.counter = 0;
    }


    //update - draws the rectangle to the screen
    update() {

        //plug in our colors here
        fill(this.color1, this.color2, this.color3);

        // this.counter++;

        //draw our rectangle
        rect(0, 250, 400, 50);


    }


    //drop hit - called when a rain drop gets low enough (how do you inform it?)
    //change the color for every ten rain drops hit
    dropHit() {
        // color = [ 0, 100, 100  ];

        //Begin incrementing our counter
        this.counter++;

        //If counter is greater than or equal to ten...
        if (this.counter >= 10) {
            // alert("hello");

            //..it will increment blue...
            this.color3++;

            //...and reset counter back to zero
            this.counter = 0;



        }
    }
}

class Drop {
    constructor() {
        //randomized position of drop on x axis
        this.x = Math.random() * 400;
        //drop will start at the top of the y-axis
        this.y = 0;
    }

    //Updates the rain drop object
    update() {

        //increment position on the y axis
        this.y ++;

        //color of raindrop
        fill(0, 0, 200);

        //shape of rain drop
        circle(this.x, this.y, 5);

        //when rain drop gets to 200 on y axis it will call drophit method
        if(this.y >=250)
            ground.dropHit(this);
    }
}



// var hit = {
//     color =[0, 100, 100],
//     whenHit: function () {
//         this.color = [0, 100, 500];
//     }
// }

//instantiate new ground
var ground = new Ground();


class RainManager {
    constructor() {
        this.drops = [];
    }

    createDrop() {
        //make a new drop
        var newDrop = new Drop();

        //add this drop to our collection of drops
        this.drops.push(newDrop);
    }

    //Updates drops to be put into array
    update() {
        for (var i = 0; i < this.drops.length; i++) {
            this.drops[i].update();
        }
    }
}



//global variables
var rainManager = new RainManager();
// var ground = new Ground();


//Run once before the application starts
function setup() {
    createCanvas(400, 300);
    // bgColor(0,0,200);
}

//runs 60 times a second, or so
function draw() {

    //clear out background
    background(255);

    //create a new drop on a 5% chance
    if (Math.random() < .05) {
        rainManager.createDrop();
    }

    rainManager.update();
    ground.update();
    // ground.dropHit();
}
