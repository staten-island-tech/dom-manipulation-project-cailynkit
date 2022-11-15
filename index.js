const DOMSelectors = {
  button: document.getElementById("btn"),
  song: document.getElementById("song"),
  artist: document.getElementById("artist"),
  results: document.getElementById("results"),
};

const user = {
  song: "",
  artist: "",
};

DOMSelectors.button.addEventListener("click", function () {
  user.song = DOMSelectors.song.value;
  user.artist = DOMSelectors.artist.value;
  DOMSelectors.results.innerHTML = `<br /> Hi! You like the song ${user.song} by the artist ${user.artist}.`;
});
