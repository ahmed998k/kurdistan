const audio = document.getElementById("anthem");
const btnText = document.getElementById("btnText");
const lyrics = document.getElementById("lyrics");
const lines = document.querySelectorAll(".lyrics p");
const container = document.querySelector(".lyrics-container");

let currentActiveIndex = -1;

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    btnText.textContent = "Pause Song";
  } else {
    audio.pause();
    btnText.textContent = "Play Song";
  }
}

audio.addEventListener("timeupdate", () => {
  const t = audio.currentTime;
  let activeIndex = -1;

  // 1. Find which line should be active right now
  lines.forEach((line, i) => {
    const start = Number(line.dataset.time);
    if (t >= start) {
      activeIndex = i;
    }
  });

  // 2. Only update if the active line has actually changed
  if (activeIndex !== -1 && activeIndex !== currentActiveIndex) {
    // Remove active class from old line
    if (currentActiveIndex !== -1) {
      lines[currentActiveIndex].classList.remove("active");
    }

    // Set new active line
    const activeLine = lines[activeIndex];
    activeLine.classList.add("active");
    currentActiveIndex = activeIndex;

    // 3. Smoothly scroll to the new line
    const offset = activeLine.offsetTop - (container.offsetHeight / 2) + (activeLine.offsetHeight / 2);
    lyrics.style.transform = `translateY(-${offset}px)`;
  }
});


console.log('This site was build by a9med412')