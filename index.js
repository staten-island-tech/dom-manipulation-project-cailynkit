const DOMSelectors = {
  enter: document.getElementById("enter"),
  clear: document.getElementById("clear"),
  song: document.getElementById("song"),
  artist: document.getElementById("artist"),
  results: document.getElementById("results"),
  div: document.getElementById("container"),
};

const user = {
  song: "",
  artist: "",
};

DOMSelectors.enter.addEventListener("click", function () {
  user.song = DOMSelectors.song.value;
  user.artist = DOMSelectors.artist.value;
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>You like the song ${user.song} by the artist ${user.artist}.</p>`
  );
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.song.value = "";
  DOMSelectors.artist.value = "";
});/