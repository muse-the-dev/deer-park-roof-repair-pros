/* Deer Park Roof Repair Pros — shared JS.
   DUMMY PHONE — single configurable value.
   Replace SITE_PHONE_DISPLAY and SITE_PHONE_TEL with the real Ringba
   number when the user provides it. Do not hard-code a phone number
   anywhere else in the site; every call link uses these values. */
var SITE_PHONE_DISPLAY = "(281) 555-0147"; /* DUMMY number — not a real number */
var SITE_PHONE_TEL = "+12815550147"; /* DUMMY number — not a real number */

document.addEventListener("DOMContentLoaded", function () {
  // Apply the dummy phone to any element marked data-phone (safety net).
  document.querySelectorAll("[data-phone-display]").forEach(function (el) {
    el.textContent = SITE_PHONE_DISPLAY;
  });
  document.querySelectorAll("[data-phone-link]").forEach(function (el) {
    el.setAttribute("href", "tel:" + SITE_PHONE_TEL);
  });

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector("nav.main");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".faq-item");
      if (item) item.classList.toggle("open");
    });
  });

  // Contact form placeholder — does not send anywhere.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("form-note");
      if (note) {
        note.textContent = "This form is not live yet — it does not send anywhere. For the fastest help, please call " + SITE_PHONE_DISPLAY + ".";
        note.style.display = "block";
      }
    });
  }
});
