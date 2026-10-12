import { unlockedGames } from './unlocked-games.js';

console.log(unlockedGames);

const game = document.querySelector('.js-game');
let mainHtml = document.querySelector('.js-main');

console.log(game.dataset.game);

if (game.dataset.game === 'chuckles3d') {
  if (unlockedGames.chuckles3d === 0) {
    mainHtml.innerHTML = '<p class="title-text">Game Not Unlocked</p>';
  }
} else if (game.dataset.game === 'chuckiladre') {
  if (unlockedGames.chuckiladre === 0) {
    mainHtml.innerHTML = '<p class="title-text">Game Not Unlocked</p>';
  }
};