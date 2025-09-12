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
function calculate() {
    try {
        display.textContent = eval(display.textContent)//.replace('+','/').replace('x','*'));
    }
    catch {
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