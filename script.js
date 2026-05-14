let contNormal = 0;
let contPref = 0;
let fila = [];
let historico = [];

const senhaDisplay = document.getElementById("senha");
const listaChamadas = document.getElementById("listaChamadas");

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function tocarSomChamada() {
   
    const context = new (window.AudioContext || window.webkitAudioContext)();
    function tocarNota(frequencia, tempoInicio, duracao) {
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(frequencia, tempoInicio);
        gainNode.gain.setValueAtTime(0, tempoInicio);
        gainNode.gain.linearRampToValueAtTime(0.2, tempoInicio + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, tempoInicio + duracao);
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        oscillator.start(tempoInicio);
        oscillator.stop(tempoInicio + duracao);
    }
    tocarNota(523.25, context.currentTime, 1.5); // Ding
    tocarNota(440.00, context.currentTime + 0.5, 1.5); // Dong
}
function atualizarDataHora() {
    let agora = new Date();
    document.getElementById("data").innerHTML = agora.toLocaleDateString('pt-BR');
    document.getElementById("hora").innerHTML = agora.toLocaleTimeString('pt-BR');
}
setInterval(atualizarDataHora, 1000);
atualizarDataHora();

document.getElementById("btnGerarNormal").addEventListener("click", () => {
    contNormal++;
    const s = { num: `A${contNormal.toString().padStart(3, "0")}`, cor: '#3498db' };
    fila.push(s);
    senhaDisplay.innerHTML = s.num;
    senhaDisplay.style.color = s.cor;
});

document.getElementById("btnGerarPref").addEventListener("click", () => {
    contPref++;
    const s = { num: `P${contPref.toString().padStart(3, "0")}`, cor: '#e67e22' };
    fila.push(s);
    senhaDisplay.innerHTML = s.num;
    senhaDisplay.style.color = s.cor;
});

document.getElementById("btnChamar").addEventListener("click", () => {
    if (fila.length === 0) {
        alert("Não há senhas na fila!");
        return;
    }

    const proxima = fila.shift();
    const nomeSala = document.getElementById("sala").value;

    tocarSomChamada();

    setTimeout(() => {
        const texto = `Atenção. Senha ${proxima.num.split('').join(' ')}, dirigir-se para: ${nomeSala}`;
        const voz = new SpeechSynthesisUtterance(texto);
        voz.lang = "pt-BR";
        voz.rate = 0.9;
        window.speechSynthesis.speak(voz);
    }, 600);

    adicionarAoHistorico(proxima, nomeSala);
});

function adicionarAoHistorico(senhaObj, local) {
    const card = document.createElement("div");
    card.className = "card-senha";
    card.style.borderLeft = `8px solid ${senhaObj.cor}`;
    card.innerHTML = `
        <strong>${senhaObj.num}</strong>
        <span>${local}</span>
    `;

    listaChamadas.prepend(card);

    if (listaChamadas.children.length > 10) {
        listaChamadas.removeChild(listaChamadas.lastChild);
    }
}

document.getElementById("btnLimpar").addEventListener("click", () => {
    if(confirm("Deseja zerar todos os contadores e a fila?")) {
        contNormal = 0;
        contPref = 0;
        fila = [];
        senhaDisplay.innerHTML = "---";
        senhaDisplay.style.color = "#b9ff00";
        listaChamadas.innerHTML = "";
    }
});