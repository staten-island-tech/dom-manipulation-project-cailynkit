const DOMSelectors = {
  button: document.getElementById("btn"),
  song: document.getElementById("song"),
  results: document.getElementById("rusults"),
};

DOMSelectors.button.addEventListener("click", function () {
  DOMSelectors.results.innerHTML = `
  <h1>Howdy </h1>
  Hello there! You like ${DOMSelectors.song.value}
  `;
});
