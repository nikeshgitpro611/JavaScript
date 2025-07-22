const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const volumeControl = document.getElementById("volume-control");
const volumeDisplay = document.getElementById("volume-display");

const songs = ["hey", "summer", "ukulele"];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

const prevSong = () => {
  songIndex--;
  console.log("songIndexPrev :", songIndex);

  if (songIndex < 0) {
    songIndex = songs.length - 1;
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};

const nextSong = () => {
  songIndex++;
  console.log("nextSong", songIndex);
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
};

const playSong = () => {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
};

const pauseSong = () => {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
};

const updatePercent = (e) => {
  const { duration, currentTime } = e.srcElement;

  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
};
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  console.log("isPlaying", isPlaying);

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
audio.addEventListener("timeupdate", updatePercent);
progressContainer.addEventListener("click", function (e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
  console.log("width", width, clickX, duration);
});
audio.addEventListener("ended", nextSong);

volumeControl.addEventListener("input", function () {
  const volumeLevel = this.value / 10;
  audio.volume = volumeLevel;
  volumeDisplay.innerText = this.value;
  console.log('volumeLevel', volumeLevel);
  
});
