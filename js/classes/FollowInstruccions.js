const MechanicalModule = require("./Mechanical");
const PlayerModule = require("./Player");
const Mechanical = MechanicalModule.Mechanical;
const Player = PlayerModule.Player;

class FollowInstruccions extends Mechanical{

    instructions;

    constructor(){
        super();
    }

    startGame(stoped){
        this.instructions = this.timerAndInstruccions(stoped);
    }

    // noName(){
        
    // }

}

const follow = new FollowInstruccions();

follow.startGame();
setTimeout(()=>{
    follow.startOrStopTimer(true);
}, 10000)