import './style.css';
import PlayerName from '../../components/PlayerName';
import VsPlayer from '../../components/VsPlayer';
import ArrowDown from '../../components/ArrowDown';
import PlayerScore from '../../components/PlayerScore';

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${ArrowDown(2)}
      ${PlayerName('Player1')} 
      ${PlayerScore(2)}
      ${VsPlayer()} 
      ${PlayerScore(1)}
      ${PlayerName('Player2')}
    </header>
  `;
}

export default ScoreBoard;
