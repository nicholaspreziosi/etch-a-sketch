let dimensions = prompt("Square Dimensions?");

function createSquare () {
    window.onload = function() {
        for (let i = 0; i < dimensions; i++) {
            const div = document.createElement('div');
            const container = document.querySelector('#container');
            container.appendChild(div);
            div.classList.add('div');
        };
        const divs = document.querySelectorAll('.div');
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('mouseover', () => {
                divs[i].classList.add('red');
            });
        };
    }
};


 
createSquare();