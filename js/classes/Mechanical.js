export default class Mechanical {

    #experience;
    timer;
    count;

    constructor() {
        this.#experience = 0;
        this.count = 0;
    }

    #difficulty() {
        if (this.#experience > 3) {
            return 8;
        } else {
            return 4;
        }
    }

    timerAndInstruccions(difficulty) {
        let instructions = this.#followInstructions(difficulty);
        //this.startOrStopTimer(false);

        return instructions;
    }

    #followInstructions(difficulty) {
        let directions = [37, 39];
        let instructions = [];

        for (let i = 1; i <= difficulty; i++) {
            let random = Math.floor(Math.random() * 2);
            instructions.push(directions[random]);
        }

        return instructions;
    }

    startOrStopTimer(stoped) {
        if (stoped) {
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(this.#timeCounter, 1000);
            this.#timeCounter(stoped);
        }
    }

    #timeCounter(stoped) {
        let count = 0;
        if (this.count == 10 || stoped) {
            clearInterval(this.timer);
            this.count = 0;
        } else if (this.count == 10) {
            stoped = true;
            this.count = 0;
        } else {
            count++;
            this.count = (this.count || 0) + count;
        }
    }
}