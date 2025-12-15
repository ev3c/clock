function setClock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30);
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);

setClock(); // Llamar inmediatamente para no esperar 1 segundo

