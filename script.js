// Button Click to Change Text and Color
document
  .getElementById("toggleTextButton")
  .addEventListener("click", function () {
    // Change button text when clicked
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "#4CAF50"; // Change button color to green
  });

// Form Validation
document
  .getElementById("validationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    let valid = true;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validate Username
    if (username.trim() === "") {
      document.getElementById("usernameFeedback").textContent =
        "Username is required.";
      valid = false;
    } else {
      document.getElementById("usernameFeedback").textContent = "";
    }

    // Validate Email Format
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailFeedback").textContent =
        "Please enter a valid email.";
      valid = false;
    } else {
      document.getElementById("emailFeedback").textContent = "";
    }

    // Validate Password Length
    if (password.length < 8) {
      document.getElementById("passwordFeedback").textContent =
        "Password must be at least 8 characters long.";
      valid = false;
    } else {
      document.getElementById("passwordFeedback").textContent = "";
    }

    // If the form is valid, alert the user
    if (valid) {
      alert("Form submitted successfully!");
    }
  });

// Tabs Functionality
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active class to the clicked tab
    tab.classList.add("active");

    // Hide all tab contents
    tabContents.forEach((content) => (content.style.display = "none"));
    // Show the content of the clicked tab
    const tabIndex = tab.id.replace("tab", "");
    document.getElementById("content" + tabIndex).style.display = "block";
  });
});

// Accordion Functionality
// Get all the accordion headers
const accordions = document.querySelectorAll(".accordion-header");

// Loop through each header and add a click event listener
accordions.forEach((acc) => {
  acc.addEventListener("click", function () {
    // Toggle the active class to expand or collapse the content
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Get the modal element
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const closeModalBtn = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
