// ===============================
// CVBOOST SCRIPT
// ===============================

let selectedTemplate = "modern";


// ===============================
// SCROLL TO BUILDER
// ===============================

function scrollToBuilder() {
  document.getElementById("builder").scrollIntoView({
    behavior: "smooth"
  });
}


// ===============================
// SELECT CV TEMPLATE
// ===============================

function selectTemplate(template, button) {

  selectedTemplate = template;

  // Remove active state from all template buttons
  const buttons = document.querySelectorAll(".template-card");

  buttons.forEach(function(btn) {
    btn.classList.remove("active");
  });

  // Add active state to selected button
  button.classList.add("active");

  // Change CV preview design if preview already exists
  const cvDocument = document.getElementById("cvDocument");

  if (cvDocument) {

    cvDocument.classList.remove(
      "modern-template",
      "professional-template",
      "creative-template"
    );

    cvDocument.classList.add(
      selectedTemplate + "-template"
    );
  }
}


// ===============================
// GENERATE CV
// ===============================

function generateCV() {

  // Get form values
  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const location =
    document.getElementById("location").value.trim();

  const summary =
    document.getElementById("summary").value.trim();

  const education =
    document.getElementById("education").value.trim();

  const experience =
    document.getElementById("experience").value.trim();

  const skills =
    document.getElementById("skills").value.trim();


  // ===============================
  // BASIC VALIDATION
  // ===============================

  if (name === "") {

    alert("Please enter your full name.");

    document.getElementById("name").focus();

    return;
  }


  // ===============================
  // UPDATE CV
  // ===============================

  document.getElementById("cvName").textContent =
    name || "Your Name";


  // Contact information

  const contactParts = [];

  if (phone !== "") {
    contactParts.push(phone);
  }

  if (email !== "") {
    contactParts.push(email);
  }

  if (location !== "") {
    contactParts.push(location);
  }

  document.getElementById("cvContact").textContent =
    contactParts.join(" • ");


  // Summary

  document.getElementById("cvSummary").textContent =
    summary || "Add your professional summary.";


  // Education

  document.getElementById("cvEducation").textContent =
    education || "Add your education.";


  // Work experience

  document.getElementById("cvExperience").textContent =
    experience || "Add your work experience.";


  // Skills

  document.getElementById("cvSkills").textContent =
    skills || "Add your skills.";


  // ===============================
  // APPLY SELECTED TEMPLATE
  // ===============================

  const cvDocument =
    document.getElementById("cvDocument");

  cvDocument.classList.remove(
    "modern-template",
    "professional-template",
    "creative-template"
  );

  cvDocument.classList.add(
    selectedTemplate + "-template"
  );


  // ===============================
  // SHOW PREVIEW
  // ===============================

  const preview =
    document.getElementById("preview");

  preview.style.display = "block";


  // Scroll to CV preview

  setTimeout(function() {

    preview.scrollIntoView({
      behavior: "smooth"
    });

  }, 100);
}
