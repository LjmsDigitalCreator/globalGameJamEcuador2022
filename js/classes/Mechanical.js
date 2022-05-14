export default class Mechanical {

    #experience;

    constructor() {
        this.#experience = 0;
    }

    #difficulty() {
        if (this.#experience > 3) {
            return 8;
        } else {
            return 4;
        }
    }

    timerAndInstruccions() {
        this.#followInstructions();
        this.#counter();
    }

    #followInstructions() {
        let instructions = ['left', 'right'];

        for (let i = 1; i <= 5; i++) {
            let random = Math.floor(Math.random() * 2);
            return (instructions[random]);
        }

    }

    #counter() {
        let count = 0;
        let timer = setInterval(timeCounter, 1000);

        function timeCounter() {
            if (count == 10) {
                clearInterval(timer);
            } else {
                count++;
                console.log(`${timer}  & ${count}`);
            }
        }
    }

}

// const mecanicas = new Mechanical();

// mecanicas.timerAndInstruccions();