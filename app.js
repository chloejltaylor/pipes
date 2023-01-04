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

console.log(scale)

el.style.transform = "translate(-50%, -50%) " + "scale(" + scale + ")"

//start game

let titleplaybutton = document.getElementById("titleplaybutton")
let header = document.getElementById("header")
let titlescreen = document.querySelector(".titlescreen")
let maingame = document.querySelector("main")
function startgame () {
  console.log("startgame")
  setTimeout(() => {
    header.classList.remove("displaynone")
    maingame.classList.remove("displaynone")
    titlescreen.classList.add("displaynone")
  }, 500);
}

titleplaybutton.addEventListener("mousedown",startgame)

//sounds
const incorrect = new Audio("assets/sounds/incorrect.wav")
const correct = new Audio("assets/sounds/correct.mp3")
const win = new Audio("assets/sounds/win.wav")


function playSound(sound){

    console.log(sound)
    if(ismuted==false){
        sound.play()
    }
}

// get an array of tiles for level 1- tilesl1


let tilesl1 = document.querySelectorAll(".tile_l1")

//define an array of posible rotations
let rotationarray=[0,90,180,270]

//initialise the rotation positions
let positions_l1 = [0,0,0,0]


//set up the tiles to start the game 

function rotate(tile) {
  //get a random number between 0 and 3 
  position = Math.floor((Math.random() * 4))

  //randomly set the rotation of each tile to one of the four possible rotations
  let rotation = rotationarray[position];
  tile.style.transform = 'rotate('+rotation+'deg)';

  return position
}

function setuptiles(){
  for(let i=0; i<tilesl1.length; i++){
    rotate(tilesl1[i])

    //keep a record of the position of each tile initially
    positions_l1[i] = position
  }
}

setuptiles()


//when a tile is clicked, move it 90deg
//"i" means the tile being clicked, left to right, top to bottom
for(let i=0; i<tilesl1.length; i++){
  tilesl1[i].addEventListener("mousedown", rotateonclick)

  function rotateonclick(){
    tilesl1[i].style.pointerEvents="none"
    tilesl1[i].classList.remove("rotate90")

    //set the rotation to 90deg of current position
    //update the position array to reflect new position

      rotation= rotationarray[positions_l1[i]]+90
      positions_l1[i]++
      tilesl1[i].classList.add("rotate90")
    
    console.log(positions_l1[i])
    tilesl1[i].style.transform = 'rotate('+rotation+'deg)';
    

    setTimeout(() => {
      tilesl1[i].style.pointerEvents="auto"
      
      if(positions_l1[i]==4){
        positions_l1[i] = 0
        tilesl1[i].classList.remove("rotate90")
        tilesl1[i].style.transform = 'rotate('+0+'deg)';
      }
      testgamecomplete()
    }, 1000);

    

  }

}

//set up solution

let continuel2 = document.getElementById("continuel2")
let turbine = document.querySelector(".turbine")
let lightbulb = document.querySelector(".lightbulb")

function testgamecomplete(){
  if(positions_l1[1]==2 && (positions_l1[2]==0 || positions_l1[2]==2) && positions_l1[3]==0){
    setTimeout(() => {
      continuel2.classList.remove("displaynone")

    }, 1000);
    console.log("you win!")
    turbine.classList.remove("turbinebefore")
    turbine.classList.add("turbineglow")
    lightbulb.classList.remove("lightbulbbefore")
    lightbulb.classList.add("lightbulbglow")

    playSound(win)
  } else {
    console.log("keep going")
  }
}

