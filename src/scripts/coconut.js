class Coconut {
    constructor(game) {
        this.game = game
        this.startingPos = {
            x: Math.floor(Math.random() * this.game.ctxWidth),
            y: 0
        }
        this.direction = {
            x: 0,
            y: 2.2
        }
        this.coconut = new Image();
        this.coconut.src = 'src/assets/images/coconut.png'
        this.lostLife = this.lostLife.bind(this);
        this.updateLives = this.updateLives.bind(this);
        this.updateScore = this.updateScore.bind(this);

        
    }

    draw(ctx) {
        ctx.drawImage(this.coconut, this.startingPos.x, this.startingPos.y, 40, 40);
    }

    move(ctx){
        this.draw(ctx)
        this.startingPos.x += this.direction.x;
        this.startingPos.y += this.direction.y; 
        this.lostLife()
    }

    lostLife(){
        if ((this.startingPos.y > 372) && (this.startingPos.x > this.game.basket.startingPos.x && this.startingPos.x < this.game.basket.startingPos.x + this.game.basket.width)){
            this.game.score += 10
            this.startingPos.y = 0
            this.startingPos.x = Math.floor(Math.random() * this.game.ctxWidth)
            this.updateScore()
        }else if (this.startingPos.y > 420){
            this.game.lives -= 1;
            this.startingPos.y = 0;
            this.startingPos.x = Math.floor(Math.random() * this.game.ctxWidth);
            this.game.handleLives();
        }
    }

    updateLives(){

        document.getElementById("lives").innerText = `Lives: ${this.game.lives}`
    }

    updateScore() {

        document.getElementById("score").innerText = `Score: ${this.game.score}`
    }

   
}

export default Coconut;