const DEFAULT_SIZE = 100
const DEFAULT_COLOR = '#333333'
let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE
const grid = document.getElementById('grid')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function myFunction() {
    document.getElementById("idHOne").style.color = "red";
  }

  function setupGrid(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.classList.add('test')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      
    //   gridElement.onclick.classList.add('clicked')

      grid.appendChild(gridElement)
    }
  }
function changeColor(e){
    e.target.style.backgroundColor = currentColor
    // gridElement.classList.add('downColor')
}
//   function changeColor() {
//     //   if (e.type === 'mouseover') 
//     gridElement.addclass('colorDown');
//   }

  
    // if (e.type === 'mouseover' && !mouseDown) return
    // if (currentMode === 'rainbow') {
    //   const randomR = Math.floor(Math.random() * 256)
    //   const randomG = Math.floor(Math.random() * 256)
    //   const randomB = Math.floor(Math.random() * 256)
    //   e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    // } else if (currentMode === 'color') {
    //   e.target.style.backgroundColor = currentColor
    // } else if (currentMode === 'eraser') {
    //   e.target.style.backgroundColor = '#fefefe'
    // }
  
  window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    // activateButton(DEFAULT_MODE)
  }