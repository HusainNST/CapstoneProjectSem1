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

// Pausing the scroll effect with manual intervension
const mainDiv = document.querySelector('.feedback .mainDiv');
const outerDiv = document.querySelector('.feedback .outerDiv');

mainDiv.addEventListener('scroll', () => {
  outerDiv.style.animationPlayState = 'paused';
  
  clearTimeout(mainDiv.resumeScroll);
  mainDiv.resumeScroll = setTimeout(() => {
    outerDiv.style.animationPlayState = 'running';
  }, 2000);
});

