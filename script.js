const container = document.querySelector('.container')
const changeSizeButton = document.querySelector('.change-size')
const resetButton = document.querySelector('.reset-button')
const DEFAULT_GRID_SIZE = 16

changeSizeButton.addEventListener('click', changeGridSize)
resetButton.addEventListener('click', resetGrid)
generateGrid(DEFAULT_GRID_SIZE)

function generateGrid(gridSize) {
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize} , 1fr)`
    let height = container.offsetHeight / gridSize
    let width = container.offsetWidth / gridSize
    for (let i = 1; i <= gridSize ** 2; i++) {
        let div = document.createElement('div')
        div.classList.add('square')
        div.style.height = height + 'px'
        div.style.width = width + 'px'
        div.addEventListener('mouseover', changeColor)
        container.appendChild(div)
    }
}

function changeGridSize() {
    let size = +prompt('Enter Number (10-100) :', DEFAULT_GRID_SIZE)

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
