document.querySelector('.js-2-1').addEventListener("click", version21Download);

document.querySelector('.js-2-0').addEventListener("click", version20Download);

document.querySelector('.js-1-3').addEventListener("click", version13Download);

function version21Download() {
  document.querySelector('.tab-button-selected').classList.remove('tab-button-selected');
  document.querySelector('.js-2-1').classList.add('tab-button-selected');
  document.querySelector('.js-download-box').innerHTML = ` <div class="left-side">
          <div class="game-image-div">
            <img class="download-game-image" src="Pictures/v2.1 title and logo.png" alt="image of game">
          </div>
        
          <p class="game-download-text">
            Version 2.1 Downloads
          </p>
        
          <p class="release-date">
            Release Date: 8/13/2026
          </p>
        
          <a href="https://www.mediafire.com/file/y9cwgc5fr47ps76/Chuckles_in_the_City_%2528v2.1%2529.html/file"
            target="_blank">
            <div class="game-download-grid">
              <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
              <p class="file-version">
                HTML File
              </p>
            </div>
          </a>
        
          <a href="https://www.mediafire.com/file/5sg60ogv6qvp5mj/Chuckles_in_the_City_%2528v2.1%2529_Windows_Setup.exe/file"
            target="_blank">
            <div class="game-download-grid">
              <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
              <p class="file-version">
                Windows Installer
              </p>
            </div>
          </a>
        </div>
        
        <div class="right-side">
          <a href="https://www.mediafire.com/file/4rvf5ajuoayawt1/Chuckles_in_the_City_%2528v2.1%2529_Windows.zip/file"
            target="_blank">
            <div class="game-download-grid">
              <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
              <p class="file-version">
                Windows Portable
              </p>
            </div>
          </a>
        
          <a href="https://www.mediafire.com/file/94evpealyxomcnn/Chuckles_in_the_City_%2528v2.1%2529_MAC.zip/file"
            target="_blank">
            <div class="game-download-grid">
              <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
              <p class="file-version">
                macOS Portable
              </p>
            </div>
          </a>
        
          <a href="https://www.mediafire.com/file/80hpf31rt42t3eo/Chuckles_in_the_City_%2528v2.1%2529_Linux.zip/file"
            target="_blank">
            <div class="game-download-grid">
              <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
              <p class="file-version">
                Linux Portable
              </p>
            </div>
          </a>
        </div>
      </div>`;
}

function version20Download() {
  document.querySelector('.tab-button-selected').classList.remove('tab-button-selected');
  document.querySelector('.js-2-0').classList.add('tab-button-selected');
  document.querySelector('.js-download-box').innerHTML = `<div class="left-side">
        <div class="game-image-div">
          <img class="download-game-image" src="Pictures/A.png" alt="image of game">
        </div>

        <p class="game-download-text">
          Version 2.0 Downloads
        </p>

        <p class="release-date">
          Release Date: 7/29/2026
        </p>

        <a href=https://www.mediafire.com/file/mjnnn34mt9uvahj/Chuckles_in_The_City_%2528v2.0%2529.html/file target="_blank">
          <div class="game-download-grid">
            <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
            <p class="file-version">
              HTML File
            </p>
          </div>
        </a>      

       <a href="https://www.mediafire.com/file/xy8dq2v6m87f9pv/Chuckles_in_The_City_%2528v2.0%2529_Windows_Setup.exe/file" target="_blank">
        <div class="game-download-grid">
          <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
          <p class="file-version">
            Windows Installer
          </p>
        </div>
      </a>
      </div>

    <div class="right-side">
      <a href="https://www.mediafire.com/file/3lksptp4o04ufsa/Chuckles_in_The_City_%2528v2.0%2529_Windows.zip/file" target="_blank">
        <div class="game-download-grid">
          <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
          <p class="file-version">
            Windows Portable
          </p>
        </div>
      </a>

      <a href="https://www.mediafire.com/file/3lwjpzi2efy0agx/Chuckles_in_The_City_%2528v2.0%2529_MAC.zip/file" target="_blank">
        <div class="game-download-grid">
          <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
          <p class="file-version">
            macOS Portable
          </p>
        </div>
      </a>

      <a href="https://www.mediafire.com/file/snyox9svek4qkfa/Chuckles_in_The_City_%2528v2.0%2529_Linux.zip/file" target="_blank">
        <div class="game-download-grid">
            <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
            <p class="file-version">
              Linux Portable
            </p>
          </div>
        </a>
        </div>
      </div>`;
}

function version13Download() {
  document.querySelector('.tab-button-selected').classList.remove('tab-button-selected');
  document.querySelector('.js-1-3').classList.add('tab-button-selected');
  document.querySelector('.js-download-box').innerHTML = ` <div class="left-side">
        <div class="game-image-div">
          <img class="download-game-image" src="Pictures/D.png" alt="image of game">
        </div>

        <p class="game-download-text">
          Version 1.3 Downloads
        </p>

        <p class="release-date">
          Release Date: 1/11/2025
        </p>

      <a href="https://www.mediafire.com/file/50wab8h5aef02mf/Chuckles_in_the_City_%2528Version_1.3%2529.html/file" target="_blank">
        <div class="game-download-grid">
        <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
        <p class="file-version">
          HTML File
        </p>
      </div>
    </a>
      
    <a href="https://www.mediafire.com/file/5oi6fdzbgf0pphb/Chuckles_in_the_City_%2528Version_1.3%2529_Windows_Setup.exe/file" target="_blank">
      <div class="game-download-grid">
        <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
        <p class="file-version">
          Windows Installer
        </p>
      </div>
    </a>
      </div>
      
     <div class="right-side">
       <a href="https://www.mediafire.com/file/npfwayev1j39iyd/Chuckles_in_the_City_%2528Version_1.3%2529_Windows.zip/file" target="_blank">
        <div class="game-download-grid">
          <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
          <p class="file-version">
            Windows Portable
          </p>
        </div>
      </a>
      
      <a href="https://www.mediafire.com/file/vgsq7kt4wiad2w2/Chuckles_in_the_City_%2528Version_1.3%2529_MAC.zip/file" target="_blank">
        <div class="game-download-grid">
          <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
          <p class="file-version">
            macOS Portable
          </p>
        </div>
      </a>
      
      <a href="https://www.mediafire.com/file/t0dslg72rgp897b/Chuckles_in_the_City_%2528Version_1.3%2529_Linux.zip/file" target="_blank">
        <div class="game-download-grid">
          <img class="chuckles-icon" src="Pictures/Chuckles Icon.png">
          <p class="file-version">
            Linux Portable
          </p>
        </div>
      </a>
      </div>
      </div>`;
}