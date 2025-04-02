// DOM Elements
const themeToggle = document.getElementById("themeToggle")
const body = document.body
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const mobileMenu = document.getElementById("mobileMenu")
const loginBtn = document.getElementById("loginBtn")
const registerBtn = document.getElementById("registerBtn")
const userProfile = document.getElementById("userProfile")
const logoutBtn = document.getElementById("logoutBtn")
const cartCount = document.getElementById("cartCount")

// Theme Toggle
function initThemeToggle() {
  // Check if user has a saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    body.classList.add(savedTheme)
    updateThemeIcon(savedTheme)
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme")
      body.classList.add("light-theme")
      localStorage.setItem("theme", "light-theme")
      updateThemeIcon("light-theme")
    } else {
      body.classList.remove("light-theme")
      body.classList.add("dark-theme")
      localStorage.setItem("theme", "dark-theme")
      updateThemeIcon("dark-theme")
    }
  })
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i")
  if (theme === "dark-theme") {
    icon.className = "fas fa-sun"
  } else {
    icon.className = "fas fa-moon"
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    const icon = mobileMenuToggle.querySelector("i")
    if (mobileMenu.classList.contains("active")) {
      icon.className = "fas fa-times"
    } else {
      icon.className = "fas fa-bars"
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileMenuToggle.contains(event.target) &&
      mobileMenu.classList.contains("active")
    ) {
      mobileMenu.classList.remove("active")
      mobileMenuToggle.querySelector("i").className = "fas fa-bars"
    }
  })
}

// Authentication
function initAuth() {
  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"))
  if (user) {
    showLoggedInState(user)
  }

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault()
      localStorage.removeItem("user")
      localStorage.removeItem("cart")
      updateCartCount(0)
      showLoggedOutState()
      window.location.reload()
    })
  }
}

function showLoggedInState(user) {
  if (loginBtn) loginBtn.classList.add("hidden")
  if (registerBtn) registerBtn.classList.add("hidden")
  if (userProfile) {
    userProfile.classList.remove("hidden")
    const userAvatar = document.getElementById("userAvatar")
    if (userAvatar && user.profilePicture) {
      userAvatar.src = user.profilePicture
    }
  }
}

function showLoggedOutState() {
  if (loginBtn) loginBtn.classList.remove("hidden")
  if (registerBtn) registerBtn.classList.remove("hidden")
  if (userProfile) userProfile.classList.add("hidden")
}

// Cart Management
function initCart() {
  // Load cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 }
  updateCartCount(cart.items.length)
}

function updateCartCount(count) {
  if (cartCount) {
    cartCount.textContent = count
  }
}

// Newsletter Form
function initNewsletterForm() {
  const newsletterForm = document.getElementById("newsletterForm")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const email = newsletterForm.querySelector('input[type="email"]').value

      // Simulate API call
      setTimeout(() => {
        alert(`Thank you for subscribing with ${email}!`)
        newsletterForm.reset()
      }, 500)
    })
  }
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle()
  initMobileMenu()
  initAuth()
  initCart()
  initNewsletterForm()
})

