// Renders one box per letter. Letters stay hidden until guessed; when the
// player loses, the missing letters are revealed in a different colour.
function WordDisplay({ word, guessedLetters, reveal }) {
  return (
    <div className="word" aria-label="Word to guess">
      {word.split('').map((letter, i) => {
        const guessed = guessedLetters.includes(letter);
        const className = guessed
          ? 'word__letter'
          : reveal
          ? 'word__letter word__letter--missed'
          : 'word__letter word__letter--hidden';
        return (
          <span key={i} className={className}>
            {guessed || reveal ? letter : '_'}
          </span>
        );
      })}
    </div>
  );
}

export default WordDisplay;
