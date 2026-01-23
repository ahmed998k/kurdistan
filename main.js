const audio = document.getElementById("anthem");
const btnText = document.getElementById("btnText");


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

alert("ماڵپەر هێشتا لە ژێر کارکردن دایە و تەواو نەبووە ")
console.log('This site was build by @a9meddx')