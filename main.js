// Gere um número aleatório como índice para a matriz quickDrawDataset
const randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

// Imprima o nome do esboço aleatório no console
console.log(quickDrawDataset[randomNumber]);

// Armazene o nome do esboço aleatório na variável sketch
const sketch = quickDrawDataset[randomNumber];

// Atualize o texto da tag span com id "drawnSketchText"
document.getElementById("drawnSketchText").textContent =
  "Esboço a Ser Desenhado: " + sketch;

// Variáveis adicionais
let timerCounter = 0;
let timerCheck = "";
let drawSketch = "";
let answerHolder = "";
let score = 0;

// Função para atualizar a tela
function updateCanvas() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");

  // Limpar tela
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Definir o fundo da tela como branco
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Gerar número aleatório
  let randomNumber = Math.floor(Math.random() * quickDrawDataset.length);

  // Imprimir o valor do esboço no console
  console.log(randomNumber);
  sketch = quickDrawDataset[randomNumber];

  // Atualizar o elemento HTML com o esboço
  document.getElementById("myCanvas").innerText = sketch;
}

// Função setup
function setup() {
  let canvas = document.getElementById("myCanvas");
  canvas.style.display = "block";
  canvas.style.margin = "0 auto";
  canvas.style.backgroundColor = "white";

  // Chamar a função draw
  draw();

  // Verificar se o esboço desenhado é igual ao esboço
  if (answerHolder === sketch) {
    answerHolder = "set";
    score++;
    document.getElementById("score").innerText = score;
  }
}

// Função draw
function draw() {
  checkSketch();
}

// Função para verificar o esboço
function checkSketch() {
  timerCounter++;

  // Atualizar o tempo
  document.getElementById("timer").innerText = timerCounter;

  // Imprimir o valor do cronômetro no console
  console.log(timerCounter);

  // Verificar se o tempo excedeu 400 (ou qualquer outro valor que você desejar)
  if (timerCounter > 400) {
    timerCounter = 0;
    timerCheck = "completed";
  }

  // Verificar se o cronômetro está completo ou se a resposta já foi definida
  if (timerCheck === "completed" || answerHolder === "set") {
    timerCheck = "";
    answerHolder = "";
    updateCanvas();
  }
}

// Chamar a função de inicialização
setup();
