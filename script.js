let size = 16;


function createSquare () {
    window.onload = function() {
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            const container = document.querySelector('.container');
            container.appendChild(div);
            div.classList.add('div');
        };
    }
};


 


createSquare();
