import Mechanical from "./Mechanical.js";
export default class FollowInstruccions extends Mechanical{

    instructions;

    constructor(){
        super();
    }

    startGame(stoped){
        this.instructions = this.timerAndInstruccions(stoped);
    }

    noName(){
        console.log(player.counter);
    }

}