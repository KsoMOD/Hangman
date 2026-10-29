# Hangman

A classic Hangman word-guessing game built with **React** and **Vite**, packaged to run in **Docker**.

The player guesses a hidden word one letter at a time. Every wrong guess adds a piece to the hangman drawing. Guess the whole word before the drawing is complete to win.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [AI Contribution](#ai-contribution)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors and Acknowledgment](#authors-and-acknowledgment)
- [License](#license)
- [Project Status](#project-status)

## Features

- **Current hangman picture** – one image per game state, from an empty gallows to game over (7 images, 6 lives).
- **Letter selection** – click the on-screen A–Z keyboard or type on your physical keyboard.
- **Chosen letters** – every guess is listed and colour-coded as correct (green) or wrong (red); used keys are disabled.
- **New Game button** – starts a fresh round with a new random word at any time.
- **Win / lose pop-up** – a modal announces the result and reveals the word, with a *Play Again* option.
- Hint for every word and a lives counter (hearts).
- Responsive layout for desktop and mobile.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 18](https://react.dev/) | UI components and state |
| [Vite 5](https://vite.dev/) | Dev server and production build |
| [Docker](https://www.docker.com/) + Docker Compose | Containerised build and hosting |
| [nginx](https://nginx.org/) | Serves the built static files inside the container |

## Installation

### Option 1 – Docker (recommended)

Requirements: [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose).

```bash
git clone https://github.com/KsoMOD/Hangman.git
cd hangman
docker compose up --build
```

Open **http://localhost:8080** in your browser.

To stop the container:

```bash
docker compose down
```

### Option 2 – Run locally with Node

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

```bash
cd hangman
npm install
npm run dev
```

Open the URL Vite prints (usually **http://localhost:5173**).

Other scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Usage

1. Read the hint above the blank word.
2. Pick a letter by clicking a key or pressing it on your keyboard.
3. Correct letters appear in the word; wrong letters add a piece to the hangman and cost one life.
4. Guess every letter to win, or lose after 6 wrong guesses.
5. When the pop-up appears, click **Play Again** (or press **Enter**). Use **New Game** at any time to restart.

## Project Structure

```
hangman/
├── public/                 # Static files copied as-is (favicon, manifest, robots.txt)
├── src/
│   ├── assets/hangman/     # 0.png (empty gallows) … 6.png (game over)
│   ├── components/         # Reusable UI components (see below)
│   ├── data/words.js       # Word bank with hints
│   ├── App.jsx             # Root component – owns all game state
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html              # Vite HTML entry
├── vite.config.js
├── Dockerfile              # Multi-stage build: Node builds, nginx serves
├── docker-compose.yml      # Maps container port 80 to host port 8080
└── package.json
```

## Components

The app follows core React principles: the UI is split into small, single-purpose **function components**, data flows **down through props**, and user actions flow **up through callback props**. `App` is the single source of truth for state; values such as wrong letters, lives left and win/lose status are **derived** from state on each render instead of being stored separately.

| Component | Responsibility | Props |
| --- | --- | --- |
| `App` | Holds game state (`entry`, `guessedLetters`, `showModal`) and game logic | – |
| `Header` | Title and instructions | – |
| `HangmanDrawing` | Shows the picture that matches the number of wrong guesses | `wrongGuesses` |
| `LivesCounter` | Hearts and "lives left" text | `livesLeft`, `maxLives` |
| `WordDisplay` | Blanks / revealed letters of the word | `word`, `guessedLetters`, `reveal` |
| `Keyboard` | A–Z buttons for choosing a letter | `correctLetters`, `wrongLetters`, `disabled`, `onGuess` |
| `GuessedLetters` | Lists the letters the user has chosen | `correctLetters`, `wrongLetters` |
| `NewGameButton` | Starts a new round (reused in the pop-up) | `onNewGame`, `label` |
| `ResultModal` | Win / lose pop-up | `isWinner`, `word`, `onNewGame`, `onClose` |

## AI Contribution

AI assistance (Claude, by Anthropic) was used on this project to:

- Scaffold the Vite + React project structure and split the game into components.
- Draft the game logic (derived state for wins, losses and lives) and the styles.
- Write the `Dockerfile`, `docker-compose.yml` and this README.

All code was reviewed, run and tested by the author, who is responsible for the final submission. The hangman images were supplied with the assignment.

## Roadmap

- Difficulty levels (word length / number of lives)
- Word categories
- Score and win-streak tracking
- Sound effects

## Contributing

1. Fork the repository and create a feature branch.
2. Make your changes and run `npm run build` to make sure the project still builds.
3. Open a pull request describing your change.

## Authors and Acknowledgment

- **Jordan Hemmings** – developer
- Hangman artwork provided with the course assignment.
- Built with [Vite](https://vite.dev/guide/) and [React](https://react.dev/).

## License

This project was created for a class assignment and is intended for educational use.

## Project Status

Complete – meets all required features for the assignment.
