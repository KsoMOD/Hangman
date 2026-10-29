// Word bank for the game. Each entry has the word and a short hint.
const WORDS = [
  { word: 'REACT', hint: 'A JavaScript library for building user interfaces' },
  { word: 'COMPONENT', hint: 'A reusable piece of UI' },
  { word: 'PROPS', hint: 'Data passed from a parent to a child' },
  { word: 'STATE', hint: 'Data a component remembers between renders' },
  { word: 'JAVASCRIPT', hint: 'The language of the web' },
  { word: 'DOCKER', hint: 'Runs apps in containers' },
  { word: 'VITE', hint: 'A fast front-end build tool' },
  { word: 'BROWSER', hint: 'Chrome, Firefox or Safari' },
  { word: 'KEYBOARD', hint: 'You type on it' },
  { word: 'FUNCTION', hint: 'A reusable block of code' },
  { word: 'VARIABLE', hint: 'A named place to store a value' },
  { word: 'DATABASE', hint: 'Where an app keeps its data' },
  { word: 'NETWORK', hint: 'Computers connected together' },
  { word: 'ALGORITHM', hint: 'Step-by-step instructions to solve a problem' },
  { word: 'INTERFACE', hint: 'Where a user and a system meet' },
  { word: 'PROTOTYPE', hint: 'An early model of a product' },
  { word: 'ATLANTA', hint: 'Capital of Georgia' },
  { word: 'MOREHOUSE', hint: 'An HBCU in Atlanta' },
  { word: 'COMPUTER', hint: 'The machine you are using right now' },
  { word: 'SOFTWARE', hint: 'Programs that run on hardware' },
];

export function getRandomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export default WORDS;
