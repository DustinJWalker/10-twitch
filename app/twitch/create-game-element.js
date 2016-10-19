export default function createGameElement(data) {
  const game = document.createElement('div');
  game.classList.add('game-item');
  game.innerHTML =
  `<div className="frame">
  <h2 class="game-item__name"</h2>
  <h3 class="game-item__popularity</h3>
  <h4 class="_id"</h4>
  </div>
  <img class="game-item__pic" src ="" alt=""></img>`;
  const title = game.querySelector('.game-item__name');
  title.innerText = game.name;
}
