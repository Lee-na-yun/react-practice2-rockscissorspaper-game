const HANDS = ['rock', 'scissor', 'paper'];

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

export function compareHand(a, b) {
  if (WINS[a] === b) return 1; //a 묵, b 빠 // a 묵, b 묵
  if (WINS[b] === a) return -1; // b 묵, a 묵
  return 0;
}

function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];
}