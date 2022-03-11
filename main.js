// Liste des constantes | elements DOM
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Génération des events
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

// Fonction de copie du mot de passe dans le clipboard
clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Mot de passe copié dans le presse-papier");
});

// Génération de mot de passe
function generatePassword(lower, upper, number, symbol, length) {
  // 1. Initialisation d'une variable password
  // 2. Filtrer les types non-checkés
  // 3. Boucler sur la longueur de l'appel de la fonction de génération pour chaque type
  // 4. AJouter le mot de passe final à la variable password et faire un return du résultat

  /* 1. Initialisation d'une variable password */
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  /* 2. Filtrer les types non-checkés */
  if (typesCount === 0) {
    return "";
  }

  /* 3. Boucler sur la longueur de l'appel de la fonction de génération pour chaque type */
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  /* AJouter le mot de passe final à la variable password et faire un return du résultat */
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}
// Fonctions de génération

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "/*-+.,$£^¨*µ%!§:/;,?+=}°)]@^_|[({#~&";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Panneau avec les réseaux sociaux
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
