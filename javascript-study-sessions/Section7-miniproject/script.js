function generateHexColor() {
    let hex = '#';
    let characters = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
};

function generateHTML(){
    const palleteDiv = document.querySelector('.container');
    palleteDiv.innerHTML = '';
    let colors = [];

    for (let i = 0; i < 9; i++) {
        colors.push(generateHexColor());
    }
    for (const color of colors) {
        let colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.background = color;
        colorBox.textContent = color;
        palleteDiv.appendChild(colorBox);
    }
};

generateHTML();