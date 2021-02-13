class Mango {
    constructor(game) {
        this.game = game
        this.startingPos = {
            x: Math.floor(Math.random() * this.game.ctxWidth),
            y: 0
        }
        this.direction = {
            x: 0,
            y: 1.7
        }
        this.mango = new Image();
        this.mango.src = 'src/assets/images/mango.png'
        this.lostLife = this.lostLife.bind(this);
        this.updateLives = this.updateLives.bind(this);
    


    }

    draw(ctx) {
        ctx.drawImage(this.mango, this.startingPos.x, this.startingPos.y, 55, 55);
    }

    move(ctx) {
        this.draw(ctx)
        this.startingPos.x += this.direction.x;
        this.startingPos.y += this.direction.y;
        this.lostLife()
    }

    lostLife() {
        if ((this.startingPos.y > 372) && (this.startingPos.x > this.game.basket.startingPos.x && this.startingPos.x < this.game.basket.startingPos.x + this.game.basket.width)) {
            this.game.lives >= 3 ? this.game.lives : this.game.lives += 1
            this.startingPos.y = 0
            this.startingPos.x = Math.floor(Math.random() * this.game.ctxWidth)
            this.game.handleLives()
            if (document.getElementById("audio-btn").classList.contains('on')) {
                document.getElementById('yum-fx').play()
                
            }
        } else if (this.startingPos.y > 420) {
            this.startingPos.y = 0;
            this.startingPos.x = Math.floor(Math.random() * this.game.ctxWidth);
            this.fx = false
        }
    }

    updateLives() {

        document.getElementById("lives").innerText = `Lives: ${this.game.lives}`
    }


}

export default Mango;