// Deer Park Roof Repair Pros — mobile menu, FAQ, contact form placeholder
var SITE_PHONE_DISPLAY = "(281) 555-0147"; // DUMMY number — replace with the real Ringba number before real calls
var SITE_PHONE_TEL = "+12815550147";
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("mainnav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("form-result");
      if (note) note.textContent = "Thanks — this form is not live yet and nothing was sent. For the fastest help, call " + SITE_PHONE_DISPLAY + ".";
    });
  }
});
