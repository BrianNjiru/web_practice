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
    })

})
