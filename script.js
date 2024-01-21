const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const email = document.getElementById("email")
const password2 = document.getElementById("password2")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})


//checking all inputs
const checkInputs = () =>{
    //get the values from the inputs
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank')
    }else {
        //add success class
        setSuccessFor(username)
    }

    //same for all inputs

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')

    } else if (passwordValue.length <= 5) {
        setErrorFor(password, 'Password should contain atleast 6 characters')

    }else if (passwordValue.length >= 21) {
        setErrorFor(password, 'Password should be not more than 20 characters')

    }else {
        setSuccessFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password Check cannot be blank')
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, "Your password didn't match")
    } else {
        setSuccessFor(password2)
    }
}

// function for error
const setErrorFor = (input, message) => {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small 
    small.innerText = message;

    //add error class  
    formControl.className = 'form-control error';
}


// function for success
const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//function for valid email
const isEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
