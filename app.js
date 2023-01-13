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
    game1list = ["1a","1b", "1c", "1d"]
    game2list = ["2a", "2b", "2c", "2d"]
    game3list = ["3a", "3b", "3c", "3d"]
    game1Selector = Math.floor((Math.random()) * 4)
    game2Selector = Math.floor((Math.random()) * 4)
    game3Selector = Math.floor((Math.random()) * 4)
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
    playmusic()
    disappear(game2div)
    disappear(game3div)
    disappear(welldonescreen)
    disappear(video)
    if(game1Selector==3) {
      game1Selector = 0
    }
    else {game1Selector++}
    if(game2Selector==3) {game2Selector = 0}
    else {game2Selector++}
    if(game3Selector==3) {game3Selector = 0}
    else {game3Selector++}

    game1 = game1list[game1Selector]
    game2 = game2list[game2Selector]
    game3 = game3list[game3Selector]
    game1div = gamegrid1[game1Selector]
    game2div = gamegrid2[game2Selector]
    game3div = gamegrid3[game3Selector]
    appear(game1div)
    setuptiles(tilesl1, positions_l1)
    setuptiles(tilesl2, positions_l2)
    setuptiles(tilesl3, positions_l3)

    gameobjectsidle()
    start.classList.remove("start_pos3_1")
    end.classList.remove("end_pos3_1")
    start.classList.remove("start_pos3_2")
    end.classList.remove("end_pos3_2")
    start.classList.remove("start_pos3_3")
    end.classList.remove("end_pos3_3")
    start.classList.remove("start_pos3_4")
    end.classList.remove("end_pos3_4")
    
    if(game1=="1a"){
      start.classList.add("start_pos1_2")
      end.classList.add("end_pos1_2")
    } else if (game1=="1b"){
      start.classList.add("start_pos1_1")
      end.classList.add("end_pos1_1")
    } else if (game1=="1c"){
      start.classList.add("start_pos1_2")
      end.classList.add("end_pos1_1")
    } else if (game1=="1d"){
      start.classList.add("start_pos1_2")
      end.classList.add("end_pos1_1")
    } 


}

titleplaybutton.addEventListener("pointerdown",startgame)
startagainbutton.addEventListener("pointerdown",restartgame)

  // start level 2

  function startlevel2(){
    setTimeout(() => {
      for(let i=0; i<gamegrid1.length; i++){
        disappear(gamegrid1[i])
      }
      appear(game2div)
      disappear(continuel2)
      disappear(video)
      start.classList.remove("start_pos1_1")
      end.classList.remove("end_pos1_1")
      start.classList.remove("start_pos1_2")
      end.classList.remove("end_pos1_2")
      start.classList.remove("start_pos1_3")
      end.classList.remove("end_pos1_3")
      
      if(game2=="2a"){
        start.classList.add("start_pos2_3")
        end.classList.add("end_pos2_3")
      } else if (game2=="2b"){
        start.classList.add("start_pos2_2")
        end.classList.add("end_pos2_2")
      } else if (game2=="2c"){
        start.classList.add("start_pos2_1")
        end.classList.add("end_pos2_1")
      } else if (game2=="2d"){
        start.classList.add("start_pos2_1")
        end.classList.add("end_pos2_3")
      } 
      gameobjectsidle()
    }, 100);


  }

    // start level 3

  function startlevel3(){
    for(let i=0; i<gamegrid2.length; i++){
      disappear(gamegrid2[i])
    }
    appear(game3div)
    disappear(continuel3)
    disappear(video)
    start.classList.remove("start_pos2_1")
    end.classList.remove("end_pos2_1")
    start.classList.remove("start_pos2_2")
    end.classList.remove("end_pos2_2")
    start.classList.remove("start_pos2_3")
    end.classList.remove("end_pos2_3")
    
    if(game3=="3a"){
      start.classList.add("start_pos3_4")
      end.classList.add("end_pos3_4")
    } else if (game3=="3b"){
      start.classList.add("start_pos3_4")
      end.classList.add("end_pos3_4")
    } else if (game3=="3c"){
      start.classList.add("start_pos3_4")
      end.classList.add("end_pos3_2")
    } else if (game3=="3d"){
      start.classList.add("start_pos3_4")
      end.classList.add("end_pos3_4")
    } 
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

function rotatesetup(tile) {
  //get a random number between 0 and 3 
  position = Math.floor((Math.random() * 4))

  //randomly set the rotation of each tile to one of the four possible rotations
  let rotation = rotationarray[position];
  tile.style.transform = 'rotate('+rotation+'deg)';

  return position
}

function setuptiles(tilesarray, positionsarray){
  for(let i=0; i<tilesarray.length; i++){
    rotatesetup(tilesarray[i])

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
    } else
    if(game1 == "1c" && positions_l1[8]==2 && (positions_l1[9]==0 || positions_l1[9]==2) && positions_l1[10]==0){
      console.log("oh no, the game is already finished before it's begun")
      setuptiles(tilesl1, positions_l1)
    } else
    if(game1 == "1d" && positions_l1[13]==2 && (positions_l1[14]==0 || positions_l1[14]==2) && positions_l1[15]==0 ){
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

if(game1=="1a"){
  start.classList.add("start_pos1_2")
  end.classList.add("end_pos1_2")
} else if (game1=="1b"){
  start.classList.add("start_pos1_1")
  end.classList.add("end_pos1_1")
} else if (game1=="1c"){
  start.classList.add("start_pos1_2")
  end.classList.add("end_pos1_1")
} else if (game1=="1d"){
  start.classList.add("start_pos1_2")
  end.classList.add("end_pos1_1")
} 

//set up solution

let continuel2 = document.getElementById("continuel2")
let continuel3 = document.getElementById("continuel3")
let turbine = document.querySelector(".turbine")
let lightbulb = document.querySelector(".lightbulb")

function testgamecompletel1(){
  if(game1 == "1a" && positions_l1[0]==2 && positions_l1[1]==3 && positions_l1[2]==0 && positions_l1[3]==1){
    gamewin("level1a")
  }
  if(game1 == "1b" && positions_l1[4]==3 && positions_l1[5]==2 && positions_l1[6]==1 && positions_l1[7]==0){
    gamewin("level1b")
  }
  if(game1 == "1c" && positions_l1[8]==2 && (positions_l1[9]==0 || positions_l1[9]==2) && positions_l1[10]==0){
    gamewin("level1b")
  }
  if((game1 == "1d" && positions_l1[13]==2 && (positions_l1[14]==0 || positions_l1[14]==2) && positions_l1[15]==0) ){

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
  } else if(game2 == "2b" 
  && positions_l2[9]== 2 
  && positions_l2[10]== 3
  && positions_l2[12]== 0
  && positions_l2[14]==2
  && positions_l2[16]==1
  && positions_l2[17]== 0
){
 gamewin("level2b")
} else if(game2 == "2c" 
&& (positions_l2[18]==0 || positions_l2[18]==2)
&& positions_l2[19]== 3
&& positions_l2[20]== 2
&& (positions_l2[22]==1 || positions_l2[22]==3)
&& (positions_l2[23]==1 || positions_l2[23]==3)
&& positions_l2[25]==1
&& positions_l2[26]== 0
){
gamewin("level2c")
} else if(game2 == "2d" 
&& positions_l2[27]== 3
&& positions_l2[28]== 2
&& positions_l2[29]== 3
&& (positions_l2[30]==1 || positions_l2[30]==3)
&& (positions_l2[31]==1 || positions_l2[31]==3)
&& (positions_l2[32]==1 || positions_l2[32]==3)
&& positions_l2[33]==1
&& positions_l2[34]== 0
&& positions_l2[35]== 1
){
gamewin("level2d")
}
}

function testgamecompletel3(){
  if( game3 == "3a"
      && positions_l3[1]==2
      && positions_l3[2]==3
      && positions_l3[4]==2
      && positions_l3[5]==0
      && positions_l3[6]==1 
      && positions_l3[7]==3
      && positions_l3[8]==1
      && (positions_l3[9]==0 || positions_l3[9]==2)
      && positions_l3[10]==3
      && (positions_l3[11]==1 || positions_l3[11]==3)
      && (positions_l3[12]==0 || positions_l3[12]==2)
      && (positions_l3[13]==0 || positions_l3[13]==2)
      && positions_l3[14]==0
      && positions_l3[15]==1
  ) {

    gameobjectsactive()
    gamewin()

  setTimeout(() => {
    appear(welldonescreen)
  }, 2000);
    
  } else
  if( game3 == "3b"
  && positions_l3[17]==2
  && (positions_l3[18]==0 || positions_l3[18]==2)
  && positions_l3[19]==3
  && positions_l3[20]==2
  && positions_l3[21]==0
  && (positions_l3[23]==1 || positions_l3[23]==3)
  && positions_l3[24]==1
  && (positions_l3[25]==0 || positions_l3[25]==2)
  && positions_l3[26]==3
  && (positions_l3[27]==1 || positions_l3[27]==3)
  && (positions_l3[28]==0 || positions_l3[28]==2)
  && (positions_l3[29]==0 || positions_l3[29]==2)
  && positions_l3[30]==0
  && positions_l3[31]==1
) {
  gameobjectsactive()
  gamewin()

setTimeout(() => {
  appear(welldonescreen)
}, 2000);
  
} else
if( game3 == "3c"

&& positions_l3[33]==2
&& positions_l3[34]==3
&& (positions_l3[37]==1 || positions_l3[37]==3)
&& (positions_l3[38]==1 || positions_l3[38]==3)
&& positions_l3[39]==2
&& (positions_l3[41]==1 || positions_l3[41]==3)
&& positions_l3[42]==1
&& positions_l3[43]==0
&& (positions_l3[44]==0 || positions_l3[44]==2)
&& positions_l3[45]==0
) {
gameobjectsactive()
gamewin()

setTimeout(() => {
appear(welldonescreen)
}, 2000);

} else
if( game3 == "3d"

&& positions_l3[49]==2
&& (positions_l3[50]==0 || positions_l3[50]==2)
&& positions_l3[51]==3
&& positions_l3[52]==2
&& positions_l3[53]==0
&& (positions_l3[55]==1 || positions_l3[55]==3)
&& positions_l3[56]==1
&& (positions_l3[57]==0 || positions_l3[57]==2)
&& positions_l3[58]== 3
&& (positions_l3[59]==1 || positions_l3[59]==3)
&& (positions_l3[60]==0 || positions_l3[60]==2)
&& (positions_l3[61]==0 || positions_l3[61]==2)
&& positions_l3[62]==0
&& positions_l3[63]==1
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
  gameobjectsactive()

  if(level=="level1a" || level=="level1b" || level=="level1c" || level=="level1d"){
    
  // Set timer for appearance of level 2 button 
  setTimeout(() => {
    appear(continuel2)
    playmusic()
  }, 4000);
  }

  if(level=="level2a" || level=="level2b" || level=="level2c" || level=="level2d"){
  // Set timer for appearance of level 2 button 
  setTimeout(() => {
    appear(continuel3)
    playmusic()
  }, 4000);
  }
  
  setTimeout(() => {
    appear(video)
  }, 100);
  
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


