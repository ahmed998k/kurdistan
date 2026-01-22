
  const audio = document.getElementById("anthem");
  const btnText = document.getElementById("btnText");
  const lyrics = document.getElementById("lyrics");
  const lines = document.querySelectorAll(".lyrics p");

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
    const currentTime = audio.currentTime;

    lines.forEach((line, index) => {
      const start = Number(line.dataset.time);
      const next = Number(lines[index + 1]?.dataset.time || audio.duration);

      if (currentTime >= start && currentTime < next) {
        line.classList.add("active");

        // Keep active line centered
        const containerHeight = document.querySelector(".lyrics-container").offsetHeight;
        const offset = line.offsetTop - containerHeight / 2 + line.offsetHeight / 2;
        lyrics.style.transform = `translateY(-${offset}px)`;
      } else {
        line.classList.remove("active");
      }
    });
  });

