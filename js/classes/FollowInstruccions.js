const MechanicalModule = require("./Mechanical");
const PlayerModule = require("./Player");
const Mechanical = MechanicalModule.Mechanical;
const Player = PlayerModule.Player;

// import Mechanical from "./Mechanical";
// import Player from "./Player";

const player = new Player();

class FollowInstruccions extends Mechanical{

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

const follow = new FollowInstruccions();

follow.startGame();
setTimeout(()=>{
    follow.startOrStopTimer(true);
}, 10000)