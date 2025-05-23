
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const cookieBanner = document.getElementById("cookie-consent");
  const acceptCookies = document.getElementById("accept-cookies");

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Cookie consent logic
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.classList.add("show");
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.remove("show");
  });
});
