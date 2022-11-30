const DOMSelectors = {
  song: document.getElementById("song"),
  artist: document.getElementById("artist"),
  enter: document.getElementById("enter"),
  clear: document.getElementById("clear"),
  results: document.getElementById("results"),
  div: document.getElementById("div"),
  innerHTML: document.getElementById("innerHTML"),
  innerHTMLButton: document.getElementById("innerHTMLButton"),
};

const user = {
  song: "",
  artist: "",
};

DOMSelectors.enter.addEventListener("click", function (song, artist, html) {
  user.song = DOMSelectors.song.value;
  user.artist = DOMSelectors.artist.value;
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p id="innerHTML">You like the song ${user.song} by the artist ${user.artist}.</p>
    <button type="button" id="innerHTMLButton">Remove</button>`
  );
  DOMSelectors.song.value = "";
  DOMSelectors.artist.value = "";

  let innerHTMLButton = document.getElementById("innerHTMLButton");
  let innerHTML = document.getElementById("innerHTML");
  innerHTMLButton.addEventListener("click", function () {
    innerHTML.remove();
    innerHTMLButton.remove();
  });
});

DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.song.value = "";
  DOMSelectors.artist.value = "";
  let innerHTML = document.getElementById("innerHTML");
  innerHTML.remove();
  let innerHTMLButton = document.getElementById("innerHTMLButton");
  innerHTMLButton.remove();
});
