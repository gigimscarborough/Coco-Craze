class Basket{
    constructor(game){
        this.game = game
        this.width = 140
        this.height = 65
        this.startingPos = {
            x: (game.ctxWidth - this.width) / 2,
            y: game.ctxHeight - this.height
        }
        this.basket = new Image();
        this.basket.src = 'src/assets/images/basket.png'

        
        document.addEventListener("mousemove", event => {
            let movement = event.clientX - game.canvas.offsetLeft;
            if (movement > 0 && movement < game.ctxWidth) {
                this.startingPos.x = movement - this.width / 2;
            }
        });
       
    }

    draw(ctx){
        if(this.game.isPlaying){

            ctx.drawImage(this.basket, this.startingPos.x, this.startingPos.y, this.width, this.height);
        }
    }


}

export default Basket;