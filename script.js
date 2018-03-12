const countdown = document.querySelector('.countdown');

// Set launch date
const launchDate = new Date('January 1, 2019 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
    // Get today's date and time in ms
    const now = new Date().getTime();

    // Distance from now to the launch date 
    const distance = launchDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // Display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hrs</span></div>
    <div>${mins}<span>Min</span></div>
    <div>${seconds}<span>Sec</span></div>
    `;

    // If date passed
    if(distance < 0) {
        // Stop countdown
        clearInterval(intvl);
        // Style & Output
        countdown.style.color = '#332333';
        countdown.innerHTML = 'Launced';
    }
}, 1000);