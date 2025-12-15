function setClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30);

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;
}

function createMarkers() {
    const clock = document.querySelector('.clock');
    
    for (let i = 0; i < 60; i++) {
        const marker = document.createElement('div');
        if (i % 5 === 0) {
            marker.classList.add('marker');
        } else {
            marker.classList.add('marker-sub');
        }
        marker.style.transform = `rotate(${i * 6}deg)`;
        
        clock.appendChild(marker);
    }
}

setInterval(setClock, 1000);
setClock(); // Initial call
createMarkers();

