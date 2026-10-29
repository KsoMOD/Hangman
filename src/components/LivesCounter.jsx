// Shows how many lives the player has left as hearts plus a number.
function LivesCounter({ livesLeft, maxLives }) {
  const hearts = Array.from({ length: maxLives }, (_, i) => (
    <span key={i} className={i < livesLeft ? 'heart heart--full' : 'heart'}>
      ♥
    </span>
  ));
  return (
    <div className="lives" aria-label={`${livesLeft} lives left`}>
      <div className="lives__hearts">{hearts}</div>
      <p>
        Lives left: <strong>{livesLeft}</strong> / {maxLives}
      </p>
    </div>
  );
}

export default LivesCounter;
