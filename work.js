
document.getElementById('loginButton').addEventListener('click', function() {
    
    this.style.backgroundColor = '#FFA500';
    this.style.color = '#000';

    
    setTimeout(() => {
        this.style.backgroundColor = '';
        this.style.color = '';
    }, 1000);
});


document.getElementById('signupButton').addEventListener('click', function() {
   
    this.style.backgroundColor = '#FFA500';
    this.style.color = '#000';

    
    setTimeout(() => {
        this.style.backgroundColor = '';
        this.style.color = '';
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function() {
    const getStartedBtn = document.querySelector(".btn#getStartedBtn");
    const exploreMoreBtn = document.querySelector(".btn#exploreMoreBtn");
    const signUpForm = document.querySelector(".form-section");

    getStartedBtn.addEventListener("click", function() {
        window.location.href = 'signup.html'; // Show the sign-up form
    });

    exploreMoreBtn.addEventListener("click", function() {
        window.location.href = 'form.html' // Show the sign-up form
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.querySelector('.login a:first-child');
    var signUpButton = document.querySelector('.login a:last-child');

    loginButton.addEventListener('click', function () {
        window.location.href = 'form.html'; 
    });

    signUpButton.addEventListener('click', function () {
        window.location.href = 'signup.html'; 
    });
});

