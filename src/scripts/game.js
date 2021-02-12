import Basket from './basket'
import Coconut from './coconut'
import Mango from './mango';
import Spider from './spider';

class Game {
    constructor() {

        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext('2d');
        this.ctxHeight = this.canvas.height;
        this.ctxWidth = this.canvas.width;
        this.basket = new Basket(this);
        this.coconut = new Coconut(this);
        this.coconut2 = new Coconut(this);
        this.mango = new Mango(this)
        this.spider = new Spider(this)
        this.spider2 = new Spider(this)
        this.spider3 = new Spider(this)
        this.spider4 = new Spider(this)
        this.startGame = this.startGame.bind(this);
        this.levelOne = this.levelOne.bind(this);
        this.levelTwo = this.levelTwo.bind(this);
        this.levelThree = this.levelThree.bind(this);
        this.displayScore = this.displayScore.bind(this);
        this.handleLives = this.handleLives.bind(this);
        this.score = 0;
        this.lives = 3;
        this.isPlaying = false;
        this.track = document.getElementById("audio")
        this.audioBtn = document.getElementById("audio-btn")
        this.timeOut1
        this.timeOut2
        this.timeOut3
        this.timeOut4
        this.timeOut5
        this.timeOuts = [this.timeOut1, this.timeOut2, this.timeOut3, this.timeOut4, this.timeOut5]
        this.level = 1
        this.lost = false
    }

    startGame() {
        if (this.stopId){
            window.cancelAnimationFrame(this.stopId)
            this.ctx.clearRect(0, 0, 720, 425);
        }
        document.getElementById("level-change").innerHTML = `Level One`
        document.getElementById('level-bg').src = "src/assets/images/level1.jpg"
        this.displayScore();
        this.isPlaying = true
        //    this.loop = setInterval(this.draw, 10)
        document.getElementById('level-bg').classList.add("fade-stop")
        document.getElementById('level-bg').classList.remove("fade-out")
        document.getElementById('level-bg').style.display = "none"
        // document.getElementById("level-change").innerHTML = `Level One`
        document.getElementById("level-change").style.display = "block"
        // this.timeOut1 = setTimeout(() => {
        //     // document.getElementById("level-change").style.display = "none"
        //     // document.getElementById('level-bg').src = "src/assets/images/level1.jpg"
        //     document.getElementById('level-bg').style.display = "block"
        //     this.timeOut2 = setTimeout(() => {
        //         window.requestAnimationFrame(this.levelOne)
        //         this.timeOut3 = setTimeout(() => {
        //             window.cancelAnimationFrame(this.stopId)
        //             this.ctx.clearRect(0, 0, 720, 425);
        //             // *document.getElementById('level-bg').classList.remove("fade-stop")
        //             //* document.getElementById('level-bg').classList.add("fade-out")
        //             if (this.isPlaying) {
        //                 // document.getElementById("level-change").innerHTML = `Level Two`
        //                 // document.getElementById("level-change").style.display = "block"
        //                 this.timeOut4 = setTimeout(() => {
        //                     // document.getElementById('level-bg').src = "src/assets/images/level2.jpg"
        //                     // *document.getElementById('level-bg').style.display = "none"
        //                     // *document.getElementById('level-bg').classList.add("fade-stop")
        //                     // *document.getElementById('level-bg').classList.remove("fade-out")
        //                     this.timeOut5 = setTimeout(() => {
        //                         // document.getElementById("level-change").style.display = "none"
        //                         // document.getElementById('level-bg').style.display = "block"
        //                         this.timeOut6 =setTimeout(() => {
        //                             window.requestAnimationFrame(this.levelTwo)
        //                             this.timeOut7 = setTimeout(() => {
        //                                 window.cancelAnimationFrame(this.stopId)
        //                                 this.ctx.clearRect(0, 0, 720, 425);
        //                                 // *document.getElementById('level-bg').classList.remove("fade-stop")
        //                                 // *document.getElementById('level-bg').classList.add("fade-out")
        //                                 if (this.isPlaying) {
        //                                     // document.getElementById("level-change").innerHTML = `Level Three`
        //                                     // document.getElementById("level-change").style.display = "block"
        //                                     this.timeOut8 = setTimeout(() => {
        //                                         // document.getElementById('level-bg').src = "src/assets/images/level3.jpg"
        //                                         // *document.getElementById('level-bg').style.display = "none"
        //                                         // *document.getElementById('level-bg').classList.add("fade-stop")
        //                                         // *document.getElementById('level-bg').classList.remove("fade-out")
        //                                         this.timeOut9 = setTimeout(() => {
        //                                             // document.getElementById("level-change").style.display = "none"
        //                                             // document.getElementById('level-bg').style.display = "block"
        //                                             this.timeOut10 = setTimeout(() => {
        //                                                 window.requestAnimationFrame(this.levelThree)
        //                                             }, 5000)
        //                                         }, 100)
        //                                     }, 4000)
        //                                 } else {
        //                                     this.gameOver()
        //                                 }
        //                             }, 10000)
        //                         }, 5000)
        //                     }, 100)
        //                 }, 4000)
        //             } else {
        //                 this.gameOver()
        //             }
        //         }, 10000)
        //     }, 4000)

        // }, 5000)



        this.timeOut1 = setTimeout(() => {
            window.requestAnimationFrame(this.levelOne)
            this.timeOut2 = setTimeout(() => {
                window.cancelAnimationFrame(this.stopId)
                this.ctx.clearRect(0, 0, 720, 425);
                document.getElementById('level-bg').classList.remove("fade-stop")
                document.getElementById('level-bg').classList.add("fade-out")
                // if (this.isPlaying) {
                    this.timeOut3 = setTimeout(() => {
                        window.requestAnimationFrame(this.levelTwo)
                        this.timeOut4 = setTimeout(() => {
                            window.cancelAnimationFrame(this.stopId)
                            this.ctx.clearRect(0, 0, 720, 425);
                            document.getElementById('level-bg').classList.remove("fade-stop")
                            document.getElementById('level-bg').classList.add("fade-out")

                            this.timeOut5 = setTimeout(() => {
                                window.requestAnimationFrame(this.levelThree)
                            }, 13000)

                        }, 15000)
                    }, 14000)
                // } else {
                //     window.cancelAnimationFrame(this.stopId)
                //     this.ctx.clearRect(0, 0, 720, 425);
                // }
            }, 15000)
        }, 9000)
    }

    levelOne(timestamp) {

        this.stopId = window.requestAnimationFrame(this.levelOne);

        // if (timestamp >= 15000) {
        //     window.cancelAnimationFrame(this.stopId)
        //     this.ctx.clearRect(0, 0, 720, 425);
        //     document.getElementById('level-bg').classList.remove("fade-stop")
        //     document.getElementById('level-bg').classList.add("fade-out")

        // }
        if(!this.isPlaying){
    
            this.ctx.clearRect(0, 0, 720, 425);
        }

        if (this.lives > 0) {
            this.ctx.clearRect(0, 0, 720, 425);
            this.spider.move(this.ctx);
            this.coconut.move(this.ctx);
            this.mango.move(this.ctx);
            this.basket.draw(this.ctx);
            // this.level = 2
        } else {

            this.gameOver();
        }
    }



    levelTwo(timestamp) {

        this.stopId = window.requestAnimationFrame(this.levelTwo)
        

        if (!this.isPlaying) {
           
            this.ctx.clearRect(0, 0, 720, 425);
        }
        if (this.lives > 0) {
            this.ctx.clearRect(0, 0, 720, 425);
            this.spider.direction.y = 2.3
            this.spider2.direction.y = 2.4
            this.coconut.direction.y = 2.2
            this.coconut2.direction.y = 2.3
            this.spider.move(this.ctx);
            this.spider2.move(this.ctx)
            this.coconut.move(this.ctx);
            this.coconut2.move(this.ctx);
            this.mango.move(this.ctx);
            this.basket.draw(this.ctx);
        } else {

            this.gameOver()
        }
    }

    levelThree() {

        this.stopId = window.requestAnimationFrame(this.levelThree)
        if (!this.isPlaying) {
            this.ctx.clearRect(0, 0, 720, 425);
        }
        if (this.lives > 0) {
            this.ctx.clearRect(0, 0, 720, 425);
            this.spider.direction.y = 2.4
            this.spider2.direction.y = 2.4
            this.spider3.direction.y = 2.5
            this.spider4.direction.y = 2.5
            this.coconut.direction.y = 2.3
            this.coconut2.direction.y = 2.4
            this.spider.move(this.ctx);
            this.spider2.move(this.ctx)
            this.spider3.move(this.ctx);
            this.spider4.move(this.ctx)
            this.coconut.move(this.ctx);
            this.coconut2.move(this.ctx);
            this.mango.move(this.ctx);
            this.basket.draw(this.ctx);
        } else {

            this.gameOver()
        }
    }
    displayScore() {
        document.getElementById("score").innerText = `Score: ${this.score}`
        this.handleLives()

    }

    gameOver() {
        this.handleLives()
        //    clearInterval(this.loop);
        window.cancelAnimationFrame(this.stopId)

        // this.timeOuts.forEach( timeOut => clearTimeout(timeOut))
        // clearTimeout(this.timeOut)
        this.level = 1
        this.ctx.clearRect(0, 0, 720, 425);
        this.isPlaying = false;
        this.lost = true
        this.score = 0;
        this.lives = 3;
        document.getElementById("audio").src = 'src/assets/sounds/calming-sea-sounds.mp3'
        document.getElementById("audio").load()
        if (this.audioBtn.classList.contains('on')) {
            this.track.play()
        } else {
            this.track.pause()
        }
        // document.getElementById("level-change").style.display = "none"
        document.getElementById("game-over").style.display = "block"
        document.getElementById('level-bg').classList.add("fade-out")

        //    document.getElementById("level-change").innerText = `Game Over... Press Enter To Play Again`

    }

    handleLives() {
        this.lives === 3 ? document.getElementById("lives").innerHTML = `Lives: <p id="heart">&nbsp; &#9829; &#9829; &#9829;</p>`
            : this.lives === 2 ? document.getElementById("lives").innerHTML = `Lives: <p id="heart">&nbsp; &#9829; &#9829; &nbsp;</p>`
                : this.lives === 1 ? document.getElementById("lives").innerHTML = `Lives: <p id="heart">&nbsp; &#9829; &nbsp; &nbsp;</p>`
                    : document.getElementById("lives").innerHTML = `Lives: 0`
    }

}


export default Game;

