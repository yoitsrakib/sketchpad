const container = document.querySelector('.container');
const main = document.querySelector('.main');
const buttons = document.querySelector('.buttons');
const redBtn = document.createElement('button');
const greenBtn = document.createElement('button');
const blackBtn = document.createElement('button');
const resetBtn = document.createElement('button');
const gridBtn = document.createElement('button');
const blueBtn = document.createElement('button');



let grid = (col, row) => {

    for (let i= 0; i < (col * row);i++) {
        const boxes = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        // boxes.style.border = "1px solid red";
     
        container.appendChild(boxes).classList.add('box');

    }

}

grid (40,40);

function black() { 
    
    const boxs = container.querySelectorAll('.box')
    blackBtn.style.backgroundColor = 'rgb(0,0,0)'
    blackBtn.style.height = '20px'
    blackBtn.style.width = '20px'
    blackBtn.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            const black = 'rgb(0,0,0)'
            box.style.background = black;
        }))
    })
    buttons.appendChild(blackBtn).classList.add('btn')
}

black();

function red() { 
    
    const boxs = container.querySelectorAll('.box')
    redBtn.style.backgroundColor = 'rgb(255,0,0)'
    redBtn.style.height = '20px'
    redBtn.style.width = '20px'

    redBtn.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            const red = 'rgb(255,0,0)'
            box.style.background = red;
        }))
    })
    buttons.appendChild(redBtn).classList.add('btn')
}

red();

function green() { 
    
    const boxs = container.querySelectorAll('.box')
    greenBtn.style.backgroundColor = 'rgb(0,128,0)'
    greenBtn.style.height = '20px'
    greenBtn.style.width = '20px'

    greenBtn.addEventListener('click', () => {
        boxs.forEach(e => e.addEventListener('mouseover', ()=> {
            const green = 'rgb(0,128,0)'
            e.style.background = green;
        }))
    })
    buttons.appendChild(greenBtn).classList.add('btn')
}

green();


const reset = () => {
    resetBtn.textContent = "Grid Size"
    main.appendChild(resetBtn).classList.add('btn');
    resetBtn.addEventListener('click', ()=> {
        grid(prompt('col'), prompt('row'));
    })

}

reset();



function blue() { 
    
    const boxs = container.querySelectorAll('.box')
    blueBtn.style.backgroundColor = 'rgb(0,0,255)'
    blueBtn.style.height = '20px'
    blueBtn.style.width = '20px'

    blueBtn.addEventListener('click', () => {
        boxs.forEach(e => e.addEventListener('mouseover', ()=> {
            const blue = 'rgb(0,0,255)'
            e.style.backgroundColor = blue;
        }))
    })
    buttons.appendChild(blueBtn).classList.add('btn')
}

blue();