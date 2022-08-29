//---------------------------//
// VARIABLES

const encryptInput = document.getElementById('encrypt-input');
const encryptedResult = document.getElementById('encrypted-result');

const decryptInput = document.getElementById('decrypt-input');
const decryptedResult = document.getElementById('decrypted-result');

//---------------------------//
// EVENT LISTENERS

loadEventListeners();
function loadEventListeners() {
  encryptInput.addEventListener('keyup', encryptText);
  decryptInput.addEventListener('keyup', decryptText);
}

//---------------------------//
// FUNCTIONS

function encryptText(e) {
  let code = {
    p: 'a', r: 'b', i: 'c', n: 'd',
    c: 'e', e: 'f', s: 'g', a: 'h',
    z: 'i', y: 'j', x: 'k', w: 'l',
    v: 'm', u: 'n', t: 'o', q: 'p',
    o: 'q', m: 'r', l: 's', k: 't',
    j: 'u', h: 'v', g: 'w', f: 'x',
    d: 'y', b: 'z', á: 'ó', é: 'ú',
    í: 'á', ó: 'é', ú: 'í'

  }
  let text = encryptInput.value;
  let regex = /\s|[¿?¡!,.()]|[\d]/g;

  let textArray = text.toLowerCase().split('');

  let cipher = [];

  textArray.forEach(letter => {
    if (letter.match(regex)) {
      cipher.unshift(letter);
    }
    cipher.unshift(code[letter]);
  });


  if (encryptInput.value !== '') {
    document.getElementById('result-encrypt').classList.remove('hidden');
  } else {
    document.getElementById('result-encrypt').classList.add('hidden');
  }

  encryptedResult.innerHTML = cipher.join('');
  e.preventDefault();
}

function decryptText(e) {
  let code = {
    a: 'p', b: 'r', c: 'i', d: 'n',
    e: 'c', f: 'e', g: 's', h: 'a',
    i: 'z', j: 'y', k: 'x', l: 'w',
    m: 'v', n: 'u', o: 't', p: 'q',
    q: 'o', r: 'm', s: 'l', t: 'k',
    u: 'j', v: 'h', w: 'g', x: 'f',
    y: 'd', z: 'b', ó: 'á', ú: 'é',
    á: 'í', é: 'ó', í: 'ú'
  }
  let text = decryptInput.value;
  let regex = /\s|[¿?¡!,.()]/g;

  let textArray = text.toLowerCase().split('');

  let cipher = [];

  textArray.forEach(letter => {
    if (letter.match(regex)) {
      cipher.unshift(letter);
    }
    cipher.unshift(code[letter]);
  });

  decryptedResult.innerHTML = cipher.join('');

  if (decryptInput.value !== '') {
    document.getElementById('result-decrypt').classList.remove('hidden');
  } else {
    document.getElementById('result-decrypt').classList.add('hidden');
  }

  e.preventDefault();
}