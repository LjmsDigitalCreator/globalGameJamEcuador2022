import Mechanical from "./Mechanical.js";
const Mechanicals = new Mechanical();
export default class FollowInstruccions{

    instructions;
    count;

    constructor(){
    }

    startGame(difficulty){
        this.instructions = Mechanicals.timerAndInstruccions(difficulty);
        console.log(this.instructions);
    }

    // stopGame(stoped){
    //     Mechanicals.startOrStopTimer(stoped);
    //     console.log(player.counter);
    // }

    // obtainCounter(){
    //     setInterval(()=>{
    //         this.count = Mechanicals.count;
    //         return this.count;
    //     }, 1000);
    // }

}