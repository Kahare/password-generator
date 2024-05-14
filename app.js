document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var password = (firstName.slice(0, 3) + lastName.slice(-3) + "@2024").toLowerCase();
    document.getElementById("password-output").textContent = "Generated Password: " + password;
  });