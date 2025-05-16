const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const currentTime = document.getElementById("current-time");
const volume = document.getElementById("volume");
const currentVolume = document.getElementById("current-volume");

play.addEventListener("click", () => audio.play());
pause.addEventListener("click", () => audio.pause());
stop.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});
audio.addEventListener(
  "timeupdate",
  () => (currentTime.textContent = audio.currentTime.toFixed(2))
);
audio.addEventListener("volumechange", () => {
  volume.value = audio.volume;
  currentVolume.textContent = audio.volume;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
  currentVolume.textContent = volume.value;
});
