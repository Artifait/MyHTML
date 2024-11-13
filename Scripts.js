function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Рассчёт углов для каждой стрелки
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;

    document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
}

function placeNumbers() {
    const clock = document.querySelector('.clock');
    const radius = (clock.offsetWidth - 40) / 2; // Радиус размещения цифр
    const centerX = (clock.offsetWidth - 30) / 2;
    const centerY = (clock.offsetHeight - 40) / 2;

    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI / 6); // Смещение на 3 часа (π/2 = 90 градусов)
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const numberElem = document.createElement('div');
        numberElem.className = 'number';
        numberElem.style.left = `${x}px`;
        numberElem.style.top = `${y}px`;
        numberElem.textContent = i;

        clock.appendChild(numberElem);
    }
}

placeNumbers();
updateClock();

setInterval(updateClock, 1000);