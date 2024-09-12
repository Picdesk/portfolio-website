document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  sendEmail(); // Call the sendEmail function
});

function sendEmail() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before sending your message.");
    return;
  }

  let params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceId = "service_fs71b2d";
  const tempId = "template_e27aon7";

  emailjs
    .send(serviceId, tempId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Message sent successfully");
    })
    .catch((err) => console.log(err));
}
