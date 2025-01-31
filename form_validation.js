document.getElementById("contactForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Name Validation
    const name = document.getElementById("your_name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email Validation
    const email = document.getElementById("your_email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Message Validation
    const message = document.getElementById("your_message").value.trim();
    if (message === "") {
        document.getElementById("messageError").innerText = "Message cannot be empty.";
        isValid = false;
    } else {
        document.getElementById("messageError").innerText = "";
    }

    // If validation fails, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
    else{
        document.getElementById("form_responce").innerText = "Your form is submited successfully!";
    }

});