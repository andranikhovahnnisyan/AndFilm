const signUpDiv = document.getElementById("register-close-div-sign-up-btn");
const signInDiv = document.getElementById("register-close-div-sign-in-btn");
const closeDiv = document.getElementById("register-close-div");
const closeDivSignUp = document.getElementById("register-close-div-sign-up");
const closeDivSignIn = document.getElementById("register-close-div-sign-in");
const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const girlDiv = document.getElementById("girl-div");




signUpDiv.addEventListener ('click', () => {
closeDiv.classList.add('active');
closeDivSignUp.classList.add('active');
closeDivSignIn.classList.add('active');
signIn.classList.add('active');
signUp.classList.add('active');
girlDiv.classList.add('active'); 
});

signInDiv.addEventListener ('click', () => {
closeDiv.classList.remove('active');
closeDivSignUp.classList.remove('active');
closeDivSignIn.classList.remove('active');
signIn.classList.remove('active');
signUp.classList.remove('active'); 
girlDiv.classList.remove('active'); 
});
