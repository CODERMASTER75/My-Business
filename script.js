const orderBtn = document.querySelector('#submit button');

orderBtn.addEventListener('click', function() {
    // This is your 'boolean' - it adds the class if it's not there
    document.body.classList.add('show-confetti');
    
    // Optional: Alert the user so they know it worked!
    console.log("Confetti Triggered!");
});