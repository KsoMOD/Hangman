const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// On-screen keyboard. Each key is disabled once used, and coloured green
// (correct) or red (wrong). Clicking a key calls onGuess in the parent.
function Keyboard({ correctLetters, wrongLetters, disabled, onGuess }) {
  return (
    <div className="keyboard">
      {ALPHABET.map((letter) => {
        const isCorrect = correctLetters.includes(letter);
        const isWrong = wrongLetters.includes(letter);
        let className = 'key';
        if (isCorrect) className += ' key--correct';
        if (isWrong) className += ' key--wrong';
        return (
          <button
            key={letter}
            className={className}
            disabled={disabled || isCorrect || isWrong}
            onClick={() => onGuess(letter)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
