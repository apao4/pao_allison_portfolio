var videoPlayer, playbtn, timeline, curtimetext, totalTime, mute, volume, fullscreenbtn;

//Initialise
function initialisevideoPlayer() {
    videoPlayer = document.getElementById("animationReel");
    videoPlayer.controls = false;

    timeline = document.getElementById("timeline");
    timeline.addEventListener("change",vidSeek,false);
    videoPlayer.addEventListener("timeupdate",seektimeupdate,false);
    curTime = document.getElementById("curTime");
    totalTime = document.getElementById("totalTime");
    
    mutebtn = document.getElementById("mute");
    mutebtn.addEventListener("click",vidmute,false);

    volume = document.getElementById("volume");
    volume.addEventListener("change",setvolume,false);
	
	fullscreenbtn = document.getElementById("fullscreenbtn");
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
 }

 window.onload = initialisevideoPlayer;

 //Play and Pause (switching button from play to pause)
function togglePlayPause() {
    var btn = document.getElementById('playPauseBtn');
    if (videoPlayer.paused || videoPlayer.ended) {
       btn.title = 'PAUSE';
       btn.innerHTML = 'PAUSE';
       btn.className = 'PAUSE';
       videoPlayer.play();
    }
    else {
       btn.title = 'PLAY';
       btn.innerHTML = 'PLAY';
       btn.className = 'PLAY';
       videoPlayer.pause();
    }
}

function changeButtonType(btn, value) {
    btn.title = value;
    btn.innerHTML = value;
    btn.className = value;
}

//Stop
function stopPlayer() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

//Timeline
function vidSeek(){
	var seekto = videoPlayer.duration * (timeline.value / 100);
	videoPlayer.currentTime = seekto;
}
function seektimeupdate(){
	var nt = videoPlayer.currentTime * (100 / videoPlayer.duration);
	timeline.value = nt;
	var curmins = Math.floor(videoPlayer.currentTime / 60);
	var cursecs = Math.floor(videoPlayer.currentTime - curmins * 60);
	var durmins = Math.floor(videoPlayer.duration / 60);
	var dursecs = Math.floor(videoPlayer.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curTime.innerHTML = curmins+":"+cursecs;
	totalTime.innerHTML = durmins+":"+dursecs;
}
function vidmute(){
	if(videoPlayer.muted){
		videoPlayer.muted = false;
		mutebtn.innerHTML = "MUTE";
	} else {
		videoPlayer.muted = true;
		mutebtn.innerHTML = "UNMUTE";
	}
}
function setvolume(){
	videoPlayer.volume = volume.value / 100;
}
function toggleFullScreen(){
	if(videoPlayer.requestFullScreen){
		videoPlayer.requestFullScreen();
	} else if(videoPlayer.webkitRequestFullScreen){
		videoPlayer.webkitRequestFullScreen();
	} else if(videoPlayer.mozRequestFullScreen){
		videoPlayer.mozRequestFullScreen();
	}
}

 
 document.addEventListener("DOMContentLoaded", function() { initialisevideoPlayer(); }, false);

 videoPlayer.addEventListener('volumechange', function(e) {
    var btn = document.getElementById('mute-button');
    if (videoPlayer.muted) changeButtonType(btn, 'unmute');
    else changeButtonType(btn, 'mute');
 }, false);

