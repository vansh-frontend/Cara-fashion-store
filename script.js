// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});

// navbar

document.getElementById("hamburger").addEventListener("click", function () {
  var mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.classList.contains("open")) {
    mobileNav.classList.remove("open");
  } else {
    mobileNav.classList.add("open");
  }
});
