let size = 16;
let colorValue = 255;

window.onload = function() {
    createSquare();
    colorDivs();
    reset();
    changeDimensions();
    updateColorPickerButton();
    toggleButtons();
};

function createSquare () {
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        const container = document.querySelector('#container');
        container.appendChild(div);
        div.classList.add('div');
    };
    const container = document.querySelector('#container');
    container.setAttribute('style', `grid-template-rows: repeat(${size}, auto); grid-template-columns: repeat(${size}, auto)`);
};

function colorDivs() {
    const divs = document.querySelectorAll('.div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseover', () => {
            if (document.querySelector('#colorchoice').classList.contains('active')) {
                let color = document.querySelector('#colorpicker').value;
                divs[i].style.cssText = `background-color: ${color};`;
            }
            else if (document.querySelector('#random').classList.contains('active')) {
                let color = randomColor();
                divs[i].style.cssText = `background-color: ${color};`;
            }
            else if (document.querySelector('#greyscale').classList.contains('active')){
                console.log(divs[i].style.backgroundColor);
                let color = greyscale(colorValue);
                divs[i].style.cssText = `background-color: ${color};`;
            }
        });
    };
}

function reset() {
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        const divs = document.querySelectorAll('.div');
        for (let i = 0; i < divs.length; i++) {
                divs[i].style.cssText = "background-color: white;"
        };
    })
}
 
function changeDimensions() {
    const dimensions = document.querySelector('#dimensions');
    dimensions.addEventListener('click', () => { 
        do {
            size = prompt("Dimensions?");
        }
        while (size > 100 || size < 1);
        const container = document.querySelector('#container');
        container.textContent = '';
        createSquare();
        colorDivs();
    });
}


function randomColor () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function greyscale (colorValue) {
    if (colorValue >= 0) {
        colorValue = colorValue - 25.5;
    }
    return "rgb(" + colorValue + "," + colorValue + "," + colorValue + ")";
}

function toggleButtons () {
    const colors = document.querySelectorAll('.color');
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', () => {
            colors[i].classList.toggle('active');
            colorRandomButton();
            colorColorPickerButton();
        });
    };

}

function updateColorPickerButton () {
    let colorpicker = document.querySelector('#colorpicker');
    colorpicker.addEventListener('input', () => {
        const colorchoice = document.querySelector('#colorchoice');
        if (colorchoice.classList.contains('active')) {
            let color = document.querySelector('#colorpicker').value;
            colorchoice.style.cssText = `background-color: ${color};`;
            return;
        }
    })
}

function colorColorPickerButton () {
    const colorchoice = document.querySelector('#colorchoice');
    if (colorchoice.classList.contains('active')) {
        let color = document.querySelector('#colorpicker').value;
        console.log(color);
        colorchoice.style.cssText = `background-color: ${color};`;
        colorchoice.style.color = 'white';
    }
    else if (!colorchoice.classList.contains('active')) {
        colorchoice.style.cssText = 'white';
    }
}


function colorRandomButton () {
    const random = document.querySelector('#random');
        if (random.classList.contains('active')) {
            let color = randomColor();
            random.style.cssText = `background-color: ${color};`;
            random.style.color = 'white';
        }
        else if (!random.classList.contains('active')) {
            random.style.cssText = 'white';
        }
}