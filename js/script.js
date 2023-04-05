const btnChangeColor = document.getElementById('changeColor');
const colorName = document.getElementById('colorName');

btnChangeColor.addEventListener('click', changeColor)


let colors = ['#f1b3e2','#7b3030','#69b2ce','#6157a5','#383c4a','#194747','#3b1260']

// let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
// let hexColor = '#';
function changeColor(){
  const randomNumber = randomColors();
 
  colorName.textContent = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
 
 
}


function randomColors(){
    return Math.floor(Math.random() * colors.length)
}