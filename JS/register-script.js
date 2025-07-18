const isAlphanumeric = (password) =>{
    let hasAlphabet = false;
    let hasNumber = false;
    for(let i = 0; i < password.length; i++){
        if((password[i] >= 'A' && password[i] <= 'Z') || (password[i] >= 'a' && password[i] <= 'z')){
            hasAlphabet = true;
        }

        if(password[i] >= '0' && password[i] <= '9'){
            hasNumber = true;
        }
    }
    return hasAlphabet && hasNumber;
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById("terms").checked;

    if (name.length <= 6) {
        alert("Name must be more than 6 characters.")
        return;
    }

    if (!email.endsWith(".com")) {
        alert("Email must be valid and end with .com")
        return;
    }

    if (!isAlphanumeric(password)) {
        alert("Password must be alphanumeric and more than 6 characters.")
        return;
    }

    if (age <= 0) {
        alert("Age must be filled in correctly.")
        return;
    }

    if (!gender) {
        alert("Gender must be selected.")
        return;
    }

    if (!terms) {
        alert("You must agree to the terms and conditions.")
        return;
    }

    else {
        alert("Registration successful!");
        document.getElementById("registerForm").submit();
    }
});
