document.getElementById('getColor').onclick = newColorFind; 

function newColorFind(){

const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

let randomColorString = '#';

for (let x = 0; x < 6; x++){

    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]

    randomColorString += value
}

// 
const displayBox = document.getElementById('colorDisplay');
  if (displayBox) {
    displayBox.style.backgroundColor = randomColorString;
  }

const colorNameEl = document.getElementById('colorName');
  if (colorNameEl) {
    colorNameEl.innerText = randomColorString;
  }

}