import { unlockedGames } from "./Bonus-Game-Scripts/unlocked-games.js";

const bonusGameInput = document.querySelector('.js-bonus-game-input-box');
let unlockText = document.querySelector('.js-game-unlock-text');

if (unlockedGames.chuckles3d === 1) {
  chuckles3d();
}

if (unlockedGames.chuckiladre === 1) {
  chuckiladre();
}

document.querySelector('.js-reset-games-button').addEventListener('click', () => {
  localStorage.removeItem('unlocks');
});

bonusGameInput.value = '';

bonusGameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    unlockGames();
  }
});

document.querySelector('.js-unlock-button').addEventListener('click', unlockGames);

function unlockGames() {
  if (bonusGameInput.value === 'I want to be 3d!') {
    chuckles3d();
    unlockedGames.chuckles3d = 1;
    localStorage.setItem('unlocks', JSON.stringify(unlockedGames));
  } else if (bonusGameInput.value === 'What does it mean to be Chuckled?') {
    chuckiladre();
    unlockedGames.chuckiladre = 1;
    localStorage.setItem('unlocks', JSON.stringify(unlockedGames));
  }
}

function chuckles3d() {
  document.querySelectorAll('.js-bonus-game-outline')
    .forEach((box) => {
      if (box.dataset.game === 'chuckles3d') {
        box.outerHTML = `<div class="game-outline">
          <div class="game-image-div" >
            <img class="game-image" src="Pictures/Chuckles3D.png" alt="image of game">
          </div>
          <div class="play-game-grid">
            <a href="play-3d.html">
              <img class="play-game-button" src="Pictures/play-game.png" alt="play game" title="Play Game">
            </a>
      
            <p class="version-text">
               Chuckles in the City 3D
            </p>
          </div>
          <div>
            <p class="release-date">
              Release Date: 10/11/2026
            </p>
          </div>
        </div>`;
      }
    });
  //unlockedText();
  bonusGameInput.value = '';
}

function chuckiladre() {
  document.querySelectorAll('.js-bonus-game-outline')
    .forEach((box) => {
      if (box.dataset.game === 'chuckiladre') {
        box.outerHTML = `<div class="game-outline">
          <div class="game-image-div" >
            <img class="game-image" src="Pictures/Chuckiladre.jpg" alt="image of game">
          </div>
          <div class="play-game-grid">
            <a href="play-chuckiladre.html">
              <img class="play-game-button" src="Pictures/play-game.png" alt="play game" title="Play Game">
            </a>
      
            <p class="version-text">
               Chuckiladre's Realm
            </p>
          </div>
          <div>
            <p class="release-date">
              Release Date: 10/11/2026
            </p>
          </div>
        </div>`;
      }
    });
  //unlockedText();
  bonusGameInput.value = '';
}

/*function unlockedText () {
  if (bonusGameInput.value === 'I want to be 3d!' && unlockedGames.chuckles3d === 0) {
    unlockText.innerHTML = 'You unlocked Chuckles in the City 3D!'
  } else if (bonusGameInput === 'What does it mean to be Chuckled?' && unlockedGames.chuckiladre === 0) {
    unlockText.innerHTML = "You unlocked Chuckiladre's Realm!"
  }
}
  */
