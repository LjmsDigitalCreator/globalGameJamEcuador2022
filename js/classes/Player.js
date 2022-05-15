export default class Player {
    score;
    lives;
    rightCounter;
    leftCounter;
    right;
    left;

    constructor() {
        this.score = 0;
        this.lives = 3;
        this.rightCounter = 0;
        this.leftCounter = 0;
        this.right = 0;
        this.left = 0;
    }

    getPressedButton(callback) {
        document.addEventListener("keydown", function (event) {
            let count = 0;
            if (event.keyCode == 37) {
                this.right = 0;
                this.left = 37;
                this.leftCounter =(this.leftCounter || 0 ) + count;
                console.log(this.leftCounter);
                callback;
            } else if (event.keyCode == 39) {
                this.right = 39;
                this.left = 0;
                this.rightCounter =(this.rightCounter || 0 ) + count;
                console.log(this.rightCounter);
                callback;
            } else {
                return (this.rightCounter + this.leftCounter);
            }
        });
    }

    destroyPressedButton() {
        document.removeEventListener("keydown", function (event) {});
    }

    verifyLeftRight(instruccion){
        if((this.left == 37 && this.right == 0) && (this.left == instruccion)){
            return true;
        }else if((this.left == 0 && this.right == 39) && (this.right == instruccion)){
            return true;
        }else{
            return false;
        }
    }
}
