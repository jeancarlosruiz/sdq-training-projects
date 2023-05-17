const footer = document.querySelector('.footer');
const author = document.querySelector('.author');
const authorImg = document.querySelector('.author-img');
const bubbleMsg = document.querySelector('.bubble-msg ');
const icons = document.querySelectorAll('.icon-programming');
const overlay = document.querySelector('.overlay');

let click = new Audio('../audio/click.mp3');

// FUNCTIONS //

const toggleAttribution = (entries) => {
  const [entry] = entries;

  if (entry.isIntersecting) {
    author.classList.remove('hidden-attribution');
    overlay.classList.remove('hidden-overlay');
  } else {
    author.classList.add('hidden-attribution');
    overlay.classList.add('hidden-overlay');
    bubbleMsg.classList.remove('bubble-msg-toggle');
    icons.forEach((icon) => {
      icon.classList.remove('animation');
    });
  }
};

const closeOverlay = function () {
  overlay.classList.add('hidden-overlay');
  bubbleMsg.classList.remove('bubble-msg-toggle');
  icons.forEach((icon) => {
    icon.classList.remove('animation');
  });
  author.classList.add('hidden-attribution');
};

const footerObserver = new IntersectionObserver(toggleAttribution, {
  root: null,
  threshold: 0.3,
});

footerObserver.observe(footer);

const toggleBubble = () => {
  bubbleMsg.classList.toggle('bubble-msg-toggle');
  icons.forEach((icon) => {
    icon.classList.toggle('animation');
  });
  overlay.classList.remove('hidden-overlay');
  click.play();
};

// EVENTS //

authorImg.addEventListener('click', toggleBubble);

overlay.addEventListener('click', closeOverlay);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden-overlay')) {
    closeOverlay();
  }
});
