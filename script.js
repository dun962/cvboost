let selectedTemplate = "modern";

function scrollToBuilder() {
  document.getElementById("builder").scrollIntoView({
    behavior: "smooth"
  });
}

function selectTemplate(template, button) {

  selectedTemplate = template;

  const buttons = document.querySelectorAll(".template-card");

  buttons.forEach(function(btn) {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  const cvDocument = document.getElementById("cvDocument");

  cvDocument.classList.remove(
    "modern-template",
    "professional-template",
    "creative-template"
  );

  cvDocument.classList.add(
    selectedTemplate + "-template"
  );
}

function generateCV() {

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


  if (name === "") {

    alert("Please enter your full name.");

    document.getElementById("name").focus();

    return;
  }


  document.getElementById("cvName").textContent =
    name || "Your Name";


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


  document.getElementById("cvSummary").textContent =
    summary || "Add your professional summary.";


  document.getElementById("cvEducation").textContent =
    education || "Add your education.";


  document.getElementById("cvExperience").textContent =
    experience || "Add your work experience.";


  document.getElementById("cvSkills").textContent =
    skills || "Add your skills.";


  // PROFILE PHOTO

  const photoInput =
    document.getElementById("photo");

  const cvPhoto =
    document.getElementById("cvPhoto");


  if (photoInput && photoInput.files.length > 0) {

    const reader = new FileReader();

    reader.onload = function(event) {

      cvPhoto.src = event.target.result;

      cvPhoto.style.display = "block";

    };

    reader.readAsDataURL(photoInput.files[0]);

  } else {

    cvPhoto.src = "";

    cvPhoto.style.display = "none";

  }


  // APPLY TEMPLATE

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


  // SHOW PREVIEW

  const preview =
    document.getElementById("preview");

  preview.style.display = "block";


  setTimeout(function() {

    preview.scrollIntoView({
      behavior: "smooth"
    });

  }, 100);
    }
