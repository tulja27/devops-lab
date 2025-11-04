function submitForm() { 
    var firstName = document.getElementById("first").value; 
    var lastName = document.getElementById("last").value; 
    var email = document.getElementById("email").value; 
    var mobile = document.getElementById("mobile").value; 
    var gender = document.getElementById("gender").value; 
 
    var password = document.getElementById("password").value; 
    var repassword = document.getElementById("repassword").value; 
    if (!firstName || !lastName || !email || !password || !repassword || !mobile || !gender) { 
        alert("Please fill all the fields."); 
        return; 
    } 
    // Password match check 
    if (password !== repassword) { 
        alert("Passwords do not match!"); 
        return; 
    } 
    document.getElementById('confirmation').innerText = 
            'Thank you, ' + firstName + '! You have registered successfully.'; 
        console.log('Registration Details:', { Name: firstName, Email: email, Phone: mobile 
}); 
        document.getElementById("confirmation").style.color = "green"; 
    } 