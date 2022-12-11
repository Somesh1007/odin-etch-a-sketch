const container = document.querySelector('.container')
const changeSizeButton = document.querySelector('.change-size')
const resetButton = document.querySelector('.reset-button')

changeSizeButton.addEventListener('click', changeGridSize)
resetButton.addEventListener('click', resetGrid)

let gridSize = 16
generateGrid(gridSize)

function generateGrid(gridSize) {
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 25px [col-start]);`
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            let div = document.createElement('div')
            div.classList.add('square')
            div.addEventListener('mouseover', changeColor)
            container.appendChild(div)
        }
    }
}

function changeGridSize() {
    let size = +prompt('Enter Number (10-100) :', 16)

    if (isNaN(size) || (size < 10 || size > 100)) {
        alert('Invalid Number')
        return
    } else {
        let boxes = document.querySelectorAll('.square')
        boxes.forEach(box => container.removeChild(box)) // Remove All Existing Boxes
        generateGrid(size)
    }
}


function resetGrid() {
    let boxes = document.querySelectorAll('.square-active')

    if (boxes.length <= 0) return
    boxes.forEach(box => box.classList.remove('square-active'))
}

function changeColor() {
    this.classList.add('square-active')
}
