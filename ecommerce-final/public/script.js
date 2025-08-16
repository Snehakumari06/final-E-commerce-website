
// ✅ LOGIN FORM HANDLER
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "login", username, password }),
      });
      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      console.error("Login Error:", err);
      alert("Something went wrong. Try again!");
    }
  });
}

// ✅ REGISTER FORM HANDLER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "register", username, password }),
      });
      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      console.error("Register Error:", err);
      alert("Something went wrong. Try again!");
    }
  });
}

// ✅ CONTACT FORM HANDLER
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      alert(data.message || data.error);
    } catch (err) {
      console.error("Contact Error:", err);
      alert("Something went wrong. Try again!");
    }
  });
}
