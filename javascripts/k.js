window.onload = askForEmailNotifications;
function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    if (firstName === "" || lastName === "" || email === "") {
        alert("Please fill out all fields.");
        return false;
    }

    return true;
}