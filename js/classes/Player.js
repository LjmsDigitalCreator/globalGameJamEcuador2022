export default class Player {
    score;
    lives;
    counter;

    constructor(score, lives) {
        this.score = score;
        this.lives = lives;
        this.counter = 0;
        this.countButton();
    }

    #getPressedButton() {
        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 37) {
                console.log(1);
            } else if (event.keyCode == 39) {
                console.log(2);
            } else {
                console.log(0);
            }
        });
    }

    countButton() {
        this.#getPressedButton();
    }
}