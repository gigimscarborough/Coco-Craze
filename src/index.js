import "./styles/index.scss";
import Basket from './scripts/basket'
import Coconut from './scripts/coconut'
import Game from './scripts/game'

// const AudioContext = window.AudioContext || window.webkitAudioContext;

// const audioContext = new AudioContext();
// const calypso = audioContext.createMediaElementSource(document.getElementById('audio'));

const audioContext = new AudioContext();

let beach

fetch('src/assets/sounds/calming-sea-sounds.mp3')
.then(data => data.arrayBuffer())
.then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
.then(decodedAudio => {
  beach = decodedAudio;
});


document.addEventListener('mousemove', playSound)

function playSound(e) {
  const waves = audioContext.createBufferSource();
  waves.buffer = beach
  waves.connect(audioContext.destination)
  waves.start(audioContext.currentTime)

}

const game = new Game();
document.addEventListener('keydown', (e) => {
  if (e.key === "Enter" && game.isPlaying === false){
    document.getElementById("game-start").style.display = "none"
    game.startGame();
  }
})

const howTo = document.getElementById("how-to-play");
const scroll = document.getElementById("scroll-background")


const caribFacts = ["The Caribbean islands get their name from the indigenous Carib tribes who migrated to the islands from South America.", 
                    "Approximately 2% of the islands in the Caribbean are inhabited by people.", 
                    "The Steelpan, the instrument known for being the sound of the Carribean, was invented in Trinidad and Tobago and is the only new acoustic instrument of the 20th century.",
                    "The La Brea Pitch Lake in South Trinidad is the largest natural deposit of asphalt in the world.",
                    "The Caribbean region is what's called an archipelago, made up of around 700 islands, islets, reefs and caves."]
document.getElementById('fun-fact-here').innerText = `${caribFacts[0]}`

setInterval(() => {
    for(let i = 0; i < caribFacts.length; i++){
    if (caribFacts[i] === document.getElementById('fun-fact-here').innerText){
      return document.getElementById('fun-fact-here').innerText = `${caribFacts[(i+1) % caribFacts.length]}`
    }
  
  }
    
}, 10000)

howTo.onclick = function () {
  scroll.style.display = "block";
}

window.onclick = function (e) {
 
  if (e.target === scroll) {
    scroll.style.display = "none";
  }
}


// let canvas = document.getElementById("game-canvas");
// let ctx = canvas.getContext('2d');
// let ctxHeight = canvas.height;
// let ctxWidth = canvas.width;





// ctx.clearRect(0, 0, ctxWidth, ctxHeight);


// let basket = new Basket(ctxWidth, ctxHeight, canvas);

// let coconut = new Coconut(ctxWidth, ctxHeight);

// function loop(){
  
//   coconut.move(ctx);
//   basket.draw(ctx);
// }

// setInterval(game.draw, 10)



