const root = document.getElementById("root");
const node = document.createElement('div');
node.className = 'body';

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let words = ['OLD', 'FOX', 'COOL', 'DUDE', 'WARNING', 'TEACHING', 'BATH', 'CIGARETTE', 'POSSIBILITY'];

let wordDiv = document.getElementById('word');
const word = words.random()
wordDiv.textContent = word

let divsArr = []; 

let lettersLeft = word;

const fonts = ['Droid Sans', 'Droid Serif', 'Roboto', 'ZCOOL XiaoWei', 'Poppins', 'Ubuntu', 'Paytone One',
    'Julius Sans One', 'Aldrich', 'Michroma', 'Electrolize', 'Anaheim', 'Allerta Stencil', 'Syncopate']

WebFont.load({
    google: {
      families: fonts
    }
  });


for (letter of shuffle(alphabet)) {
    let block = document.createElement('div');
    block.className = 'letter' + alphabet.indexOf(letter);
    block.innerText = letter;
    block.style.width = '100px';
    block.style.height = '100px';
    block.style.color = 'white';
    let randomFont = fonts.random()
    block.style.fontFamily = `"${randomFont}", sans-serif`
    block.style.background = 'black';
    block.onclick = () => {
        if (lettersLeft[0] === block.textContent) {
            block.style.background === 'gray' ? block.style.background = 'black' : block.style.background = 'gray';
            block.style.transition = 'background 1s';
            lettersLeft = lettersLeft.slice(1)
            if (lettersLeft.length === 0) alert('You won!') 
        }
    }
    node.appendChild(block)
}


root.appendChild(node)

