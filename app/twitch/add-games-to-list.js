import createGameElemnt from './create-game-element';

export default function showGamesInList(parentEl, data) {
  parentEl.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    data[i];

    const gameItem = data[i];
    const el = createGameElemnt(gameItem);
    parentEl.appendChild(el);
  }
}
