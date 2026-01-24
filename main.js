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


alert(" 2+2=1")
let raqam = prompt("2+2= ?  ")
if(raqam == 1 ){
  console.log("bji kurdistan")
}
else{location.reload();
}



console.log('This site was build by @a9meddx')
