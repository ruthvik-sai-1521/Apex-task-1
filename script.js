function showContactAlert() {
  alert("Thank you for reaching out! I'll get back to you soon. 😊");
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
