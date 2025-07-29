let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('player-choice').innerHTML = emojiFor(playerChoice);
  document.getElementById('computer-choice').innerHTML = emojiFor(computerChoice);

  const result = getResult(playerChoice, computerChoice);
  document.getElementById('result').innerText = result;

  if (result === 'YOU WIN') playerScore++;
  if (result === 'YOU LOSE') computerScore++;

  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
}

function getResult(player, computer) {
  if (player === computer) return 'TIE';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) return 'YOU WIN';
  return 'YOU LOSE';
}

function emojiFor(choice) {
  if (choice === 'rock') return '🪨';
  if (choice === 'paper') return '📄';
  if (choice === 'scissors') return '✂️';
  return '?';
}

function resetGame() {
  document.getElementById('player-choice').innerHTML = '<p>?</p>';
  document.getElementById('computer-choice').innerHTML = '<p>?</p>';
  document.getElementById('result').innerText = 'VS';
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  resetGame();
  document.getElementById('player-score').innerText = '0';
  document.getElementById('computer-score').innerText = '0';
}

// Modal functions
function openRules() {
  document.getElementById('rules-modal').classList.remove('hidden');
}

function closeRules() {
  document.getElementById('rules-modal').classList.add('hidden');
}
