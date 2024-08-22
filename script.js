function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('clock').textContent = timeString;

    let greeting;
    let backgroundColor;

    if (hours >= 5 && hours < 12) {
        greeting = "Good Morning!";
        backgroundColor = "#FFFAE3"; // Light yellow
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon!";
        backgroundColor = "#FFE6E6"; // Light pink
    } else if (hours >= 17 && hours < 20) {
        greeting = "Good Evening!";
        backgroundColor = "#E6E6FF"; // Light blue
    } else {
        greeting = "Good Night!";
        backgroundColor = "#2E2E2E"; // Dark gray
    }

    document.getElementById('greeting').textContent = greeting;
    document.body.style.backgroundColor = backgroundColor;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock and background immediately
updateClock();
