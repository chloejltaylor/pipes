const music = new Audio("assets/sounds/music.mp3")

music.volume = 0.01;
let ismuted = false

const mutebutton = document.querySelector("#mutebutton")

// initialise sound effects and music playing states

mutebutton.innerHTML='<img class="buttonsmall" src="assets/buttons/unmute.png">'

// uncomment next line to activate music
playmusic()

// set the mute button to display the current state and play and pause music

function muteunmute() {

  if(ismuted == false){
    mutebutton.innerHTML='<img class="buttonsmall" src="assets/buttons/mute.png">'
    ismuted =true
    
  } else {
    mutebutton.innerHTML='<img class="buttonsmall" src="assets/buttons/unmute.png">'
    ismuted = false
  }

  playmusic()

}

function playmusic() {
  if(ismuted == false){
    music.play()
    music.loop=true 
  } else {
    music.pause() 
  }
}

  mutebutton.addEventListener("mousedown", muteunmute)
    

function navigateaway() {

  document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="hidden"){
        music.pause()
    }
    else{
      playmusic()
    }
  })
}

// also uncomment this
navigateaway()
