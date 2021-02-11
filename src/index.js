import "./styles/index.scss";
import Basket from './scripts/basket'
import Coconut from './scripts/coconut'
import Game from './scripts/game'


const track = document.getElementById("audio")
const audioBtn = document.getElementById("audio-btn")
track.volume = 0.5

const game = new Game();

document.addEventListener('keydown', (e) => {
  if (e.key === "Enter" && game.isPlaying === false){
    document.getElementById("game-start").style.display = "none"
    document.getElementById("game-over").style.display = "none"
    track.src = 'src/assets/sounds/calypso1.mp3'
    if (audioBtn.classList.contains('on')){
      track.play()
    } else{
      track.pause()
    }
    game.startGame();
  }
})


document.addEventListener('mousemove', playSound)
function playSound() {
  track.play()
  audioBtn.classList.add('on')
  document.removeEventListener('mousemove', playSound)

}

audioBtn.addEventListener('mousedown', playPause)

function playPause() {
  const push = () => {
    audioBtn.style.margin = '0 0 0 7px'
    document.removeEventListener('mouseup', push)

  }
if (!audioBtn.classList.contains('on')){
  track.play();
  audioBtn.classList.add('on')
  audioBtn.src = 'src/assets/images/pausebutton.png'
  audioBtn.style.margin = '2px 0 -2px 7px'
  audioBtn.addEventListener('mouseup', push)
} else {
  track.pause();
  audioBtn.classList.remove('on')
  audioBtn.src = 'src/assets/images/playbutton.png'
  audioBtn.style.margin = '2px 0 -2px 7px'
  audioBtn.addEventListener('mouseup', push)
}

}




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











