const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:;<>[]{}()/?@#$%^&*|";

let interval = null;
let timeout = null;

function startRandomHover() {
  clearTimeout(timeout);
  clearInterval(interval);

  timeout = setTimeout(() => {
    const h1Element = document.querySelector("h1");
    const originalText = h1Element.dataset.value || h1Element.innerText;

    let iteration = 0;

    interval = setInterval(() => {
      h1Element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 7;
    }, 60);

    startRandomHover(); // Trigger another random hover after completion
  }, getRandomDuration(2, 7) * 1000);
}

function getRandomDuration(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startRandomHover(); // Start the initial random hover

var autoPlayVideo = document.getElementById("iframe");
autoPlayVideo.oncanplaythrough = function() {
  autoPlayVideo.muted = false;
  autoPlayVideo.play();
};