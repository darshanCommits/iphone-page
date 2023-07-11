const textToRender = {
  'Fight Club': {
    quote: 'The first rule of Fight Club is: You do not talk about Fight Club.',
    image: 'fight_club_image.jpg',
  },
  'Breaking Bad': {
    quote: 'I am the one who knocks!',
    image: 'breaking_bad_image.jpg',
  },
  Monster: {
    quote: 'Munch-Munch, Chomp-Chomp, Gobble-Gobble, Gulp.',
    image: 'monster_image.jpg',
  },
  Dark: {
    quote:
      'What if everything that came from the past was influenced by the future.',
    image: 'dark_image.jpg',
  },
  Lookism: {
    quote: 'What are you looking at? You little bitch.',
    image: 'lookism_image.jpg',
  },
  Interstellar: {
    quote: "We'll find a way. We always have.",
    image: 'interstellar_image.jpg',
  },
  'Attack on Titan': {
    quote:
      "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
    image: 'attack_on_titan_image.jpg',
  },
};

const bgColors = {
  black: 215,
  red: 335,
  green: 140,
  cyan: 180,
  purple: 260,
  blue: 235,
};

function updateTextContent(device) {
  if (prevDev === device) return;

  const html = getHtmlMarkup(device);
  info.classList.remove('fade-in');
  info.classList.add('fade-out');

  setTimeout(() => {
    info.classList.remove('fade-out');
    info.classList.add('fade-in');
    info.innerHTML = html;
  }, 300);
  prevDev = device;
}

const images = Object.entries(textToRender).map((x) => {
  return {
    alt: x[0],
    src: x[1].image,
  };
});
console.log(images);
const setImage = (imgArray) => {};

const getHtmlMarkup = (device) => {
  const deviceText = textToRender[device];
  const quote = deviceText.quote;

  return `
      <h2 id="title">${device}</h2>
      <p id="quote">${quote}</p>
        `;
};

const getDeviceNameArray = (elem) =>
  elem.map((x) => x.getAttribute('data-device'));

function applyDynamicCSS(elem, hue) {
  const saturation = '20%';
  const lightness = ['50%', '35%', '25%', '20%', '10%'];
  const colorHSL = generateColorHSL(hue, saturation, lightness);
  elem.style.backgroundImage = colorHSL;
}

const generateColorHSL = (hue, saturation, lightnessArray) =>
  `radial-gradient(circle at center, ${lightnessArray
    .map((light) => `hsl(${hue}, ${saturation}, ${light})`)
    .join(', ')})`;
