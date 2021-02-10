import Basket from './basket'
import Coconut from './coconut'
import Mango from './mango';
import Spider from './spider';

class Game {
    constructor(){
        
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext('2d');
        this.ctxHeight = this.canvas.height;
        this.ctxWidth = this.canvas.width;
        this.basket = new Basket(this);
        this.coconut = new Coconut(this);
        this.coconut2 = new Coconut(this);
        this.mango = new Mango(this)
        this.spider = new Spider(this)
        this.startGame = this.startGame.bind(this);
        this.draw = this.draw.bind(this);
        this.displayScore = this.displayScore.bind(this);
        this.handleLives = this.handleLives.bind(this);
        this.score = 0;
        this.lives = 3;
        this.isPlaying = false;

        
    }

   startGame(){
       this.basket
       this.coconut
       this.displayScore();
       this.loop = setInterval(this.draw, 10)
       this.isPlaying = true
   }

   draw(){
       if (this.lives > 0){
       this.ctx.clearRect(0, 0, 720, 425);
       this.spider.move(this.ctx)
       this.coconut.move(this.ctx);
       this.mango.move(this.ctx);
       this.basket.draw(this.ctx);
       } else {
           this.gameOver()
       }
   }

   displayScore(){
       document.getElementById("score").innerText = `Score: ${this.score}`
       this.handleLives()

   }

   gameOver(){
       this.handleLives()
       clearInterval(this.loop);
       this.ctx.clearRect(0, 0, 720, 425);
       this.isPlaying = false;
       this.score = 0;
       this.lives = 3;
       document.getElementById("game-start").style.display = "block"
       document.getElementById("game-start").innerText = `Game Over... Press Enter To Play Again`

   }

   handleLives(){
       this.lives === 3 ? document.getElementById("lives").innerHTML = `Lives: <p id="heart">&nbsp; &#9829; &#9829; &#9829;</p>` 
           : this.lives === 2 ? document.getElementById("lives").innerHTML = `Lives: <p id="heart">&nbsp; &#9829; &#9829; &nbsp;</p>`
               : this.lives === 1 ? document.getElementById("lives").innerHTML = `Lives: <p id="heart">&nbsp; &#9829; &nbsp; &nbsp;</p>` 
                   : document.getElementById("lives").innerHTML = `Lives: 0` 
   }
    
}


export default Game;

