// DOM Elements
const faqItems = document.querySelectorAll(".faq-item")
const storiesSlider = document.getElementById("storiesSlider")
const storyDots = document.getElementById("storyDots")
const prevStoryBtn = document.getElementById("prevStory")
const nextStoryBtn = document.getElementById("nextStory")
const restaurantPartnerForm = document.getElementById("restaurantPartnerForm")
const formSuccess = document.getElementById("formSuccess")
const submitAnotherBtn = document.getElementById("submitAnotherBtn")

// Initialize Partner Page
function initPartnerPage() {
  // Set up FAQ toggles
  setupFAQToggles()

  // Set up stories slider
  setupStoriesSlider()

  // Set up partner form
  setupPartnerForm()
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

// Set up Stories Slider
function setupStoriesSlider() {
  if (!storiesSlider  !storyDots  !prevStoryBtn  !nextStoryBtn) return

  const storySlides = storiesSlider.querySelectorAll(".story-slide")
  const dots = storyDots.querySelectorAll(".dot")
  let currentSlide = 0
  let slideInterval

  // Show slide
  function showSlide(index) {
    // Hide all slides
    storySlides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show current slide and activate current dot
    storySlides[index].classList.add("active")
    dots[index].classList.add("active")
    currentSlide = index
  }

  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % storySlides.length
    showSlide(currentSlide)
  }

  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + storySlides.length) % storySlides.length
    showSlide(currentSlide)
  }

  // Set up event listeners
  prevStoryBtn.addEventListener("click", () => {
    prevSlide()
    resetInterval()
  })

  nextStoryBtn.addEventListener("click", () => {
    nextSlide()
    resetInterval()
  })

  // Set up dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index)
      resetInterval()
    })
  })

  // Auto slide
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000)
  }

  function resetInterval() {
    clearInterval(slideInterval)
    startInterval()
  }

  // Initialize slider
  showSlide(0)
  startInterval()
}

// Set up Partner Form
function setupPartnerForm() {
  if (!restaurantPartnerForm  !formSuccess || !submitAnotherBtn) return

  // Form submission
  restaurantPartnerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // In a real app, this would send the form data to a server
    // For demo purposes, we'll just show the success message

    // Show success message
    formSuccess.classList.add("show")

    // Reset form
    restaurantPartnerForm.reset()
  })

  // Submit another application button
  submitAnotherBtn.addEventListener("click", () => {
    formSuccess.classList.remove("show")
  })
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initPartnerPage)// DOM Elements
const faqItems = document.querySelectorAll(".faq-item")
const storiesSlider = document.getElementById("storiesSlider")
const storyDots = document.getElementById("storyDots")
const prevStoryBtn = document.getElementById("prevStory")
const nextStoryBtn = document.getElementById("nextStory")
const restaurantPartnerForm = document.getElementById("restaurantPartnerForm")
const formSuccess = document.getElementById("formSuccess")
const submitAnotherBtn = document.getElementById("submitAnotherBtn")

// Initialize Partner Page
function initPartnerPage() {
  // Set up FAQ toggles
  setupFAQToggles()

  // Set up stories slider
  setupStoriesSlider()

  // Set up partner form
  setupPartnerForm()
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

// Set up Stories Slider
function setupStoriesSlider() {
  if (!storiesSlider  !storyDots  !prevStoryBtn  !nextStoryBtn) return

  const storySlides = storiesSlider.querySelectorAll(".story-slide")
  const dots = storyDots.querySelectorAll(".dot")
  let currentSlide = 0
  let slideInterval

  // Show slide
  function showSlide(index) {
    // Hide all slides
    storySlides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show current slide and activate current dot
    storySlides[index].classList.add("active")
    dots[index].classList.add("active")
    currentSlide = index
  }

  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % storySlides.length
    showSlide(currentSlide)
  }

  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + storySlides.length) % storySlides.length
    showSlide(currentSlide)
  }

  // Set up event listeners
  prevStoryBtn.addEventListener("click", () => {
    prevSlide()
    resetInterval()
  })

  nextStoryBtn.addEventListener("click", () => {
    nextSlide()
    resetInterval()
  })

  // Set up dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index)
      resetInterval()
    })
  })

  // Auto slide
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000)
  }

  function resetInterval() {
    clearInterval(slideInterval)
    startInterval()
  }

  // Initialize slider
  showSlide(0)
  startInterval()
}

// Set up Partner Form
function setupPartnerForm() {
  if (!restaurantPartnerForm  !formSuccess || !submitAnotherBtn) return

  // Form submission
  restaurantPartnerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // In a real app, this would send the form data to a server
    // For demo purposes, we'll just show the success message

    // Show success message
    formSuccess.classList.add("show")

    // Reset form
    restaurantPartnerForm.reset()
  })

  // Submit another application button
  submitAnotherBtn.addEventListener("click", () => {
    formSuccess.classList.remove("show")
  })
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initPartnerPage)