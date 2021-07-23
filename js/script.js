import Countdown from "./countdown.js";


const time = new Countdown("10 August 2021 18:00:00 GMT -0300");
const contagens = document.querySelectorAll("[data-time]");


function mostrarTempo() {
contagens.forEach((contagem, index) => {
    contagem.innerHTML = time.total[index];
});
}

mostrarTempo();
setInterval(mostrarTempo,1000)