function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
        window.location.href = "reservation.html";
    } else {
        alert("Please enter username and password");
    }
}

function reserve() {
    alert("Ticket Reserved Successfully!");
}

function cancel() {
    alert("Ticket Cancelled!");
}
