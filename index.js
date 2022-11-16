const DOMSelectors = {
  enter: document.getElementById("btn1"),
  remove: document.getElementById("btn2"),
  song: document.getElementById("song"),
  artist: document.getElementById("artist"),
  results: document.getElementById("results"),
};

const user = {
  song: "",
  artist: "",
};

DOMSelectors.enter.addEventListener("click", function () {
  user.song = DOMSelectors.song.value;
  user.artist = DOMSelectors.artist.value;
  DOMSelectors.results.innerHTML = `<br /> Hi! You like the song ${user.song} by the artist ${user.artist}.`;
});

DOMSelectors.remove.addEventListener("click", function () {
  DOMSelectors.results.innerHTML = ``;
});
