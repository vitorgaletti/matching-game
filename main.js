import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
  `
    ${PlayerName('Player1')}
    ${PlayerName('Player2')}
    ${BoardGame(6)}
  `
);

const $cardGame = document.querySelectorAll('.card-game');

function flipCard() {
  this.classList.toggle('flip');
}

$cardGame.forEach(card => card.addEventListener('click', flipCard));
