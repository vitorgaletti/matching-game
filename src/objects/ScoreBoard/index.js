import './style.css';
import PlayerName from '../../components/PlayerName';
import DisplayPoints from '../../components/DisplayPoints';
import VsPlayer from '../../components/VsPlayer';
import ArrowDown from '../../components/ArrowDown';

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName('Player1')}
      ${DisplayPoints()}
      ${VsPlayer()}
      ${DisplayPoints()}
      ${PlayerName('Player2')}
    </header>
  `;
}

export default ScoreBoard;
