class Spider {
    constructor(game) {
        this.game = game
        this.startingPos = {
            x: Math.floor(Math.random() * this.game.ctxWidth),
            y: 0
        }
        this.direction = {
            x: 0,
            y: 2.4
        }
        this.spider = new Image();
        this.spider.src = 'src/assets/images/spider.png'
        this.lostLife = this.lostLife.bind(this);
        this.updateLives = this.updateLives.bind(this);



    }

    draw(ctx) {
        ctx.drawImage(this.spider, this.startingPos.x, this.startingPos.y, 45, 45);
    }

    move(ctx) {
        this.draw(ctx)
        this.startingPos.x += this.direction.x;
        this.startingPos.y += this.direction.y;
        this.lostLife()
    }

    lostLife() {
        if ((this.startingPos.y > 372) && (this.startingPos.x > this.game.basket.startingPos.x && this.startingPos.x < this.game.basket.startingPos.x + this.game.basket.width)) {
            this.game.lives -= 1
            this.startingPos.y = 0
            this.startingPos.x = Math.floor(Math.random() * this.game.ctxWidth)
            this.game.handleLives()
        } else if (this.startingPos.y > 420) {
            this.startingPos.y = 0;
            this.startingPos.x = Math.floor(Math.random() * this.game.ctxWidth);
        }
    }

    updateLives() {

        document.getElementById("lives").innerText = `Lives: ${this.game.lives}`
    }


}

export default Spider;