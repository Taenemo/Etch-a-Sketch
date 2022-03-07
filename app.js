const board = document.querySelector('.divContainer')
const blackBtn = document.querySelector('#blackColorBtn')
const rgbBtn = document.querySelector('#rgbColorBtn')
const eraserBtn = document.querySelector('#eraserBtn')
const clearBtn = document.querySelector('#clearBtn')
const boardSizesBtn = document.querySelector('#boardSizesBtn')

// Function that create div and append it to the DOM
const createDiv = (size) => {
    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement('div')
        board.style.gridTemplateColumns = `repeat(${size},1fr)`
        board.style.gridTemplateRows = `repeat(${size},1fr)`
        board.appendChild(div).classList.add('box')
    }
}
createDiv(16)

const blackColor = () => {
    const boxs = document.querySelectorAll('.box')
    blackBtn.addEventListener('click',() => {
        boxs.forEach(boxs => boxs.addEventListener('mouseover',() => {
            boxs.style.backgroundColor = 'black'
        }))
    })
}
blackColor()

const rgbColor = () => {
    const boxs = document.querySelectorAll('.box')
    rgbBtn.addEventListener('click',() => {
        boxs.forEach(boxs => boxs.addEventListener('mouseover',() => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            boxs.style.backgroundColor = `rgb(${R},${G},${B})`
        }))
    })
}
rgbColor()

const eraser = () => {
    const boxs = document.querySelectorAll('.box')
    eraserBtn.addEventListener('click',() => {
        boxs.forEach(boxs => boxs.addEventListener('mouseover',() => {
            boxs.style.backgroundColor = 'white'
        }))
    })
}
eraser()

const clear = () => {
    const boxs = document.querySelectorAll('.box')
    clearBtn.addEventListener('click',() => {
        boxs.forEach(boxs => boxs.style.backgroundColor = 'white')
    })
}
clear()

const boardSize = () => {
    boardSizesBtn.addEventListener('click',() => {
        let user = prompt("WHAT SIZE?")
        if(user === null || user === undefined || user === "") {
            const boxs = document.querySelectorAll('.box')
            boxs.forEach(boxs => boxs.remove())
            createDiv(16)
            blackColor()
            rgbColor()
            eraser()
            clear()
        }
        else if(user > 100) {
            alert("TOO MANY BOXS")
        }
        else if(user < 2) {
            alert("NOT ENOUGH BOXS")
        }
        else{
            const boxs = document.querySelectorAll('.box')
            boxs.forEach(boxs => boxs.remove())
            createDiv(user)
            blackColor()
            rgbColor()
            eraser()
            clear() 
        }
    })
}
boardSize()