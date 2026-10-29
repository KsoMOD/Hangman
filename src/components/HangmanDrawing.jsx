import stage0 from '../assets/hangman/0.png';
import stage1 from '../assets/hangman/1.png';
import stage2 from '../assets/hangman/2.png';
import stage3 from '../assets/hangman/3.png';
import stage4 from '../assets/hangman/4.png';
import stage5 from '../assets/hangman/5.png';
import stage6 from '../assets/hangman/6.png';

// One picture per state: empty gallows -> fully drawn (game over).
const STAGES = [stage0, stage1, stage2, stage3, stage4, stage5, stage6];

// The number of wrong guesses allowed equals the number of pictures minus
// the starting (empty) picture.
export const MAX_WRONG_GUESSES = STAGES.length - 1;

function HangmanDrawing({ wrongGuesses }) {
  const index = Math.min(wrongGuesses, MAX_WRONG_GUESSES);
  return (
    <div className="drawing">
      <img
        src={STAGES[index]}
        alt={`Hangman after ${index} wrong guess${index === 1 ? '' : 'es'}`}
      />
    </div>
  );
}

export default HangmanDrawing;
