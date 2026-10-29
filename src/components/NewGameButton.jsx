// Starts a new round. Reused in the main screen and inside the pop-up.
function NewGameButton({ onNewGame, label = 'New Game' }) {
  return (
    <button className="btn btn--primary" onClick={onNewGame}>
      {label}
    </button>
  );
}

export default NewGameButton;
