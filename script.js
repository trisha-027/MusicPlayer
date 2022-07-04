const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress1');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const volUpBtn = document.querySelector('#vol-up');
const volDownBtn = document.querySelector('#vol-down');
const maxvolume = 1;
const minvolume = 0.1;

const songs = ['hey', 'summer', 'ukulele', 'Monta Re', 'Kalo Jole', 'Jab Se', 'Tapur Tupur','Pichu dako','Ki Mayay','Bandhu Chol'];

let songIndex = 4;




loadSong(songs[songIndex]);

// ---------------------------all functionalities------------------------------------

function loadSong(song) {
    title.innerText = song;
    audio.src = `assets/${song}.mp3`;
    cover.src = `assets/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
    audio.volume=0.5;
    volumeUp();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause();

}



function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}


function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress1(e) {
    const ct = e.srcElement.currentTime;
    const tt = e.srcElement.duration;
    const percent = ct / tt * 100;
    progress.style.width = `${percent}%`

}
function setProgress1(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}



function volumeUp() {
   (audio.volume)+=0.1;
   console.log((audio.volume))

    if ((audio.volume) == maxvolume) {
        alert('Maximum Volume Reached');
    }

}
function volumeDown() {
    (audio.volume)-=0.1;
    console.log((audio.volume))
     if ((audio.volume) == minvolume) {
         alert('You will not be able to hear');
     }
 
 }
 function getProgress() {
	return document.getElementById("progressbar").getAttribute("aria-valuenow");
	return document.getElementById("progressbar").getAttribute("style","height");
	// return document.getElementById("progressbar").innerHTML;
	}

function setProgress(value) {
	document.getElementById("progressbar").setAttribute("aria-valuenow",value);
	document.getElementById("progressbar").setAttribute("style","height: " +value+ "rem");	
	document.getElementById("progressbar").innerHTML = (value); 
}

function increment() {
	
    var i = getProgress();
	if(i < 100){
		i++;
		setProgress(i);	
	}
}
function decrement() {
	var d = getProgress();
	setProgress(d - 1);
   
}
function openVolume(){
    vol.classList.add("open-volume");
}
function closeVolume(){
    vol.classList.remove("open-volume");
}














// .-----------------------------------All event listerners----------------------------------

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

let vol = document.getElementById('volume')
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate', updateProgress1)
progressContainer.addEventListener('click', setProgress1)
audio.addEventListener('ended', nextSong)
// up.addEventListener('click', volumeBar)
volUpBtn.addEventListener('click', volumeUp)
volDownBtn.addEventListener('click', volumeDown)
