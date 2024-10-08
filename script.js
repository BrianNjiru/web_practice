document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const nameinput = document.getElementById("name");
    const emailinput = document.getElementById("email");
    const confirmationMessage = document.getElementById("confirmationMessage");
    const formSummary = document.getElementById("formsummary");
    const displayName = document.getElementById("displayName");
    const displayEmail = document.getElementById("displayEmail");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            name: nameinput.value.trim(),
            email: emailinput.value.trim()
        };

        if(validateForm(formData)) {
            displayName.innerText = formData.name;
            displayEmail.innerText = formData.email;
            formSummary.style.display = "block";
            confirmationMessage.style.display = "block";

        };
    });

    function validateForm(Data) {
        let isValid = true;
        clearErrors();
        if (Data.name === "") {
            document.getElementById("nameError").innerText = "Name is required.";
            isValid = false;
        }

        if (!validateEmail(Data.email)) {
            document.getElementById("emailError").innerText = "Please enter a valid email.";
            isValid = false;
        }
        return isValid;
    };

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error")
        errorElements.forEach(error => error.innerText = "");
    }

    emailinput.addEventListener("input", function() {
        const email = emailinput.value.trim();
        if(!validateEmail(email)) {
            document.getElementById("emailError").innerText = "Invalid email format.";
        } else {
            document.getElementById("emailError").innerText = "";
        }
    });

});
