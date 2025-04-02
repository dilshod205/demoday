// DOM Elements
const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")
const passwordInputs = document.querySelectorAll('input[type="password"]')
const togglePasswordBtns = document.querySelectorAll(".toggle-password")

// Toggle Password Visibility
function initPasswordToggle() {
  togglePasswordBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = btn.parentElement.querySelector("input")
      const icon = btn.querySelector("i")

      if (input.type === "password") {
        input.type = "text"
        icon.className = "fas fa-eye-slash"
      } else {
        input.type = "password"
        icon.className = "fas fa-eye"
      }
    })
  })
}

// Password Strength Meter
function initPasswordStrength() {
  const passwordInput = document.getElementById("password")
  if (!passwordInput) return

  const strengthMeter = document.querySelector(".strength-meter span")
  const strengthText = document.querySelector(".strength-text span")

  passwordInput.addEventListener("input", () => {
    const password = passwordInput.value
    const strength = calculatePasswordStrength(password)

    // Update strength meter
    strengthMeter.style.width = `${strength.score * 25}%`
    strengthMeter.style.backgroundColor = strength.color
    strengthText.textContent = strength.label
    strengthText.style.color = strength.color
  })
}

function calculatePasswordStrength(password) {
  // Simple password strength calculation
  let score = 0

  if (password.length > 6) score += 1
  if (password.length > 10) score += 1
  if (/[A-Z]/.test(password)) score += 1
  if (/[0-9]/.test(password)) score += 1
  if (/[^A-Za-z0-9]/.test(password)) score += 1

  const result = {
    score: Math.min(score, 4),
  }

  // Set label and color based on score
  switch (result.score) {
    case 0:
      result.label = "Very Weak"
      result.color = "#ff4d4d"
      break
    case 1:
      result.label = "Weak"
      result.color = "#ffa64d"
      break
    case 2:
      result.label = "Fair"
      result.color = "#ffff4d"
      break
    case 3:
      result.label = "Good"
      result.color = "#4dff4d"
      break
    case 4:
      result.label = "Strong"
      result.color = "#4d4dff"
      break
  }

  return result
}

// Login Form Submission
function initLoginForm() {
  if (!loginForm) return

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const rememberMe = document.getElementById("rememberMe").checked

    // Validate inputs
    if (!validateEmail(email)) {
      showError("Please enter a valid email address")
      return
    }

    if (password.length < 6) {
      showError("Password must be at least 6 characters")
      return
    }

    // Simulate API call
    simulateLogin(email, password, rememberMe)
  })
}

// Register Form Submission
function initRegisterForm() {
  if (!registerForm) return

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fullName = document.getElementById("fullName").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const termsAgree = document.getElementById("termsAgree").checked

    // Validate inputs
    if (fullName.length < 3) {
      showError("Please enter your full name")
      return
    }

    if (!validateEmail(email)) {
      showError("Please enter a valid email address")
      return
    }

    if (!validatePhone(phone)) {
      showError("Please enter a valid phone number")
      return
    }

    if (password.length < 6) {
      showError("Password must be at least 6 characters")
      return
    }

    if (password !== confirmPassword) {
      showError("Passwords do not match")
      return
    }

    if (!termsAgree) {
      showError("You must agree to the Terms of Service and Privacy Policy")
      return
    }

    // Simulate API call
    simulateRegister(fullName, email, phone, password)
  })
}

// Validation Helpers
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^\+?[0-9]{10,15}$/
  return re.test(phone)
}

function showError(message) {
  alert(message) // In a real app, use a better error display
}

// API Simulation
function simulateLogin(email, password, rememberMe) {
  // In a real app, this would be an API call
  setTimeout(() => {
    // For demo purposes, any login is successful
    const user = {
      email: email,
      name: email.split("@")[0], // Use part of email as name for demo
      profilePicture: null,
    }

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user))

    // Redirect to home page
    window.location.href = "index.html"
  }, 1000)
}

function simulateRegister(fullName, email, phone, password) {
  // In a real app, this would be an API call
  setTimeout(() => {
    // For demo purposes, any registration is successful
    const user = {
      email: email,
      name: fullName,
      phone: phone,
      profilePicture: null,
    }

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user))

    // Redirect to home page
    window.location.href = "index.html"
  }, 1000)
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initPasswordToggle()
  initPasswordStrength()
  initLoginForm()
  initRegisterForm()
})

