const DOMSelectors = {
  enter: document.getElementById("btn1"),
  remove: document.getElementById("remove"),
  song: document.getElementById("song"),
  artist: document.getElementById("artist"),
  input: document.getElementById("input"),
  results: document.getElementById("results"),
  div: document.getElementById("container"),
};

const user = {
  song: "",
  artist: "",
};

DOMSelectors.enter.addEventListener("click", function () {
  let song = DOMSelectors.song.value;
  DOMSelectors.div.insertAdjacentElement(
    "beforeend",
    `<p>You like the song ${song} by the artist ${song}.</p>`
  );
});

DOMSelectors.remove.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.input.value = "";
});
