function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const action = form.action;

    try {
      const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerHTML = "Thank You !! Your message has been sent.";
        form.reset();
      } else {
        status.innerHTML = "Oops! Something went wrong.";
      }
    } catch (error) {
      status.innerHTML = "Network error. Try again later.";
    }
  });
});