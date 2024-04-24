
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
        window.location.href = 'signup.html'; 
    });

    exploreMoreBtn.addEventListener("click", function() {
        window.location.href = 'form.html' 
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

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var customAlert = document.getElementById("customAlert");
    
    
    if (username === "abhijeetkundu" && password === "1234567") {
        customAlert.style.backgroundColor = "#4CAF50"; 
        customAlert.innerHTML = "Login successful!"; 
       
    } else {
        customAlert.style.backgroundColor = "#f44336"; 
        customAlert.innerHTML = "Invalid username or password. Please try again.";
    }
    customAlert.style.display = "block"; 
            
            setTimeout(function() {
                customAlert.style.display = "none";
            }, 3000); 
});
let passtoggle=document.getElementById("password-toggle");
passtoggle.addEventListener("click",()=>{
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("toggleIcon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}

);



