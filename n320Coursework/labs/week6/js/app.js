var app = new Vue({
    el: "#app",
    data: {
        gameOver: false,
        playerTurn: 1,
        grid: [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]
    },
    methods: {
        selectCell: function (row, col) {

            //get the row to place the puck at
            var moveRow = this.lowestMove(col);

            if (moveRow >= 0) {
                //copy grid to a temporary var
                var tempGrid = this.grid.slice(0);

                //modify the cloned version
                tempGrid[moveRow][col] = this.playerTurn;

                //replace
                this.grid = tempGrid;

                //swap player turn
                this.playerTurn = (this.playerTurn == 1) ? 2 : 1;

                //check for win
                this.checkWin();
            }

        },
        checkWin: function () {
            var currentPuck = 0;
            var previousPuck = 0;
            var stack = 0;


            //for loop for horizontal row
            for (var row = 0; row <= 5; row++) {
                for (var col = 0; col <= 6; col++) {

                    //check for four in a row
                    currentPuck = this.grid[row][col];
                    //if the current puck matches the previous one, start a stack(horizontal)
                    if (currentPuck == previousPuck && currentPuck != 0) {
                        stack++;
                    } else {
                        stack = 0;
                    }
                    //if the current puck matches the previous one 3 times then the player wins
                    if (stack == 3) {

                        //game over occurs
                        this.gameOver = true;
                        this.player = currentPuck;
                    }
                    //set previous and current equal to each other, triggering the game over
                    previousPuck = currentPuck;
                }
            }

            //for loop for vertical row
            for (var col = 0; col <= 6; col++) {
                for (var row = 0; row <= 5; row++) {

                    //check for four in a row
                    currentPuck = this.grid[row][col];
                    //if the current puck matches the previous one, start a stack(vertical)
                    if (this.currentPuck = previousPuck && currentPuck != 0) {
                        stack++;
                    } else {
                        stack = 0;
                    }
                    //if the current puck matches the previous one 3 times then the player wins
                    if (stack == 3) {

                        //game over occurs
                        this.gameOver = true;
                        this.player = currentPuck;

                    }
                    //set previous and current equal to each other, triggering the game over
                    previousPuck = currentPuck;
                }

            }
        },
        lowestMove: function (col) {
            //start at the bottom of a col, loop upwards
            for (var row = 5; row >= 0; row--) {
                //check to see if current row is free
                if (this.grid[row][col] == 0) {
                    //if it is free, return the row index
                    return (row);
                }
            }
        }
    }
})