//global constants
// const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 600; //how long to wait before starting playback of the clue sequence

//Global Variables
// var pattern = [5, 2, 2, 4, 3, 2, 1, 2, 4];
var num1, num2, num3, num4, num5;
function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
  // num1 = getRandomInt(5) + 1;
  // num2 = getRandomInt(5) + 1;
  // num3 = getRandomInt(5) + 1;
  // num4 = getRandomInt(5) + 1;
  // num5 = getRandomInt(5) + 1;
var pattern = [num1, num2, num3, num4, num5];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakes = 0;

function startGame() {
  progress = 0;
  mistakes = 0;
  gamePlaying = true;
  num1 = getRandomInt(5) + 1;
  num2 = getRandomInt(5) + 1;
  num3 = getRandomInt(5) + 1;
  num4 = getRandomInt(5) + 1;
  num5 = getRandomInt(5) + 1;
  pattern = [num1, num2, num3, num4, num5];
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

//Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 295.2,  
  3: 330.5,
  4: 350.2,
  5: 395.5
}
// audio works.. but not really
// function playMyAudio(){
//       document.getElementById("Yaa").play();
//       }

// function playTone(){
//       document.getElementById("Yaa").play();
        
//       }

// function playTone(btn,len){ 
//   o.frequency.value = freqMap[btn]
//   g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
//   context.resume()
//   tonePlaying = true
//   setTimeout(function(){
//     stopTone()
//   },len)
// }

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter=0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  clueHoldTime = 1000;
}

function winGame(){
  stopGame();
  alert("You won!");
  clueHoldTime = 1000;
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
        clueHoldTime = clueHoldTime - 150;
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    mistakes++; // made a mistake!
    if (mistakes>2){
      loseGame();
    }
  }
}    


