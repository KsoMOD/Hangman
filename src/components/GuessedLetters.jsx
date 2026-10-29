// Lists every letter the user has chosen so far, split into hits and misses.
function GuessedLetters({ correctLetters, wrongLetters }) {
  const renderList = (letters, type) =>
    letters.length === 0 ? (
      <span className="guessed__empty">none yet</span>
    ) : (
      letters.map((l) => (
        <span key={l} className={`chip chip--${type}`}>
          {l}
        </span>
      ))
    );

  return (
    <div className="guessed">
      <div className="guessed__row">
        <span className="guessed__label">Correct:</span>
        {renderList(correctLetters, 'correct')}
      </div>
      <div className="guessed__row">
        <span className="guessed__label">Wrong:</span>
        {renderList(wrongLetters, 'wrong')}
      </div>
    </div>
  );
}

export default GuessedLetters;
