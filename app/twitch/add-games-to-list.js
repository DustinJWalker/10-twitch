import createGameElemnt from './create-game-element';

export default function showGamesInList(parentEl, data) {
  const li = createGameElemnt(data);

  parentEl.appendChild(li);
}
