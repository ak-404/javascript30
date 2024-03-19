const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    const minute = now.getMinutes();
    const minuteDegrees = (minute / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    
    const second = now.getSeconds();
    const secondDegrees = (second / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);