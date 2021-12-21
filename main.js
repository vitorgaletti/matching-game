import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';

import ScoreBoard from './src/objects/ScoreBoard';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
  `
    ${ScoreBoard()}
    ${BoardGame(2)}
  `
);

const $cardGame = document.querySelectorAll('.card-game');

function flipCard() {
  this.classList.toggle('flip');
}

$cardGame.forEach(card => card.addEventListener('click', flipCard));
