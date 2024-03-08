document.addEventListener('DOMContentLoaded', function () {
    const colorButton = document.getElementById('colorButton');
    const hexValueDisplay = document.getElementById('hexValue');
    const colorHistoryList = document.getElementById('colorHistoryList');
    let colorHistory = []; // Array to store color history

    colorButton.addEventListener('click', function () {
        const randomColor = getRandomColor();
        changeBackgroundColor(randomColor);
        updateHexValue(randomColor);
        addColorToHistory(randomColor);
    });

    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    function updateHexValue(color) {
        hexValueDisplay.innerText = 'Current Color Hex Value: ' + color;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function addColorToHistory(color) {
        if (!colorHistory.includes(color)) {
            colorHistory.push(color);
            const colorItem = document.createElement('li');
            colorItem.textContent = color;
            colorItem.style.color = color;
            colorItem.addEventListener('click', function () {
                changeBackgroundColor(color);
                updateHexValue(color);
            });
            colorHistoryList.appendChild(colorItem);
        }
    }
});
