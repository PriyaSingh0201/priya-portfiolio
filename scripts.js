// Update year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Form submission simulation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("status").textContent = "Message sent! (demo only)";
});
