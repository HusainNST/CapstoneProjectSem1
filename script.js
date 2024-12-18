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

// For toggling the navbar elements for responsiveness
function toggleButton() {
  const nav = document.querySelector(".pageLinks");
  nav.classList.toggle("hidden");

  const socials = document.querySelector(".socials");
  socials.classList.toggle("hidden");
}

// For automatically hiding the pageLinks when going to a small screen.
function handleMediaQueryChange(query) {
  const nav = document.querySelector(".pageLinks");
  const socials = document.querySelector(".socials");

  if (query.matches) {
    nav.classList.add("hidden");
    socials.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
    socials.classList.remove("hidden");
  }
}

const mediaQuery = window.matchMedia("(max-width: 720px)");
mediaQuery.addEventListener("change", handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
