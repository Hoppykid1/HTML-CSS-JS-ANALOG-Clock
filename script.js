function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12; // Convert to 12-hour format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondRotation = (360 / 60) * seconds;

    // Select clock hands and central dot elements
    const hourHand = document.querySelector('.clock .hand.hour');
    const minuteHand = document.querySelector('.clock .hand.minute');
    const secondHand = document.querySelector('.clock .hand.second');

    // Check if elements were found before updating their styles
    if (hourHand && minuteHand && secondHand) {
        hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
        minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
        secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
    }
}

// Call the function initially to set the clock hands to the current time
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);
