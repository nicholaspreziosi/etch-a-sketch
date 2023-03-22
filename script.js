let size = 16;

window.onload = function() {
    createSquare();
    colorDivs();
    reset();
    changeDimensions();
    colorRandomButton();
    colorPicker();
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
                let color = colorPicker();
                divs[i].style.cssText = `background-color: ${color};`;  
            }
            else if (document.querySelector('#random').classList.contains('active')) {
                let color = randomColor();
                divs[i].style.cssText = `background-color: ${color};`;
            }
            else if (document.querySelector('#greyscale').classList.contains('active')){
                divs[i].style.cssText = 'background-color: #808080;';
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

function colorPicker () {
    let colorpicker = document.querySelector('#colorpicker');
    colorpicker.addEventListener('change', () => {
        let color = colorpicker.value;
        return color;
    })
}

function colorColorPickerButton () {
    const colorpicker = document.querySelector('#color');
    random.addEventListener('click', () => {
        if (colorpicker.classList.contains('active')) {
            colorpicker.style.cssText = 'blue';
            return;
        }
        else if (!colorpicker.classList.contains('active')) {
            colorpicker.style.cssText = `background-color: white`;
            return;
        }
    })
}

function colorRandomButton () {
    const random = document.querySelector('#random');
    random.addEventListener('click', () => {
        if (random.classList.contains('active')) {
            random.style.cssText = 'white';
            return;
        }
        else if (!random.classList.contains('active')) {
            let color = randomColor();
            random.style.cssText = `background-color: ${color};`;
            return;
        }
    })
}


function toggleButtons () {
    const colors = document.querySelectorAll('.color');
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', () => {
            colors[i].classList.toggle('active');     
        });
    };
}

