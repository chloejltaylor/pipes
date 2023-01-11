//appear and disappear logic

function appear(el){
  el.classList.remove("displaynone")
}

function disappear(el){
  el.classList.add("displaynone")
}


//scaling to different devices


let el = document.getElementById("inframearea");
let elHeight = el.getBoundingClientRect().height;
let elWidth = el.getBoundingClientRect().width;

let scale
let w = window.innerWidth;
let h = window.innerHeight; 
scale = Math.min(
  w / elWidth,
  h / elHeight
);


el.style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")"

//start game

let titleplaybutton = document.getElementById("titleplaybutton")
    header = document.getElementById("header")
    titlescreen = document.querySelector(".titlescreen")
    welldonescreen = document.querySelector(".welldonescreen")
    maingame = document.querySelector("main")
    openinstructionsbutton = document.getElementById("openinstructionsbutton")
    closeinstructionsbutton = document.getElementById("closeinstructionsbutton")
    startagainbutton = document.getElementById("startagainbutton")
    instructionsimage = document.querySelector(".instructionsimage")
    gamegrid1 = document.querySelectorAll(".gamegrid1")
    gamegrid2 = document.querySelectorAll(".gamegrid2")
    gamegrid3 = document.querySelectorAll(".gamegrid3")
    game1list = ["1a","1b"]
    game2list = ["2a"]
    game3list = ["3a"]
    game1Selector = Math.floor((Math.random()) * 2)
    game2Selector = Math.floor((Math.random()) * 1)
    game3Selector = Math.floor((Math.random()) * 1)
    game1 = game1list[game1Selector]
    game2 = game2list[game2Selector]
    game3 = game3list[game3Selector]
    game1div = gamegrid1[game1Selector]
    game2div = gamegrid2[game2Selector]
    game3div = gamegrid3[game3Selector]
    video = document.getElementById("videos")
    start = document.querySelector(".start")
    end = document.querySelector(".end")




function startgame () {
  setTimeout(() => {
    appear(header)
    appear(maingame)
    disappear(titlescreen)
    appear(instructionsimage)
    appear(game1div)
  }, 500);
}
function restartgame () {
  console.log("restart")
    // appear(game1div)
    // disappear(game2div)
    // disappear(game3div)
    // disappear(welldonescreen)
    // disappear(video)
    // if(game1Selector==1) {
    //   game1Selector = 0
    //   game1 = game1list[game1Selector]
    // }
    // else {game1Selector++}
    // if(game2Selector==3) {game2Selector = 0}
    // else {game2Selector++}
    // if(game3Selector==3) {game3Selector = 0}
    // else {game3Selector++}
    
    setuptiles(tilesl1, positions_l1)
    // setuptiles(tilesl2, positions_l2)
    // setuptiles(tilesl3, positions_l3)
}

titleplaybutton.addEventListener("pointerdown",startgame)
startagainbutton.addEventListener("pointerdown",restartgame)

  // start level 2

  function startlevel2(){
    for(let i=0; i<gamegrid1.length; i++){
      disappear(gamegrid1[i])
    }
    for(let i=0; i<gamegrid2.length; i++){
      appear(gamegrid2[i])
    } 
    disappear(continuel2)
    disappear(video)
    start.classList.remove("start_pos1_1")
    start.classList.add("start_pos2_1")
    end.classList.remove("end_pos1_1")
    end.classList.add("end_pos2_1")
    gameobjectsidle()
  }

    // start level 3

  function startlevel3(){
    for(let i=0; i<gamegrid2.length; i++){
      disappear(gamegrid2[i])
    }
    for(let i=0; i<gamegrid3.length; i++){
      appear(gamegrid3[i])
    } 
    disappear(continuel3)
    disappear(video)
    start.classList.remove("start_pos2_1")
    start.classList.add("start_pos3_1")
    end.classList.remove("end_pos2_1")
    end.classList.add("end_pos3_1")
    gameobjectsidle()
  }

// instructions

closeinstructionsbutton.addEventListener("pointerdown", closeinstructions)
openinstructionsbutton.addEventListener("pointerdown", openinstructions)

function closeinstructions() {
  disappear(instructionsimage)
}

function openinstructions() {
  appear(instructionsimage)
}


//sounds
const incorrect = new Audio("assets/sounds/incorrect.wav")
const correct = new Audio("assets/sounds/correct.mp3")
const win = new Audio("assets/sounds/win.wav")
const swish = new Audio("assets/sounds/swish.wav")

function playSound(sound){

    if(ismuted==false){
        sound.play()
    }
}

// get an array of tiles for level 1- tilesl1

let tilesl1 = document.querySelectorAll(".tile_l1")
let tilesl2 = document.querySelectorAll(".tile_l2")
let tilesl3 = document.querySelectorAll(".tile_l3")


//define an array of posible rotations
let rotationarray=[0,90,180,270]

//initialise the rotation positions
let positions_l1 = [0,0,0,0]
let positions_l2 = [0,0,0,0,0,0,0,0,0]
let positions_l3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//set up the tiles to start the game 

function rotate(tile) {
  //get a random number between 0 and 3 
  position = Math.floor((Math.random() * 4))

  //randomly set the rotation of each tile to one of the four possible rotations
  let rotation = rotationarray[position];
  tile.style.transform = 'rotate('+rotation+'deg)';

  return position
}

function setuptiles(tilesarray, positionsarray){
  for(let i=0; i<tilesarray.length; i++){
    rotate(tilesarray[i])

    //keep a record of the position of each tile initially
    positionsarray[i] = position

  //make sure the tiles are not already correctly lined up

  }

  function checkalignment(){
    if(game1 == "1a" && positionsarray[0]==2 && (positionsarray[1]==3 && positionsarray[2]==0) && positionsarray[3]==1){
      console.log("oh no, the game is already finished before it's begun")
      setuptiles(tilesl1, positions_l1)
    } else
    if(game1 == "1b" && (positionsarray[6]==0 || positionsarray[6]==2) && (positionsarray[7]==0 || positionsarray[7]==2)){
      console.log("oh no, the game is already finished before it's begun")
      setuptiles(tilesl1, positions_l1)
    } else {
      console.log("good to go")
    }
  }

  checkalignment()


}

setuptiles(tilesl1, positions_l1)
setuptiles(tilesl2, positions_l2)
setuptiles(tilesl3, positions_l3)

//set up solution

let continuel2 = document.getElementById("continuel2")
let continuel3 = document.getElementById("continuel3")
let turbine = document.querySelector(".turbine")
let lightbulb = document.querySelector(".lightbulb")

function testgamecompletel1(){
  if(game1 == "1a" && positions_l1[0]==2 && positions_l1[1]==3 && positions_l1[2]==0 && positions_l1[3]==1){
    gamewin("level1a")
  }
  if(game1 == "1b" && (positions_l1[6]==0 || positions_l1[6]==2) && (positions_l1[7]==0 || positions_l1[7]==2)){
    gamewin("level1b")
  }
}

function testgamecompletel2(){
  if(game2 == "2a" 
     && positions_l2[0]==2 
     && (positions_l2[1]==0 || positions_l2[1]==2)
     && positions_l2[2]== 3
     && positions_l2[3]== 1
     && positions_l2[4]== 3
     && (positions_l2[5]==1 || positions_l2[5]==3)
     && (positions_l2[6]==0 || positions_l2[6]==2)
     && positions_l2[7]== 0
     && positions_l2[8]== 1
  ){
    gamewin("level2a")
  }
}

function testgamecompletel3(){
  if(game3 == "3a"
      && positions_l3[0]==2 
      && (positions_l3[1]==0 || positions_l3[1]==2)
      && positions_l3[2]==3
      && positions_l3[4]==0
      && (positions_l3[6]==1 || positions_l3[6]==3)
      && positions_l3[7]==2
      && positions_l3[8]==2
      && (positions_l3[9]==0 || positions_l3[9]==2)
      && positions_l3[10]==0
      && (positions_l3[11]==1 || positions_l3[11]==3)
      && positions_l3[12]==1
      && (positions_l3[13]==0 || positions_l3[13]==2)
      && (positions_l3[14]==0 || positions_l3[14]==2)
      && positions_l3[15]==0
  ) {

    gameobjectsactive()
    gamewin()

  setTimeout(() => {
    appear(welldonescreen)
  }, 2000);
    
  }

}

function gamewin(level){
  music.pause() 

  if(level=="level1a" || level=="level1b"){
    gameobjectsactive()
  // Set timer for appearance of level 2 button 
  setTimeout(() => {
    appear(continuel2)
    playmusic()
  }, 4000);
  }

  if(level=="level2a" || level=="level2b"){
    gameobjectsactive()
  // Set timer for appearance of level 2 button 
  setTimeout(() => {
    appear(continuel3)
    playmusic()
  }, 4000);
  }
  
  appear(video)
  video.innerHTML = '<video preload="auto" id="video" playsinline class="welldonevideo item" autoplay>  <source src="assets/animations/test.mp4" type="video/mp4"></video>'
  
  let vid = document.getElementById('video');
  vid.muted = "muted";
  playSound(win)
} 

continuel2.addEventListener("pointerdown", startlevel2)
continuel3.addEventListener("pointerdown", startlevel3)

function gameobjectsidle(){
  turbine.classList.add("turbinebefore")
  turbine.classList.remove("turbineglow")
  lightbulb.classList.add("lightbulbbefore")
  lightbulb.classList.remove("lightbulbglow")
}

function gameobjectsactive(){
  turbine.classList.remove("turbinebefore")
  turbine.classList.add("turbineglow")
  lightbulb.classList.remove("lightbulbbefore")
  lightbulb.classList.add("lightbulbglow")
}


