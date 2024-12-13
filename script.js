// Header typing effect
const headerH1 = document.querySelector("header h1");
const text = headerH1.textContent;
headerH1.textContent = "";
let index = 0;

function type() {
  if (index < text.length) {
    headerH1.textContent += text.charAt(index);
    index++;
    setTimeout(type, 75);
  }
}

type();

