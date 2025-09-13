const display = document.getElementById('display');
function clearDisplay() {
    display.textContent = '0';
}
function delChar() {
    display.textContent = display.textContent.slice(0,-1) || '0';
}
function append(value) {
    if(display.textContent === '0') 
        display.textContent = "";
    display.textContent += value;
}
// function calculate() {
//     try {
//         display.textContent = eval(display.textContent)//.replace('+','/').replace('x','*'));
//     }
//     catch {
//         display.textContent = 'Error';
//     }
// }

function calculate() {
    try {
        let expression = display.textContent;

    // Regex để tìm một số theo sau là dấu %
        const regex = /(\d+\.?\d*)%/g;

    // Thay thế các phép tính phần trăm. Ví dụ: "200%"" thành "(200/100)"
        expression = expression.replace(regex, '($1/100)');

    // Thay thế các phép tính "số * số%" thành "số * (số/100)"
        const multRegex = /(\d+\.?\d*)\s*\*\s*(\d+\.?\d*)%/g;
        expression = expression.replace(multRegex, '$1 * ($2/100)');

        display.textContent = eval(expression);
    } 
    catch (error) {
        display.textContent = 'Error';
    }
}

document.addEventListener('keydown',(e) => {
    if((/[0-9+\-*/.%]/).test(e.key)){
        append(e.key);
    }
    else if (e.key === 'Enter') {
        calculate();
    }
    else if (e.key === 'Backspace') {
        delChar();
    }
    else if (e.key === 'Escape') {
        clearDisplay();
    }

})
