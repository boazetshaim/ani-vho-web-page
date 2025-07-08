document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("תודה! ההודעה שלך נשלחה.");
  this.reset();
});
