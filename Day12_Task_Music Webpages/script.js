function myfun(){
    var a=document.getElementById("start");
    var b=document.getElementById("song");

    if(song.paused){
        song.play();
        start.src="pause.png";
        console.log("Music is start");
    }
    else{
        song.pause();
        start.src="play.png";
        console.log("Music is stop");
    }
}