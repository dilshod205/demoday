// DOM Elements
const testimonialSlider = document.getElementById("testimonialSlider")
const testimonialDots = document.getElementById("testimonialDots")
const prevTestimonial = document.getElementById("prevTestimonial")
const nextTestimonial = document.getElementById("nextTestimonial")

// Testimonial Slider
let currentTestimonial = 0
const totalTestimonials = 3 // Number of testimonials

function initTestimonialSlider() {
  if (!testimonialSlider) return

  // Set up initial slide
  showTestimonial(currentTestimonial)

  // Set up event listeners
  if (prevTestimonial) {
    prevTestimonial.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials
      showTestimonial(currentTestimonial)
    })
  }

  if (nextTestimonial) {
    nextTestimonial.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial + 1) % totalTestimonials
      showTestimonial(currentTestimonial)
    })
  }

  // Set up dots
  if (testimonialDots) {
    const dots = testimonialDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentTestimonial = index
        showTestimonial(currentTestimonial)
      })
    })
  }

  // Auto slide
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials
    showTestimonial(currentTestimonial)
  }, 8000)
}

function showTestimonial(index) {
  if (!testimonialSlider) return

  const testimonials = testimonialSlider.querySelectorAll(".testimonial")
  const dots = testimonialDots ? testimonialDots.querySelectorAll(".dot") : []

  // Hide all testimonials
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active")
  })

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  // Show current testimonial and activate current dot
  testimonials[index].classList.add("active")
  if (dots.length > 0) {
    dots[index].classList.add("active")
  }
}

// Animate Stats on Scroll
function animateStats() {
  const statsSection = document.querySelector(".stats-section")
  const statNumbers = document.querySelectorAll(".stat-number")

  if (!statsSection || !statNumbers.length) return

  // Check if stats section is in viewport
  const isInViewport = () => {
    const rect = statsSection.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
  }

  // Animate numbers
  const animateNumbers = () => {
    if (isInViewport()) {
      statNumbers.forEach((statNumber) => {
        const target = statNumber.textContent
        const numericValue = Number.parseInt(target.replace(/\D/g, ""))
        let current = 0
        const increment = Math.ceil(numericValue / 50)
        const duration = 2000 // 2 seconds
        const stepTime = Math.floor(duration / (numericValue / increment))

        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            statNumber.textContent = target // Set to original text with suffix
            clearInterval(timer)
          } else {
            statNumber.textContent = current + "+"
          }
        }, stepTime)
      })

      // Remove scroll event after animation
      window.removeEventListener("scroll", checkScroll)
    }
  }

  // Check scroll position
  const checkScroll = () => {
    if (isInViewport()) {
      animateNumbers()
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", checkScroll)

  // Check on initial load
  checkScroll()
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initTestimonialSlider()
  animateStats()
})

