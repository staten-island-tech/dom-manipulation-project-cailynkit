const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"), //class
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
  background: document.querySelector("#big-black-box"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "this is a red box";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
