document.querySelector('.js-image').classList.add('logo-image');

document.querySelector('.js-chuckles-in-the-city-button').addEventListener("click", chucklesInTheCityInfo)

document.querySelector('.js-chuckles-button').addEventListener("click", chucklesInfo)

document.querySelector('.js-floating-head-button').addEventListener("click", floatingHeadInfo)

document.querySelector('.js-chuckiladre-button').addEventListener("click", chuckiladreInfo)

function chucklesInTheCityInfo() {
  document.querySelector('.js-image').classList.add('logo-image');
  document.querySelector('.tab-button-selected').classList.remove('tab-button-selected');
  document.querySelector('.js-chuckles-in-the-city-button').classList.add('tab-button-selected');
  document.querySelector('.js-image').src = "Pictures/Chuckles Logo.png";
  document.querySelector('.js-about').innerHTML = `<strong>Chuckles in the City</strong><br>
                "Chuckles in the City" is a video game originally released on March 1st, 2022, on Scratch.<br>
                It has since been updated several times, adding new content and fixes.<br>
                The game involves you controlling the character "Chuckles," as you travel into the city to use a mech to defeat
                "The Floating Head."`;
  document.querySelector('.js-image').removeAttribute('title');
}

function chucklesInfo() {
  document.querySelector('.js-image').classList.remove('logo-image');
  document.querySelector('.tab-button-selected').classList.remove('tab-button-selected');
  document.querySelector('.js-chuckles-button').classList.add('tab-button-selected');
  document.querySelector('.js-image').src = "Pictures/Chuckles.png";
  document.querySelector('.js-about').innerHTML = `
            <strong>Chuckles</strong><br>
              Chuckles is the main protagonist of the video game "Chuckles in the City."<br>
              He is a yellow stickman and typically has red eyes, though he is sometimes depicted as having orange eyes.
            `;
  document.querySelector('.js-image').removeAttribute('title');
}

function floatingHeadInfo() {
  document.querySelector('.js-image').classList.remove('logo-image');
  document.querySelector('.tab-button-selected').classList.remove('tab-button-selected');
  document.querySelector('.js-floating-head-button').classList.add('tab-button-selected');
  document.querySelector('.js-image').src = "Pictures/Floating Head.png";
  document.querySelector('.js-about').innerHTML = `<strong>The Floating Head</strong><br>
                The Floating Head is one of Chuckles' nemeses.<br>
                It is mysterious in that it has no known origins or motives other than to cause mass destruction.`;
  document.querySelector('.js-image').removeAttribute('title');
}

function chuckiladreInfo() {
  document.querySelector('.js-image').classList.remove('logo-image');
  document.querySelector('.tab-button-selected').classList.remove('tab-button-selected');
  document.querySelector('.js-chuckiladre-button').classList.add('tab-button-selected');
  document.querySelector('.js-image').src = "Pictures/Chuckiladre.jpg";
  document.querySelector('.js-about').innerHTML = `
            <strong>Chuckiladre</strong><br>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            `;
  document.querySelector('.js-image').setAttribute('title', '"What does it mean to be Chuckled?"');
}

