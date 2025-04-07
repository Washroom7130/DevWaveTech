document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("forget-password-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const emailInput = document.getElementById("email");
            const email = emailInput ? emailInput.value.trim() : "";
            
            if (email) {
                alert("A password reset link has been sent to " + email);
                form.reset();
            } else {
                alert("Please enter a valid email address.");
                emailInput.focus();
            }
        });
    } else {
        console.error("Forget password form not found.");
    }
});
