const perguntas = [
  "Como você avaliaria o atendimento do restaurante?",
  "Como você avaliaria a limpeza do ambiente?",
  "Você foi bem atendida?",
  "A comida chegou rápido?",
  "Você voltaria aqui novamente?",
  "Agora... uma curiosidade: sabia que seu sorriso ilumina qualquer lugar?",
  "Você tem ideia do quanto é linda, por dentro e por fora?",
  "Seu jeitinho é tão especial, que me faz sorrir só de lembrar de você.",
  "Estar com você faz tudo ter mais sentido, mais leveza.",
  "Não é mais uma pesquisa… é uma declaração.",
  "Você é única. Incrível. Maravilhosa.",
  "Só me resta uma última pergunta...",
  "Olhe para trás ❤️"
];

let index = 0;

function proximaPergunta() {
  index++;
  if (index < perguntas.length) {
    document.getElementById("pergunta").innerText = perguntas[index];

    if (index >= 5) {
      document.getElementById("titulo").innerText = "Espere... isso não é só uma pesquisa";
      document.body.style.background = "linear-gradient(135deg, #fff0f5, #ffe6eb)";
    }

    if (index === perguntas.length - 3) {
      criarPetalas();
    }

    if (index === perguntas.length - 1) {
      document.getElementById("titulo").innerText = "♥";
      document.querySelector(".botoes").style.display = "none";
    }
  }let currentStep = 1;
const totalSteps = 4;

function nextStep() {
  document.getElementById(`step-${currentStep}`).classList.add("hidden");
  currentStep++;
  const next = document.getElementById(`step-${currentStep}`);
  if (next) next.classList.remove("hidden");
}

function finalStep() {
  document.getElementById(`step-${currentStep}`).classList.add("hidden");
  document.getElementById("lottie-heart").classList.remove("hidden");
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
  const music = document.getElementById("romanticMusic");
  music.play();
  setTimeout(() => {
    alert("Olhe para trás 💖");
  }, 4000);
}

}

function criarPetalas() {
  const container = document.getElementById('petals');
  for (let i = 0; i < 30; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 4 + Math.random() * 3 + "s";
    petal.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(petal);
  }
}
confetti({
  particleCount: 200,
  spread: 100,
  origin: { y: 0.6 }
});
