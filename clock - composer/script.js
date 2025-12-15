function updateClock() {
    const now = new Date();
    
    // Obtener horas, minutos y segundos
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Calcular los grados para cada manecilla
    // Cada hora = 30 grados (360 / 12)
    // Cada minuto añade 0.5 grados a la manecilla de horas (30 / 60)
    const hourDegrees = (hours * 30) + (minutes * 0.5);
    
    // Cada minuto = 6 grados (360 / 60)
    // Cada segundo añade 0.1 grados a la manecilla de minutos (6 / 60)
    const minuteDegrees = (minutes * 6) + (seconds * 0.1);
    
    // Cada segundo = 6 grados (360 / 60)
    const secondDegrees = seconds * 6;
    
    // Aplicar las rotaciones
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');
    
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Actualizar inmediatamente al cargar la página
updateClock();

