
// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const TIME_PER_TURN = 20000;
const totalChance = 3

//Global Variables
var pattern;
var patternLength = 8;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0; 
var timer = TIME_PER_TURN; 
var myTimerVar;
var numFail = 0;

function startGame(){
  //initialize game variables
  var pattern = createPattern();
  progress = 0
  var numFail = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence(); 
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  clearInterval(myTimerVar);
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 440,
  6: 349.23,
  7: 500,
  8: 300
}
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
  guessCounter = 0;
  context.resume()
  let totalDelay = 0
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  timer = TIME_PER_TURN
  numFail = 0
  document.getElementById("attempLeft").innerHTML = totalChance;
  setTimeout(startTimer, totalDelay)
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
   if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      clearInterval(myTimerVar);
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    numFail++;
    document.getElementById("attempLeft").innerHTML = totalChance - numFail ;
    //GAME OVER: LOSE!
    if (totalChance - numFail < 1){
      loseGame();
    }
    
  }
}

function startTimer(){

    if(gamePlaying){
        myTimerVar = setInterval(myTimer, 100);
        timer = TIME_PER_TURN
    }
}

function myTimer(){
    timer -= 100
    document.getElementById("amtTime").innerHTML = timer / 1000;
    // if the time is run out
    if( timer <= 0 ){
        loseGame()
        // end the timer and make a new one 
        clearInterval(myTimerVar)
        nextClueWaitTime = 1000
    }
}

function createPattern(){
  var numKeys = Object.keys(freqMap).length;
  console.log(freqMap)
  pattern = [];
  for(var i=0; i < patternLength; i++){
    pattern.push(Math.floor(1 + Math.random() * numKeys))
  }
  return pattern;
}


