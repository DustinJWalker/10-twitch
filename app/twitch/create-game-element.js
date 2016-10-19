export default function createGameElement(data) {
  const item = document.createElement('li');
  item.classList.add('game-item');
  item.innerHTML =
  `<div class="frame">
  <h3 class="game-item__name"</h3>
  <h4 class="game-item__popularity"</h4>
  </div>
  <img class="game-item__pic" src ="" alt=""></img>`;

  const title = item.querySelector('.game-item__name');
  title.innerText = data.name;

  const popularity = item.querySelector('.game-item__popularity');
  popularity.innerText = data.popularity;

  const pic = item.querySelector('.game-item__pic');
  pic.src = data.box.large;
  pic.alt = data.name;

  return item;
}
