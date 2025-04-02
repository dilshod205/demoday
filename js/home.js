// DOM Elements
const bannerSlider = document.getElementById("bannerSlider")
const sliderDots = document.getElementById("sliderDots")
const prevBanner = document.getElementById("prevBanner")
const nextBanner = document.getElementById("nextBanner")
const categoryBtns = document.querySelectorAll(".category-btn")
const restaurantGrid = document.getElementById("restaurantGrid")
const sortRestaurants = document.getElementById("sortRestaurants")
const loadMoreBtn = document.getElementById("loadMoreBtn")
const restaurantMap = document.getElementById("restaurantMap")
const addressInput = document.getElementById("addressInput")

// Sample Data
const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://b.zmtcdn.com/data/pictures/6/18682396/67099ba6f8d36224505405273d9bb9cd.jpg?fit=around|750:500&crop=750:500;*,*",
    rating: 4.8,
    categories: ["Fast Food", "Burgers"],
    deliveryTime: "15-25 min",
    deliveryFee: "$2.99",
    minOrder: "$10",
    location: [51.505, -0.09],
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfWNlEFMWKnqojkx0W9zs9uAqUvo7R3qAdg&s",
    rating: 4.6,
    categories: ["Pizza", "Italian"],
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    minOrder: "$15",
    location: [51.51, -0.1],
  },
  {
    id: 3,
    name: "Sushi World",
    image: "https://cnf-data-bucket-new.s3.eu-west-2.amazonaws.com/images/0gR0Q4KieQhx9m2OIzBQoH9M1hTVnQJ90lQBZun4.jpg",
    rating: 4.9,
    categories: ["Sushi", "Japanese"],
    deliveryTime: "25-35 min",
    deliveryFee: "$3.99",
    minOrder: "$20",
    location: [51.515, -0.08],
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "https://www.digitalmomblog.com/wp-content/uploads/2021/10/taco-memes-2.jpeg",
    rating: 4.5,
    categories: ["Mexican", "Fast Food"],
    deliveryTime: "15-25 min",
    deliveryFee: "$2.49",
    minOrder: "$12",
    location: [51.508, -0.11],
  },
  {
    id: 5,
    name: "Green Garden",
    image: "https://media-cdn.tripadvisor.com/media/photo-p/13/13/41/d1/komang-d.jpg",
    rating: 4.7,
    categories: ["Vegetarian", "Healthy"],
    deliveryTime: "20-30 min",
    deliveryFee: "$2.99",
    minOrder: "$15",
    location: [51.503, -0.07],
  },
  {
    id: 6,
    name: "Sweet Delights",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/7810386/625499662.jpg",
    rating: 4.8,
    categories: ["Desserts", "Bakery"],
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    minOrder: "$10",
    location: [51.512, -0.09],
  },
]

// Banner Slider
let currentSlide = 0
const totalSlides = 3 // Number of banners

function initBannerSlider() {
  if (!bannerSlider) return

  // Set up initial slide
  showSlide(currentSlide)

  // Set up event listeners
  if (prevBanner) {
    prevBanner.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
      showSlide(currentSlide)
    })
  }

  if (nextBanner) {
    nextBanner.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides
      showSlide(currentSlide)
    })
  }

  // Set up dots
  if (sliderDots) {
    const dots = sliderDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        showSlide(currentSlide)
      })
    })
  }

  // Auto slide
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
  }, 5000)
}

function showSlide(index) {
  if (!bannerSlider) return

  const banners = bannerSlider.querySelectorAll(".banner")
  const dots = sliderDots ? sliderDots.querySelectorAll(".dot") : []

  // Hide all banners
  banners.forEach((banner) => {
    banner.style.display = "none"
  })

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove("active")
  })

  // Show current banner and activate current dot
  banners[index].style.display = "block"
  if (dots.length > 0) {
    dots[index].classList.add("active")
  }
}

// Category Filters
function initCategoryFilters() {
  if (!categoryBtns.length) return

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      categoryBtns.forEach((b) => b.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      // Filter restaurants
      const category = btn.dataset.category
      filterRestaurants(category)
    })
  })
}

function filterRestaurants(category) {
  if (!restaurantGrid) return

  // Clear restaurant grid
  restaurantGrid.innerHTML = ""

  // Filter restaurants based on category
  let filteredRestaurants = restaurants
  if (category && category !== "all") {
    const categoryLower = category.toLowerCase()
    filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.categories.some((cat) => cat.toLowerCase().includes(categoryLower))
    })
  }

  // Sort restaurants
  sortRestaurantsList(filteredRestaurants)
}

// Restaurant Sorting
function initRestaurantSorting() {
  if (!sortRestaurants) return

  sortRestaurants.addEventListener("change", () => {
    sortRestaurantsList(restaurants)
  })
}

function sortRestaurantsList(restaurantsList) {
  if (!sortRestaurants || !restaurantGrid) return

  const sortBy = sortRestaurants.value

  // Sort restaurants based on selected option
  switch (sortBy) {
    case "rating":
      restaurantsList.sort((a, b) => b.rating - a.rating)
      break
    case "delivery-time":
      restaurantsList.sort((a, b) => {
        const aTime = Number.parseInt(a.deliveryTime.split("-")[0])
        const bTime = Number.parseInt(b.deliveryTime.split("-")[0])
        return aTime - bTime
      })
      break
    case "delivery-fee":
      restaurantsList.sort((a, b) => {
        const aFee = Number.parseFloat(a.deliveryFee.replace("$", ""))
        const bFee = Number.parseFloat(b.deliveryFee.replace("$", ""))
        return aFee - bFee
      })
      break
    default: // popularity (default)
      // For demo purposes, we'll just use the original order
      break
  }

  // Render sorted restaurants
  renderRestaurants(restaurantsList)
}

// Render Restaurants
function renderRestaurants(restaurantsList) {
  if (!restaurantGrid) return

  // Clear restaurant grid
  restaurantGrid.innerHTML = ""

  // Render each restaurant
  restaurantsList.forEach((restaurant) => {
    const restaurantCard = document.createElement("div")
    restaurantCard.className = "restaurant-card"
    restaurantCard.innerHTML = `
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
            </div>
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <div>
                        <h3 class="restaurant-name">${restaurant.name}</h3>
                        <div class="restaurant-categories">${restaurant.categories.join(" • ")}</div>
                    </div>
                    <div class="restaurant-rating">
                        <i class="fas fa-star"></i>
                        ${restaurant.rating}
                    </div>
                </div>
                <div class="restaurant-meta">
                    <span><i class="fas fa-clock"></i> ${restaurant.deliveryTime}</span>
                    <span><i class="fas fa-truck"></i> ${restaurant.deliveryFee}</span>
                    <span><i class="fas fa-shopping-basket"></i> Min ${restaurant.minOrder}</span>
                </div>
            </div>
        `

    // Add click event to navigate to restaurant page
    restaurantCard.addEventListener("click", () => {
      window.location.href = `restaurant.html?id=${restaurant.id}`
    })

    restaurantGrid.appendChild(restaurantCard)
  })
}

// Load More Restaurants
function initLoadMore() {
  if (!loadMoreBtn) return

  loadMoreBtn.addEventListener("click", () => {
    // In a real app, this would load more restaurants from an API
    // For demo purposes, we'll just show an alert
    alert("More restaurants would be loaded here from an API")
  })
}

// Map Initialization
function initMap() {
  if (!restaurantMap) return

  // Check if Leaflet is already loaded
  if (typeof L === "undefined") {
    console.error("Leaflet library is not loaded. Make sure to include it in your HTML.")
    return
  }

  // Initialize map
  var map = L.map("restaurantMap").setView([51.505, -0.09], 13)

  // Add tile layer (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  // Add restaurant markers
  restaurants.forEach((restaurant) => {
    const marker = L.marker(restaurant.location).addTo(map)
    marker.bindPopup(`
            <strong>${restaurant.name}</strong><br>
            Rating: ${restaurant.rating} ⭐<br>
            Delivery: ${restaurant.deliveryTime}
        `)
  })

  // Handle address search
  if (addressInput) {
    addressInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        // In a real app, this would geocode the address and update the map
        alert(`In a real app, we would geocode "${addressInput.value}" and update the map`)
      }
    })
  }
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initBannerSlider()
  initCategoryFilters()
  initRestaurantSorting()
  renderRestaurants(restaurants)
  initLoadMore()
  initMap()
})

