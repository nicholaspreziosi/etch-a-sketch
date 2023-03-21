let size = 16;

window.onload = function() {
    createSquare();
    colorDivs();
    reset();
    changeDimensions();
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
            divs[i].style.cssText = "background-color: black;"
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
