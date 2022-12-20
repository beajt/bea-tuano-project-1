// Grab form with JS

// Add event listener to form
const formEl = document.getElementById("form-contact");
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  alert(
    `Thank you ${name.value}! We have received your submission saying ${message.value} and will email you at ${email.value}`
  );
  console.log(name, email);
  // prevent default behaviour/page refresh
});
