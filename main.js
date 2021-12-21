import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

import SelectPlayer from './src/components/SelectPlayer';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);

const $htmlSelectPlayer = SelectPlayer('Player 1') + SelectPlayer('Player 2');

$root.insertAdjacentHTML('afterbegin', $htmlSelectPlayer);
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);

const $cardGame = document.querySelectorAll('.card-game');

function flipCard() {
  this.classList.toggle('flip');
}

$cardGame.forEach(card => card.addEventListener('click', flipCard));
