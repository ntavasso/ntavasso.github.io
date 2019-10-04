//Observer Pattern

class motherDuck {
    constructor() {
        this.babyDucks = [];
    }

    addDuck(duck) {
        this.babyDucks.push(duck);
    }

    quack() {
        this.babyDucks.forEach(function(duck) {
            duck.follow();
        })
    }

    
}

class babyDuck {
      follow(){
          console.log("another duck");
      }  
}

var motherDuck = new motherDuck();
motherDuck.addDuck(new babyDuck());
motherDuck.addDuck(new babyDuck());
motherDuck.quack();