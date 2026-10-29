import NewGameButton from './NewGameButton.jsx';

// Pop-up shown when the game ends, telling the player whether they won or lost.
function ResultModal({ isWinner, word, onNewGame, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal ${isWinner ? 'modal--win' : 'modal--lose'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="result-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="result-title">{isWinner ? 'You Win! 🎉' : 'Game Over 💀'}</h2>
        <p>
          {isWinner ? 'Nice work, you guessed ' : 'The word was '}
          <strong>{word}</strong>
        </p>
        <div className="modal__actions">
          <NewGameButton onNewGame={onNewGame} label="Play Again" />
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultModal;
