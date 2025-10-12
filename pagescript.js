// script.js

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let isValid = true;

  // Clear errors
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('messageError').textContent = "";

  // Get fields
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Name validation
  if (name === "") {
    document.getElementById('nameError').textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
  if (email === "" || !emailPattern.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById('messageError').textContent = "Message is required";
    isValid = false;
  }

  // Show success if valid
  if (isValid) {
    document.getElementById('contactSuccess').style.display = "block";
    setTimeout(() => {
      document.getElementById('contactSuccess').style.display = "none";
      document.getElementById('contactForm').reset();
    }, 2000);
  }
});

// To-Do List Interactions
function addTask() {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();
  if (value === "") return;
  const ul = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `${value} <button onclick="removeTask(this)">Remove</button>`;
  ul.appendChild(li);
  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}