// DOM Elements
const contactForm = document.getElementById("contactForm")
const formSuccess = document.getElementById("formSuccess")
const sendAnotherBtn = document.getElementById("sendAnotherBtn")
const faqItems = document.querySelectorAll(".faq-item")
const contactMap = document.getElementById("contactMap")

// Initialize Contact Page
function initContactPage() {
  // Initialize map
  initMap()

  // Set up form submission
  setupContactForm()

  // Set up FAQ toggles
  setupFAQToggles()
}

// Initialize Map
function initMap() {
  if (!contactMap) return

  // Check if Leaflet is already loaded
  if (typeof L === "undefined") {
    console.error("Leaflet library is not loaded. Make sure to include it in your HTML.")
    return
  }

  // Initialize map
  const map = L.map("contactMap").setView([40.7128, -74.006], 13)

  // Add tile layer (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  // Add marker for office location
  const marker = L.marker([40.7128, -74.006]).addTo(map)
  marker
    .bindPopup("<strong>FoodExpress Headquarters</strong><br>123 Food Street, Suite 500<br>New York, NY 10001")
    .openPopup()
}

// Set up Contact Form
function setupContactForm() {
  if (!contactForm || !formSuccess || !sendAnotherBtn) return

  // Form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
    const newsletter = document.getElementById("newsletter").checked

    // In a real app, this would send the form data to a server
    // For demo purposes, we'll just show the success message

    // Hide form and show success message
    contactForm.classList.add("hidden")
    formSuccess.classList.remove("hidden")

    // Log form data to console (for demo purposes)
    console.log({
      name,
      email,
      phone,
      subject,
      message,
      newsletter,
    })
  })

  // Send another message button
  sendAnotherBtn.addEventListener("click", () => {
    // Reset form
    contactForm.reset()

    // Show form and hide success message
    contactForm.classList.remove("hidden")
    formSuccess.classList.add("hidden")
  })
}

// Set up FAQ Toggles
function setupFAQToggles() {
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Toggle active class
      item.classList.toggle("active")

      // Close other FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active")
        }
      })
    })
  })
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initContactPage)

