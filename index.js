let currentValue = '0';
let display = document.getElementById('screen');

function appendToScreen(value) {
    if (currentValue === '0') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateScreen();
}

function clearScreen() {
    currentValue = '0';
    updateScreen();
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        updateScreen();
    } catch (error) {
        currentValue = 'Error';
        updateScreen();
    }
}

function updateScreen() {
    const screen = document.getElementById('screen');
    screen.textContent = currentValue;
}
function goBack() {
    screen.value = screen.value.slice(0, -1);
}
