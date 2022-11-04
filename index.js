const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"), //class
  point: document.querySelector("point"),
  empty: document.querySelectorAll(".nothing"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.innerHTML = "this is a red box";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);
