const textToRender = {
  iPhone: {
    heading: "Comptez sur notre service de réparation d'iPhone à Paris.",
    para: "Faites confiance à nos experts qualifiés en réparation d'iPhone à Paris qui sont là pour vous offrir un service fiable et professionnel."
  },
  iWatch: {
    heading: "Service de réparation iWatch à Paris",
    para: "Notre équipe d'experts est dédiée à la réparation des montres iWatch à Paris. Confiez-nous votre iWatch et nous la réparerons de manière rapide et efficace."
  },
  iPad: {
    heading: "Confiez la réparation de votre iPad à notre service à Paris",
    para: "SOSmaster vous propose de faire une réparation de votre tablette iPad à Paris. SOSmaster s’en charge au plus vite."
  },
  MacBook: {
    heading: "Réparation de votre Macbook Pro et Macbook Air à Paris",
    para: "Si vous avez des questions sur la réparation de votre MacBook Pro et MacBook Air, contactez-nous. Nous sommes là pour vous aider et répondre à toutes vos questions."
  },
  iMac: {
    heading: "Réparation iMac à Paris",
    para: "La réparation d’iMac est un processus de réparation, de restauration ou de remplacement du matériel et des logiciels de votre iMac."
  },
};

const bgColors = {
  black: 227,
  red: 335,
  green: 140,
  cyan: 180,
};

const getDeviceNameArray = (elem) => elem.map((x) => x.getAttribute("data-device"));

function applyDynamicCSS(hue) {
  const saturation = "20%";
  const lightness = ["50%", "35%", "25%", "20%", "10%"];
  const colorHSL = generateColorHSL(hue, saturation, lightness);
  document.body.style.backgroundImage = colorHSL;
}

const generateColorHSL = (hue, saturation, lightnessArray) =>
  `radial-gradient(circle at center, ${lightnessArray
    .map((light) => `hsl(${hue}, ${saturation}, ${light})`)
    .join(", ")})`;
