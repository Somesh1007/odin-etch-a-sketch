const container = document.querySelector('.container')
let gridSize = 16

container.style.cssText = `grid-template-columns: repeat(${gridSize}, 25px [col-start]);`
for (let i = 1; i <= gridSize; i++) {
    for (let j = 1; j <= gridSize; j++) {
        let div = document.createElement('div')
        div.classList.add('square')
        div.classList.add(`square-${i}-${j}`)

        container.appendChild(div)
    }
}

