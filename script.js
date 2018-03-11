const countdown = document.querySelector('countdown');

// Set launch date
const launchDate = new Date('January 1, 2019 13:00:00').getTime();

// Update every second
const intVl = setInterval(() => {
    console.log('hello');
}, 1000);