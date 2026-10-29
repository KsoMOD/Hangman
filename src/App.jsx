import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header.jsx';
import HangmanDrawing from './components/HangmanDrawing.jsx';
import LivesCounter from './components/LivesCounter.jsx';
import WordDisplay from './components/WordDisplay.jsx';
import Keyboard from './components/Keyboard.jsx';
import GuessedLetters from './components/GuessedLetters.jsx';
import NewGameButton from './components/NewGameButton.jsx';
import ResultModal from './components/ResultModal.jsx';
import { getRandomWord } from './data/words.js';
import { MAX_WRONG_GUESSES } from './components/HangmanDrawing.jsx';

// App is the single source of truth: it owns all game state and passes
// data down to child components through props. Children report user
// actions back up through callback props (onGuess, onNewGame, ...).
function App() {
  const [entry, setEntry] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const word = entry.word;

  // Derived values: computed from state on every render, never stored.
  const wrongLetters = guessedLetters.filter((l) => !word.includes(l));
  const correctLetters = guessedLetters.filter((l) => word.includes(l));
  const isLoser = wrongLetters.length >= MAX_WRONG_GUESSES;
  const isWinner = word.split('').every((l) => guessedLetters.includes(l));
  const isGameOver = isWinner || isLoser;

  const handleGuess = useCallback(
    (letter) => {
      if (isGameOver || guessedLetters.includes(letter)) return;
      setGuessedLetters((prev) => [...prev, letter]);
    },
    [isGameOver, guessedLetters]
  );

  const handleNewGame = () => {
    setEntry(getRandomWord());
    setGuessedLetters([]);
    setShowModal(false);
  };

  // Open the pop-up when the game ends.
  useEffect(() => {
    if (isGameOver) setShowModal(true);
  }, [isGameOver]);

  // Allow guessing with the physical keyboard too.
  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) handleGuess(key);
      if (e.key === 'Enter' && isGameOver) handleNewGame();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleGuess, isGameOver]);

  return (
    <div className="app">
      <Header />

      <main className="game">
        <section className="game__left">
          <HangmanDrawing wrongGuesses={wrongLetters.length} />
          <LivesCounter
            livesLeft={MAX_WRONG_GUESSES - wrongLetters.length}
            maxLives={MAX_WRONG_GUESSES}
          />
        </section>

        <section className="game__right">
          <p className="hint">
            <strong>Hint:</strong> {entry.hint}
          </p>
          <WordDisplay word={word} guessedLetters={guessedLetters} reveal={isLoser} />
          <GuessedLetters correctLetters={correctLetters} wrongLetters={wrongLetters} />
          <Keyboard
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            disabled={isGameOver}
            onGuess={handleGuess}
          />
          <NewGameButton onNewGame={handleNewGame} />
        </section>
      </main>

      {showModal && (
        <ResultModal
          isWinner={isWinner}
          word={word}
          onNewGame={handleNewGame}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default App;
