const textToRender = {
  iPhone: {
    heading: "Comptez sur notre service de réparation d'iPhone à Paris.",
    para: "Faites confiance à nos experts qualifiés en réparation d'iPhone à Paris qui sont là pour vous offrir un service fiable et professionnel.",
  },
  iPad: {
    heading: 'Confiez la réparation de votre iPad à notre service à Paris',
    para: 'SOSmaster vous propose de faire une réparation de votre tablette iPad à Paris. SOSmaster s’en charge au plus vite.',
  },
  MacBook: {
    heading: 'Réparation de votre Macbook Pro et Macbook Air à Paris',
    para: 'Contactez-nous pour toute question sur la réparation de votre MacBook. Nous sommes là pour vous aider.',
  },
  iMac: {
    heading: 'Réparation iMac à Paris',
    para: 'La réparation d’iMac est un processus de réparation, de restauration ou de remplacement du matériel et des logiciels de votre iMac.',
  },
  Computer: {
    heading: 'Réparation pour ordinateur à Paris',
    para: 'Faites confiance à nos experts en réparation d’ordinateur à Paris.',
  },
  'Data Recovery': {
    heading: 'SOSmaster spécialiste en récupération de données à Paris',
    para: 'Récupération de données sur différents appareils : HDD, PC, iMac, Macbook, clé USB, carte SD, SSD, téléphone, tablette, iPhone, iPad, disque SAS et Freebox.',
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

const getHtmlMarkup = (device) => {
  const deviceText = textToRender[device];
  const heading = deviceText.heading;
  const para = deviceText.para;

  return `
      <h2 id="title">${device}</h2>
      <h3 id="heading">${heading}</h3>
      <p id="para">${para}</p>
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
