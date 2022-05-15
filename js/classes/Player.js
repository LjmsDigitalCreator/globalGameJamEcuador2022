// import Mechanical from './Mechanical.js'

export default class Player {
    score;
    lives;
    counter;

    constructor() {
        this.score = 0;
        this.lives = 3;
        this.counter = 0;
        this.countButton();
    }

    #getPressedButton() {
        //detect pressed Key
        document.addEventListener("keydown", function (event) {
             
            if (event.keyCode == 37) {
               let count = 0; 
               this.counter =(this.counter || 0 ) + count;
                console.log(this.counter++);

                
               
            } else if (event.keyCode == 39) {
                let count = 0; 
                this.counter =(this.counter || 0 ) + count;
                 console.log(this.counter++);
  
            } else {

                return this.counter;
               
            }
           
            

        });
        
    }
    
    countButton() {
        this.#getPressedButton();
        
    }

    
}

const player = new Player('100', '3',1);





// const mecanicas = new Mechanical();
// mecanicas.timerAndInstruccions();


