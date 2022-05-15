export default class Player {
    score;
    lives;
    rightCounter;
    leftCounter;

    constructor() {
        this.score = 0;
        this.lives = 3;
        this.rightCounter = 0;
        this.leftCounter = 0;
        this.countButton();
    }

    #getPressedButton() {
        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 37) {
               let count = 0; 
               this.leftCounter =(this.leftCounter || 0 ) + count;
                console.log(this.leftCounter++);
            } else if (event.keyCode == 39) {
                let count = 0; 
                this.rightCounter =(this.rightCounter || 0 ) + count;
                 console.log(this.rightCounter++);
            } else {
                return (this.rightCounter + this.leftCounter);
            }
        });
        
    }
    countButton() {
        this.#getPressedButton();
        
    }
}
