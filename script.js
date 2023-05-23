// script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Do something with the form data (e.g., send it to a server)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the form
    form.reset();
  });
});
