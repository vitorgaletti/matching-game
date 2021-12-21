import './style.css';
import CardGame from '../../components/CardGame';

function BoardGame(amount) {
  const $htmlCardGame = CardGame();
  const $htmlContent = $htmlCardGame.repeat(amount);

  return `
    <section class="board-game">
      ${$htmlContent}
    </section>
    `;
}

export default BoardGame;
