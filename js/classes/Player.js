// import Mechanical from './Mechanical.js'

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
        //detect pressed Key
        document.addEventListener("keydown", function (event) {
            // console.log(event.keyCode == 37 || event.keyCode == 39  ?  this.counter++  : 0);
            if (event.keyCode == 37) {
                console.log (1);
            } else if (event.keyCode == 39) {
                console.log (2);
            } else {
                console.log (0);
            }
        });
    }
    countButton() {
        this.#getPressedButton();
    }
}

const player = new Player('100', '3');

// const mecanicas = new Mechanical();
// mecanicas.timerAndInstruccions();


