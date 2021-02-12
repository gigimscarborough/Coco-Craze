!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(0);function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var n=function(){function t(e){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.width=140,this.height=65,this.startingPos={x:(e.ctxWidth-this.width)/2,y:e.ctxHeight-this.height},this.basket=new Image,this.basket.src="src/assets/images/basket.png",document.addEventListener("mousemove",(function(t){var s=t.clientX-e.canvas.offsetLeft;s>0&&s<e.ctxWidth&&(i.startingPos.x=s-i.width/2)}))}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){this.game.isPlaying&&t.drawImage(this.basket,this.startingPos.x,this.startingPos.y,this.width,this.height)}}])&&s(e.prototype,i),n&&s(e,n),t}();function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.startingPos={x:Math.floor(Math.random()*this.game.ctxWidth),y:0},this.direction={x:0,y:2.2},this.coconut=new Image,this.coconut.src="src/assets/images/coconut.png",this.lostLife=this.lostLife.bind(this),this.updateLives=this.updateLives.bind(this),this.updateScore=this.updateScore.bind(this)}var e,i,s;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.coconut,this.startingPos.x,this.startingPos.y,40,40)}},{key:"move",value:function(t){this.draw(t),this.startingPos.x+=this.direction.x,this.startingPos.y+=this.direction.y,this.lostLife()}},{key:"lostLife",value:function(){this.startingPos.y>372&&this.startingPos.x>this.game.basket.startingPos.x&&this.startingPos.x<this.game.basket.startingPos.x+this.game.basket.width?(this.game.score+=10,this.startingPos.y=0,this.startingPos.x=Math.floor(Math.random()*this.game.ctxWidth),this.updateScore()):this.startingPos.y>420&&(this.game.lives-=1,this.startingPos.y=0,this.startingPos.x=Math.floor(Math.random()*this.game.ctxWidth),this.game.handleLives())}},{key:"updateLives",value:function(){document.getElementById("lives").innerText="Lives: ".concat(this.game.lives)}},{key:"updateScore",value:function(){document.getElementById("score").innerText="Score: ".concat(this.game.score)}}])&&a(e.prototype,i),s&&a(e,s),t}();function r(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.startingPos={x:Math.floor(Math.random()*this.game.ctxWidth),y:0},this.direction={x:0,y:1.7},this.mango=new Image,this.mango.src="src/assets/images/mango.png",this.lostLife=this.lostLife.bind(this),this.updateLives=this.updateLives.bind(this)}var e,i,s;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.mango,this.startingPos.x,this.startingPos.y,55,55)}},{key:"move",value:function(t){this.draw(t),this.startingPos.x+=this.direction.x,this.startingPos.y+=this.direction.y,this.lostLife()}},{key:"lostLife",value:function(){this.startingPos.y>372&&this.startingPos.x>this.game.basket.startingPos.x&&this.startingPos.x<this.game.basket.startingPos.x+this.game.basket.width?(this.game.lives>=3?this.game.lives:this.game.lives+=1,this.startingPos.y=0,this.startingPos.x=Math.floor(Math.random()*this.game.ctxWidth),this.game.handleLives()):this.startingPos.y>420&&(this.startingPos.y=0,this.startingPos.x=Math.floor(Math.random()*this.game.ctxWidth))}},{key:"updateLives",value:function(){document.getElementById("lives").innerText="Lives: ".concat(this.game.lives)}}])&&r(e.prototype,i),s&&r(e,s),t}();function h(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.startingPos={x:Math.floor(Math.random()*this.game.ctxWidth),y:0},this.direction={x:0,y:2.4},this.spider=new Image,this.spider.src="src/assets/images/spider.png",this.lostLife=this.lostLife.bind(this),this.updateLives=this.updateLives.bind(this)}var e,i,s;return e=t,(i=[{key:"draw",value:function(t){t.drawImage(this.spider,this.startingPos.x,this.startingPos.y,45,45)}},{key:"move",value:function(t){this.draw(t),this.startingPos.x+=this.direction.x,this.startingPos.y+=this.direction.y,this.lostLife()}},{key:"lostLife",value:function(){this.startingPos.y>372&&this.startingPos.x>this.game.basket.startingPos.x&&this.startingPos.x<this.game.basket.startingPos.x+this.game.basket.width?(this.game.lives-=1,this.startingPos.y=0,this.startingPos.x=Math.floor(Math.random()*this.game.ctxWidth),this.game.handleLives()):this.startingPos.y>420&&(this.startingPos.y=0,this.startingPos.x=Math.floor(Math.random()*this.game.ctxWidth))}},{key:"updateLives",value:function(){document.getElementById("lives").innerText="Lives: ".concat(this.game.lives)}}])&&h(e.prototype,i),s&&h(e,s),t}();function d(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("game-canvas"),this.ctx=this.canvas.getContext("2d"),this.ctxHeight=this.canvas.height,this.ctxWidth=this.canvas.width,this.basket=new n(this),this.coconut=new o(this),this.coconut2=new o(this),this.mango=new c(this),this.spider=new l(this),this.spider2=new l(this),this.spider3=new l(this),this.spider4=new l(this),this.startGame=this.startGame.bind(this),this.levelOne=this.levelOne.bind(this),this.levelTwo=this.levelTwo.bind(this),this.levelThree=this.levelThree.bind(this),this.displayScore=this.displayScore.bind(this),this.handleLives=this.handleLives.bind(this),this.score=0,this.lives=3,this.isPlaying=!1,this.track=document.getElementById("audio"),this.audioBtn=document.getElementById("audio-btn"),this.timeOut1,this.timeOut2,this.timeOut3,this.timeOut4,this.timeOut5,this.timeOuts=[this.timeOut1,this.timeOut2,this.timeOut3,this.timeOut4,this.timeOut5],this.level=1,this.lost=!1}var e,i,s;return e=t,(i=[{key:"startGame",value:function(){var t=this;this.stopId&&(this.ctx.clearRect(0,0,720,425),window.cancelAnimationFrame(this.stopId)),document.getElementById("level-change").innerHTML="Level One",document.getElementById("level-bg").src="src/assets/images/level1.jpg",this.displayScore(),this.isPlaying=!0,document.getElementById("level-bg").classList.add("fade-stop"),document.getElementById("level-bg").classList.remove("fade-out"),document.getElementById("level-bg").style.display="none",document.getElementById("level-change").style.display="block",this.timeOut1=setTimeout((function(){window.requestAnimationFrame(t.levelOne),t.timeOut2=setTimeout((function(){window.cancelAnimationFrame(t.stopId),t.ctx.clearRect(0,0,720,425),document.getElementById("level-bg").classList.remove("fade-stop"),document.getElementById("level-bg").classList.add("fade-out"),t.timeOut3=setTimeout((function(){window.requestAnimationFrame(t.levelTwo),t.timeOut4=setTimeout((function(){window.cancelAnimationFrame(t.stopId),t.ctx.clearRect(0,0,720,425),document.getElementById("level-bg").classList.remove("fade-stop"),document.getElementById("level-bg").classList.add("fade-out"),t.timeOut5=setTimeout((function(){window.requestAnimationFrame(t.levelThree)}),13e3)}),15e3)}),14e3)}),15e3)}),9e3)}},{key:"levelOne",value:function(t){this.isPlaying&&(this.stopId=window.requestAnimationFrame(this.levelOne)),this.lives>0?(this.ctx.clearRect(0,0,720,425),this.spider.move(this.ctx),this.coconut.move(this.ctx),this.mango.move(this.ctx),this.basket.draw(this.ctx)):this.gameOver()}},{key:"levelTwo",value:function(t){this.isPlaying&&(this.stopId=window.requestAnimationFrame(this.levelTwo)),this.lives>0?(this.ctx.clearRect(0,0,720,425),this.spider.direction.y=2.4,this.spider2.direction.y=2.5,this.coconut.direction.y=2.3,this.coconut2.direction.y=2.4,this.spider.move(this.ctx),this.spider2.move(this.ctx),this.coconut.move(this.ctx),this.coconut2.move(this.ctx),this.mango.move(this.ctx),this.basket.draw(this.ctx)):this.gameOver()}},{key:"levelThree",value:function(){this.isPlaying&&(this.stopId=window.requestAnimationFrame(this.levelThree)),this.lives>0?(this.ctx.clearRect(0,0,720,425),this.spider.direction.y=2.5,this.spider2.direction.y=2.5,this.spider3.direction.y=2.6,this.spider4.direction.y=2.6,this.coconut.direction.y=2.4,this.coconut2.direction.y=2.5,this.spider.move(this.ctx),this.spider2.move(this.ctx),this.spider3.move(this.ctx),this.spider4.move(this.ctx),this.coconut.move(this.ctx),this.coconut2.move(this.ctx),this.mango.move(this.ctx),this.basket.draw(this.ctx)):this.gameOver()}},{key:"displayScore",value:function(){document.getElementById("score").innerText="Score: ".concat(this.score),this.handleLives()}},{key:"gameOver",value:function(){this.handleLives(),window.cancelAnimationFrame(this.stopId),clearTimeout(this.timeOut1),clearTimeout(this.timeOut2),clearTimeout(this.timeOut3),clearTimeout(this.timeOut4),clearTimeout(this.timeOut5),this.level=1,this.ctx.clearRect(0,0,720,425),this.isPlaying=!1,this.lost=!0,this.score=0,this.lives=3,document.getElementById("audio").src="src/assets/sounds/calming-sea-sounds.mp3",document.getElementById("audio").load(),this.audioBtn.classList.contains("on")?this.track.play():this.track.pause(),document.getElementById("game-over").style.display="block",document.getElementById("level-bg").classList.add("fade-out")}},{key:"handleLives",value:function(){3===this.lives?document.getElementById("lives").innerHTML='Lives: <p id="heart">&nbsp; &#9829; &#9829; &#9829;</p>':2===this.lives?document.getElementById("lives").innerHTML='Lives: <p id="heart">&nbsp; &#9829; &#9829; &nbsp;</p>':1===this.lives?document.getElementById("lives").innerHTML='Lives: <p id="heart">&nbsp; &#9829; &nbsp; &nbsp;</p>':document.getElementById("lives").innerHTML="Lives: 0"}}])&&d(e.prototype,i),s&&d(e,s),t}(),m=document.getElementById("audio"),g=document.getElementById("audio-btn");m.volume=.4;var v=new u;document.addEventListener("keydown",(function(t){"Enter"===t.key&&!1===v.isPlaying&&(document.getElementById("game-start").style.display="none",document.getElementById("game-over").style.display="none",m.src="src/assets/sounds/calypso1.mp3",g.classList.contains("on")?m.play():m.pause(),v.startGame())})),document.addEventListener("mousemove",(function t(){m.play(),g.classList.add("on"),document.removeEventListener("mousemove",t)})),g.addEventListener("mousedown",(function(){var t=function t(){g.style.margin="0 0 0 7px",document.removeEventListener("mouseup",t)};g.classList.contains("on")?(m.pause(),g.classList.remove("on"),g.src="src/assets/images/playbutton.png",g.style.margin="2px 0 -2px 7px",g.addEventListener("mouseup",t)):(m.play(),g.classList.add("on"),g.src="src/assets/images/pausebutton.png",g.style.margin="2px 0 -2px 7px",g.addEventListener("mouseup",t))}));var y=document.getElementById("level-change"),f=document.getElementById("level-bg"),p=document.getElementById("game-over");y.addEventListener("animationstart",(function(){})),y.addEventListener("animationend",(function(){y.style.display="none",f.style.display="block",v.level++,v.level>1&&(f.classList.remove("fade-out"),f.classList.add("fade-stop"),1===v.level?y.innerHTML="Level One":2===v.level?y.innerHTML="Level Two":3===v.level?y.innerHTML="Level Three":y.innerHTML="Level One")})),f.addEventListener("animationend",(function(){f.classList.contains("fade-out")&&v.isPlaying&&(f.style.display="none",y.style.display="block",1===v.level?f.src="src/assets/images/level1.jpg":2===v.level?f.src="src/assets/images/level2.jpg":3===v.level?f.src="src/assets/images/level3.jpg":f.src="src/assets/images/level1.jpg"),f.classList.contains("fade-out")&&!v.isPlaying&&(f.style.display="none",f.src="src/assets/images/level1.jpg",y.innerHTML="Level One")})),f.addEventListener("animationstart",(function(){f.classList.contains("fade-out")&&(v.spider.startingPos.y=-60,v.spider2.startingPos.y=-60,v.coconut.startingPos.y=-60,v.coconut2.startingPos.y=-60,v.mango.startingPos.y=-60,v.spider3.startingPos.y=-60,v.spider4.startingPos.y=-60)})),p.addEventListener("animationend",(function(){v.ctx.clearRect(0,0,720,425),window.cancelAnimationFrame(v.stopId),v.ctx.clearRect(0,0,720,425)}));var b=document.getElementById("how-to-play"),x=document.getElementById("scroll-background"),w=["The Caribbean islands get their name from the indigenous Carib tribes who migrated to the islands from South America.","Approximately 2% of the islands in the Caribbean are inhabited by people.","The Steelpan, the instrument known for being the sound of the Carribean, was invented in Trinidad and Tobago and is the only new acoustic instrument of the 20th century.","The La Brea Pitch Lake in South Trinidad is the largest natural deposit of asphalt in the world.","The Caribbean region is what's called an archipelago, made up of around 700 islands, islets, reefs and caves."];document.getElementById("fun-fact-here").innerText="".concat(w[0]),setInterval((function(){for(var t=0;t<w.length;t++)if(w[t]===document.getElementById("fun-fact-here").innerText)return document.getElementById("fun-fact-here").innerText="".concat(w[(t+1)%w.length])}),1e4),b.onclick=function(){x.style.display="block"},window.onclick=function(t){t.target===x&&(x.style.display="none")}}]);
//# sourceMappingURL=main.js.map