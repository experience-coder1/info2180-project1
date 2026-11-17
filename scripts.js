/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter form");
    var emailInput = document.getElementById("email");
    var message = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        // Stop the page from reloading; we are only simulating a submission
        event.preventDefault();

        var email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent =
                "Thank you! Your email address " + email + " has been added to our mailing list!";
            emailInput.value = "";
        }
    });
});