// DOM Elements
const cartEmpty = document.getElementById("cartEmpty")
const cartContent = document.getElementById("cartContent")
const cartItemsList = document.getElementById("cartItemsList")
const restaurantName = document.getElementById("restaurantName")
const cartSubtotal = document.getElementById("cartSubtotal")
const deliveryFee = document.getElementById("deliveryFee")
const taxAmount = document.getElementById("taxAmount")
const orderTotal = document.getElementById("orderTotal")
const promoCodeInput = document.getElementById("promoCodeInput")
const applyPromoBtn = document.getElementById("applyPromoBtn")
const appliedPromo = document.getElementById("appliedPromo")
const promoCodeLabel = document.getElementById("promoCodeLabel")
const promoDiscount = document.getElementById("promoDiscount")
const removePromoBtn = document.getElementById("removePromoBtn")
const checkoutBtn = document.getElementById("checkoutBtn")
const deliveryTracking = document.getElementById("deliveryTracking")
const deliveryMap = document.getElementById("deliveryMap")

// Cart State
let cart = {
  items: [],
  subtotal: 0,
  deliveryFee: 2.99,
  tax: 0,
  discount: 0,
  total: 0,
  promoApplied: false,
  promoCode: "",
}

// Restaurant Data (In a real app, this would be fetched from an API)
const restaurant = {
  id: 1,
  name: "Burger Palace",
  image: "https://recipeno.sfo2.cdn.digitaloceanspaces.com/photos/content/678/keto_bacon_double_cheeseburger.jpg",
  deliveryFee: 2.99,
}

// Initialize Cart Page
function initCartPage() {
  // Load cart from localStorage
  loadCart()

  // Check if cart is empty
  if (cart.items.length === 0) {
    showEmptyCart()
  } else {
    showCartContent()
    renderCartItems()
    updateCartSummary()
  }

  // Set up event listeners
  setupEventListeners()
}

// Load Cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    cart = JSON.parse(savedCart)

    // Calculate tax (in a real app, this would be calculated based on location)
    cart.tax = cart.subtotal * 0.08 // 8% tax rate

    // Calculate total
    cart.total = cart.subtotal + cart.deliveryFee + cart.tax - cart.discount
  }

  // Update cart count in header
  updateCartCount()
}

// Update Cart Count
function updateCartCount() {
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

// Show Empty Cart
function showEmptyCart() {
  if (cartEmpty && cartContent) {
    cartEmpty.classList.remove("hidden")
    cartContent.classList.add("hidden")
  }
}

// Show Cart Content
function showCartContent() {
  if (cartEmpty && cartContent) {
    cartEmpty.classList.add("hidden")
    cartContent.classList.remove("hidden")
  }

  // Set restaurant name
  if (restaurantName) {
    restaurantName.textContent = restaurant.name
  }
}

// Render Cart Items
function renderCartItems() {
  if (!cartItemsList) return

  cartItemsList.innerHTML = ""

  cart.items.forEach((item, index) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"

    // Calculate item total
    let itemTotal = item.price * item.quantity
    let optionsHtml = ""

    // Add selected options
    if (item.selectedOptions && item.selectedOptions.length > 0) {
      item.selectedOptions.forEach((option) => {
        itemTotal += option.price * item.quantity
        optionsHtml += `<div class="cart-item-option">+ ${option.name} ($${option.price.toFixed(2)})</div>`
      })
    }

    cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="/placeholder.svg?height=80&width=80" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-options">
                    ${optionsHtml}
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease-btn" data-index="${index}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase-btn" data-index="${index}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                    <div class="remove-item" data-index="${index}">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        `

    cartItemsList.appendChild(cartItem)
  })

  // Add event listeners to cart item buttons
  const decreaseBtns = document.querySelectorAll(".decrease-btn")
  const increaseBtns = document.querySelectorAll(".increase-btn")
  const removeItemBtns = document.querySelectorAll(".remove-item")

  decreaseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number.parseInt(btn.dataset.index)
      decreaseItemQuantity(index)
    })
  })

  increaseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number.parseInt(btn.dataset.index)
      increaseItemQuantity(index)
    })
  })

  removeItemBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = Number.parseInt(btn.dataset.index)
      removeCartItem(index)
    })
  })
}

// Update Cart Summary
function updateCartSummary() {
  if (!cartSubtotal || !deliveryFee || !taxAmount || !orderTotal) return

  cartSubtotal.textContent = `$${cart.subtotal.toFixed(2)}`
  deliveryFee.textContent = `$${cart.deliveryFee.toFixed(2)}`
  taxAmount.textContent = `$${cart.tax.toFixed(2)}`
  orderTotal.textContent = `$${cart.total.toFixed(2)}`

  // Show/hide applied promo
  if (cart.promoApplied && appliedPromo && promoCodeLabel && promoDiscount) {
    appliedPromo.classList.remove("hidden")
    promoCodeLabel.textContent = cart.promoCode
    promoDiscount.textContent = `-$${cart.discount.toFixed(2)}`
  } else if (appliedPromo) {
    appliedPromo.classList.add("hidden")
  }
}

// Decrease Item Quantity
function decreaseItemQuantity(index) {
  if (cart.items[index].quantity > 1) {
    cart.items[index].quantity--
    updateCart()
  } else {
    removeCartItem(index)
  }
}

// Increase Item Quantity
function increaseItemQuantity(index) {
  cart.items[index].quantity++
  updateCart()
}

// Remove Cart Item
function removeCartItem(index) {
  cart.items.splice(index, 1)
  updateCart()

  // Check if cart is empty
  if (cart.items.length === 0) {
    showEmptyCart()
  }
}

// Update Cart
function updateCart() {
  // Calculate subtotal
  cart.subtotal = cart.items.reduce((total, item) => {
    let itemTotal = item.price * item.quantity

    // Add selected options price
    if (item.selectedOptions) {
      item.selectedOptions.forEach((option) => {
        itemTotal += option.price * item.quantity
      })
    }

    return total + itemTotal
  }, 0)

  // Calculate tax
  cart.tax = cart.subtotal * 0.08 // 8% tax rate

  // Recalculate discount if promo is applied
  if (cart.promoApplied) {
    applyPromoCode(cart.promoCode, false)
  }

  // Calculate total
  cart.total = cart.subtotal + cart.deliveryFee + cart.tax - cart.discount

  // Update UI
  renderCartItems()
  updateCartSummary()

  // Save cart to localStorage
  saveCart()
}

// Save Cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))

  // Update cart count in header
  updateCartCount()
}

// Apply Promo Code
function applyPromoCode(code, showMessage = true) {
  // In a real app, this would validate the promo code with an API
  // For demo purposes, we'll use a simple check

  if (code.toUpperCase() === "WELCOME50") {
    // 50% off discount
    cart.discount = cart.subtotal * 0.5
    cart.promoApplied = true
    cart.promoCode = "WELCOME50"

    // Calculate total
    cart.total = cart.subtotal + cart.deliveryFee + cart.tax - cart.discount

    // Update UI
    updateCartSummary()

    // Save cart to localStorage
    saveCart()

    if (showMessage) {
      showToast("Promo code applied: 50% off")
    }

    return true
  } else if (code.toUpperCase() === "FREESHIP") {
    // Free shipping
    cart.discount = cart.deliveryFee
    cart.promoApplied = true
    cart.promoCode = "FREESHIP"

    // Calculate total
    cart.total = cart.subtotal + cart.deliveryFee + cart.tax - cart.discount

    // Update UI
    updateCartSummary()

    // Save cart to localStorage
    saveCart()

    if (showMessage) {
      showToast("Promo code applied: Free delivery")
    }

    return true
  } else {
    if (showMessage) {
      showToast("Invalid promo code")
    }

    return false
  }
}

// Remove Promo Code
function removePromoCode() {
  cart.discount = 0
  cart.promoApplied = false
  cart.promoCode = ""

  // Calculate total
  cart.total = cart.subtotal + cart.deliveryFee + cart.tax

  // Update UI
  updateCartSummary()

  // Save cart to localStorage
  saveCart()

  // Clear promo code input
  if (promoCodeInput) {
    promoCodeInput.value = ""
  }

  showToast("Promo code removed")
}

// Show Toast Message
function showToast(message) {
  // Create toast element
  const toast = document.createElement("div")
  toast.className = "toast"
  toast.textContent = message

  // Add toast to body
  document.body.appendChild(toast)

  // Show toast
  setTimeout(() => {
    toast.classList.add("show")
  }, 100)

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 3000)
}

// Initialize Delivery Tracking
function initDeliveryTracking() {
  if (!deliveryTracking || !deliveryMap) return

  // Show delivery tracking section
  deliveryTracking.classList.remove("hidden")

  // Initialize map
  const map = L.map("deliveryMap").setView([40.7128, -74.006], 13)

  // Add tile layer (OpenStreetMap)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  // Add restaurant marker
  const restaurantMarker = L.marker([40.7128, -74.006]).addTo(map)
  restaurantMarker.bindPopup(`<strong>${restaurant.name}</strong><br>Restaurant Location`)

  // Add delivery address marker
  const deliveryMarker = L.marker([40.72, -74.01]).addTo(map)
  deliveryMarker.bindPopup("<strong>Your Location</strong><br>Delivery Address")

  // Add courier marker
  const courierMarker = L.marker([40.715, -74.008]).addTo(map)
  courierMarker.bindPopup("<strong>John D.</strong><br>Your Courier")

  // Simulate courier movement
  simulateCourierMovement(courierMarker, map)

  // Simulate order status updates
  simulateOrderStatusUpdates()
}

// Simulate Courier Movement
function simulateCourierMovement(courierMarker, map) {
  // Define waypoints for courier route
  const waypoints = [
    [40.7128, -74.006], // Restaurant
    [40.7135, -74.007],
    [40.715, -74.008],
    [40.717, -74.009],
    [40.72, -74.01], // Delivery address
  ]

  let currentWaypoint = 0

  // Update courier position every 3 seconds
  const movementInterval = setInterval(() => {
    currentWaypoint++

    if (currentWaypoint < waypoints.length) {
      courierMarker.setLatLng(waypoints[currentWaypoint])

      // Update popup content
      courierMarker.setPopupContent(`
                <strong>John D.</strong><br>
                Your Courier<br>
                Estimated arrival: 10 minutes
            `)

      // Center map on courier
      map.panTo(waypoints[currentWaypoint])
    } else {
      // Courier arrived at destination
      clearInterval(movementInterval)

      // Update popup content
      courierMarker.setPopupContent(`
                <strong>John D.</strong><br>
                Your Courier<br>
                Arrived at your location
            `)

      // Mark order as delivered
      document.getElementById("orderDelivered").classList.add("active")
      document.getElementById("orderDelivered").querySelector(".step-time").textContent = getCurrentTime()
    }
  }, 10000) // Move every 10 seconds
}

// Simulate Order Status Updates
function simulateOrderStatusUpdates() {
  // Set initial status
  document.getElementById("orderPlaced").classList.add("active")
  document.getElementById("orderPlaced").querySelector(".step-time").textContent = getCurrentTime()

  // Update preparing status after 5 seconds
  setTimeout(() => {
    document.getElementById("orderPreparing").classList.add("active")
    document.getElementById("orderPreparing").querySelector(".step-time").textContent = getCurrentTime()
  }, 5000)

  // Update picked up status after 15 seconds
  setTimeout(() => {
    document.getElementById("orderPickedUp").classList.add("active")
    document.getElementById("orderPickedUp").querySelector(".step-time").textContent = getCurrentTime()
  }, 15000)
}

// Get Current Time
function getCurrentTime() {
  const now = new Date()
  let hours = now.getHours()
  const minutes = now.getMinutes()
  const ampm = hours >= 12 ? "PM" : "AM"

  hours = hours % 12
  hours = hours ? hours : 12 // Convert 0 to 12

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes

  return `${hours}:${formattedMinutes} ${ampm}`
}

// Setup Event Listeners
function setupEventListeners() {
  // Apply promo code
  if (applyPromoBtn && promoCodeInput) {
    applyPromoBtn.addEventListener("click", () => {
      const code = promoCodeInput.value.trim()
      if (code) {
        applyPromoCode(code)
      } else {
        showToast("Please enter a promo code")
      }
    })

    promoCodeInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        const code = promoCodeInput.value.trim()
        if (code) {
          applyPromoCode(code)
        } else {
          showToast("Please enter a promo code")
        }
      }
    })
  }

  // Remove promo code
  if (removePromoBtn) {
    removePromoBtn.addEventListener("click", removePromoCode)
  }

  // Checkout button
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      // In a real app, this would navigate to the checkout page
      // For demo purposes, we'll simulate a successful order

      // Clear cart
      cart = {
        items: [],
        subtotal: 0,
        deliveryFee: 2.99,
        tax: 0,
        discount: 0,
        total: 0,
        promoApplied: false,
        promoCode: "",
      }

      // Save empty cart to localStorage
      saveCart()

      // Hide cart content
      if (cartContent) {
        cartContent.classList.add("hidden")
      }

      // Initialize delivery tracking
      initDeliveryTracking()
    })
  }
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initCartPage)

// declare L
var L

