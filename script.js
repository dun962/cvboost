function scrollToBuilder() {
  document.getElementById("builder").scrollIntoView({
    behavior: "smooth"
  });
}

function generateCV() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const location = document.getElementById("location").value;

  const summary = document.getElementById("summary").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;

  document.getElementById("cvName").textContent =
    name || "Your Name";

  document.getElementById("cvContact").textContent =
    `${phone} | ${email} | ${location}`;

  document.getElementById("cvSummary").textContent =
    summary || "Add your professional summary.";

  document.getElementById("cvEducation").textContent =
    education || "Add your education.";

  document.getElementById("cvExperience").textContent =
    experience || "Add your work experience.";

  document.getElementById("cvSkills").textContent =
    skills || "Add your skills.";

  document.getElementById("preview").scrollIntoView({
    behavior: "smooth"
  });
}
