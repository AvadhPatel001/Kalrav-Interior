(function() {
    emailjs.init("UfMw565viGSzprK1v");
})();

function validateForm() {
    let isValid = true;

    // Get input values
    let name = document.getElementById("your_name").value.trim();
    let email = document.getElementById("your_email").value.trim();
    let message = document.getElementById("your_message").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Reset errors
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    // Name validation
    if (name.length < 3) {
        nameError.innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (message.length < 10) {
        messageError.innerText = "Message must be at least 10 characters.";
        isValid = false;
    }

    return isValid;
}

function sendEmail(event) {
    event.preventDefault(); 
    if (!validateForm()) {
        return;
    }

    let name = document.getElementById("your_name").value;
    let email = document.getElementById("your_email").value;
    let message = document.getElementById("your_message").value;

    let params = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send("service_zhx1fsh", "template_1pajm34", params)
        .then(function(response) {
            alert("Your form is submited successfully!");
            document.getElementById("contactForm").reset(); 
        }, function(error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
}