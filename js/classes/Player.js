const MechanicalModule  = require('./Mechanical')
const Mechanical = MechanicalModule.Mechanical();
class Player {
    score;
    lives;
    buttons;

    constructor(score, lives, buttons) {
        this.score = score;
        this.lives = lives;
        this.buttons = buttons;
    }

    #controllers(buttons) {
        console.log(`those are my buttons ${buttons}`)
    }

    getController() {
        this.#controllers(this.buttons)
    }
}

// const player = new Player('100', '3', );
const mecanicas = mechanical;

mecanicas.timerAndInstruccions();

// document.addEventListener("keyup", function (event) {
//     switch (event.keyCode) {
//         case 37:
//             console.log('Izquierda')
//             break;

//         case 39:
//             console.log('Derecha')
//             break;
//     }
// });