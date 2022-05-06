var mySong = document.getElementById("audio");
var icon = document.getElementById("icon");



icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "./images/pause.png";
    }else{
        mySong.pause();
        icon.src = "./images/play.png";

    }

}

var audio = document.getElementById('audio');
var playpause = document.getElementById("play");

function togglePlayPause() {
    if(audio.paused || audio.ended) {
        playpause.title = "Pause";
        audio.play();
    } else {
        playpause.title = "Play";
        audio.pause();
    }
}

