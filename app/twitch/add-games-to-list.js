import createGameElemnt from './create-game-element';

export default function showGamesInList(parentEl, data) {
  for (let i = 0; i < data.length; i++) {
    array[i];
  }

  const gameItem = data[i];

  const el = createGameElemnt(gameItem);
  parentEl.appendChild(el);
}
