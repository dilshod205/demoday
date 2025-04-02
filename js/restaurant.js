// DOM Elements
const restaurantHero = document.getElementById("restaurantHero")
const menuCategories = document.getElementById("menuCategories")
const menuItems = document.getElementById("menuItems")
const cartItems = document.getElementById("cartItems")
const cartSubtotal = document.getElementById("cartSubtotal")
const deliveryFee = document.getElementById("deliveryFee")
const discountRow = document.getElementById("discountRow")
const discountAmount = document.getElementById("discountAmount")
const cartTotal = document.getElementById("cartTotal")
const checkoutBtn = document.getElementById("checkoutBtn")
const promoCode = document.getElementById("promoCode")
const applyPromo = document.getElementById("applyPromo")
const itemModal = document.getElementById("itemModal")
const modalClose = document.getElementById("modalClose")
const modalBody = document.getElementById("modalBody")

// Sample Data
const restaurant = {
  id: 1,
  name: "Burger Palace",
  image: "/placeholder.svg?height=300&width=1200",
  rating: 4.8,
  reviewCount: 243,
  categories: ["Fast Food", "Burgers", "American"],
  priceRange: "$$",
  deliveryTime: "15-25 min",
  deliveryFee: "$2.99",
  minOrder: "$10",
  address: "123 Main St, New York, NY 10001",
  phone: "(555) 123-4567",
  hours: "10:00 AM - 10:00 PM",
  description:
    "Serving the juiciest burgers in town since 2010. Our patties are made from 100% grass-fed beef and served on freshly baked buns.",
}

const menuData = [
  {
    id: "burgers",
    name: "Burgers",
    items: [
      {
        id: 1,
        name: "Classic Cheeseburger",
        description:
          "Beef patty, cheddar cheese, lettuce, tomato, onion, pickles, and our special sauce on a brioche bun.",
        price: 8.99,
        image: "https://res.cloudinary.com/grubhub-dev/image/upload/w_960,f_auto/whitelabel/w_burger_cuisine",
        tags: ["Popular", "Bestseller"],
        nutrition: {
          calories: 650,
          protein: 35,
          carbs: 40,
          fat: 35,
        },
        options: [
          {
            name: "Extra Cheese",
            price: 1.5,
          },
          {
            name: "Bacon",
            price: 2.0,
          },
          {
            name: "Avocado",
            price: 1.5,
          },
        ],
      },
      {
        id: 2,
        name: "Double Bacon Burger",
        description: "Two beef patties, crispy bacon, cheddar cheese, lettuce, tomato, and mayo on a brioche bun.",
        price: 12.99,
        image: "https://recipeno.sfo2.cdn.digitaloceanspaces.com/photos/content/678/keto_bacon_double_cheeseburger.jpg",
        tags: ["Spicy"],
        nutrition: {
          calories: 950,
          protein: 55,
          carbs: 45,
          fat: 60,
        },
        options: [
          {
            name: "Extra Cheese",
            price: 1.5,
          },
          {
            name: "Extra Bacon",
            price: 2.0,
          },
        ],
      },
      {
        id: 3,
        name: "Veggie Burger",
        description: "Plant-based patty, lettuce, tomato, onion, pickles, and vegan mayo on a whole wheat bun.",
        price: 9.99,
        image: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
        tags: ["Vegetarian"],
        nutrition: {
          calories: 450,
          protein: 15,
          carbs: 60,
          fat: 20,
        },
        options: [
          {
            name: "Vegan Cheese",
            price: 1.5,
          },
          {
            name: "Avocado",
            price: 1.5,
          },
        ],
      },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      {
        id: 4,
        name: "French Fries",
        description: "Crispy golden fries seasoned with our special blend of spices.",
        price: 3.99,
        image: "https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg",
        tags: ["Popular"],
        nutrition: {
          calories: 380,
          protein: 4,
          carbs: 50,
          fat: 18,
        },
        options: [
          {
            name: "Cheese Sauce",
            price: 1.0,
          },
          {
            name: "Truffle Oil",
            price: 2.0,
          },
        ],
      },
      {
        id: 5,
        name: "Onion Rings",
        description: "Thick-cut onion rings in a crispy beer batter.",
        price: 4.99,
        image: "https://static01.nyt.com/images/2020/04/22/dining/ejm-sourdough-03/ejm-sourdough-03-threeByTwoMediumAt2X.jpg",
        tags: [],
        nutrition: {
          calories: 420,
          protein: 6,
          carbs: 55,
          fat: 22,
        },
        options: [
          {
            name: "Dipping Sauce",
            price: 0.5,
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        id: 6,
        name: "Soft Drink",
        description: "Your choice of Coca-Cola, Diet Coke, Sprite, or Fanta.",
        price: 2.49,
        image: "https://d2td6mzj4f4e1e.cloudfront.net/wp-content/uploads/sites/9/2019/04/soft-drinks.jpg",
        tags: [],
        nutrition: {
          calories: 150,
          protein: 0,
          carbs: 39,
          fat: 0,
        },
        options: [
          {
            name: "Large Size",
            price: 1.0,
          },
        ],
      },
      {
        id: 7,
        name: "Milkshake",
        description: "Creamy milkshake made with premium ice cream. Available in chocolate, vanilla, or strawberry.",
        price: 5.99,
        image: "https://www.layersofhappiness.com/wp-content/uploads/2016/03/black-tap-milkshake-15.jpg",
        tags: ["Popular"],
        nutrition: {
          calories: 550,
          protein: 10,
          carbs: 75,
          fat: 25,
        },
        options: [
          {
            name: "Whipped Cream",
            price: 0.5,
          },
          {
            name: "Cherry on Top",
            price: 0.25,
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: 8,
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie served with vanilla ice cream and chocolate sauce.",
        price: 6.99,
        image: "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/chocolate-brownies-recipe.png?fit=1080%2C1080&ssl=1",
        tags: ["Bestseller"],
        nutrition: {
          calories: 650,
          protein: 8,
          carbs: 85,
          fat: 30,
        },
        options: [
          {
            name: "Extra Ice Cream",
            price: 1.5,
          },
        ],
      },
    ],
  },
]

// Cart State
let cart = {
  items: [],
  subtotal: 0,
  deliveryFee: 2.99,
  discount: 0,
  total: 0,
  promoApplied: false,
}

// Initialize Restaurant Page
function initRestaurantPage() {
  // Get restaurant ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const restaurantId = urlParams.get("id")

  // In a real app, we would fetch the restaurant data based on the ID
  // For demo purposes, we'll use the sample data

  renderRestaurantHero()
  renderMenuCategories()
  renderMenuItems()

  // Initialize cart from localStorage
  loadCart()

  // Set up event listeners
  setupEventListeners()
}

// Render Restaurant Hero
function renderRestaurantHero() {
  if (!restaurantHero) return

  restaurantHero.style.backgroundImage = `url(${restaurant.image})`

  const heroContent = document.createElement("div")
  heroContent.className = "restaurant-hero-content"
  heroContent.innerHTML = `
        <div class="container">
            <h1 class="restaurant-name-header">${restaurant.name}</h1>
            <div class="restaurant-meta-info">
                <div class="restaurant-meta-item restaurant-rating">
                    <i class="fas fa-star"></i>
                    <span>${restaurant.rating}</span>
                    <span>(${restaurant.reviewCount} reviews)</span>
                </div>
                <div class="restaurant-meta-item">
                    <i class="fas fa-utensils"></i>
                    <span>${restaurant.categories.join(", ")}</span>
                </div>
                <div class="restaurant-meta-item">
                    <i class="fas fa-dollar-sign"></i>
                    <span>${restaurant.priceRange}</span>
                </div>
                <div class="restaurant-meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${restaurant.deliveryTime}</span>
                </div>
                <div class="restaurant-meta-item">
                    <i class="fas fa-truck"></i>
                    <span>Delivery: ${restaurant.deliveryFee}</span>
                </div>
            </div>
            <p>${restaurant.description}</p>
        </div>
    `

  restaurantHero.appendChild(heroContent)
}

// Render Menu Categories
function renderMenuCategories() {
  if (!menuCategories) return

  menuCategories.innerHTML = ""

  // Add "All" category
  const allCategoryBtn = document.createElement("button")
  allCategoryBtn.className = "category-btn active"
  allCategoryBtn.dataset.category = "all"
  allCategoryBtn.textContent = "All"
  allCategoryBtn.addEventListener("click", () => {
    setActiveCategory("all")
  })
  menuCategories.appendChild(allCategoryBtn)

  // Add other categories
  menuData.forEach((category) => {
    const categoryBtn = document.createElement("button")
    categoryBtn.className = "category-btn"
    categoryBtn.dataset.category = category.id
    categoryBtn.textContent = category.name
    categoryBtn.addEventListener("click", () => {
      setActiveCategory(category.id)
    })
    menuCategories.appendChild(categoryBtn)
  })
}

// Set Active Category
function setActiveCategory(categoryId) {
  const categoryBtns = document.querySelectorAll(".category-btn")
  categoryBtns.forEach((btn) => {
    if (btn.dataset.category === categoryId) {
      btn.classList.add("active")
    } else {
      btn.classList.remove("active")
    }
  })

  // Scroll to category section
  if (categoryId !== "all") {
    const categorySection = document.getElementById(`category-${categoryId}`)
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" })
    }
  } else {
    // Scroll to top of menu items
    menuItems.scrollIntoView({ behavior: "smooth" })
  }
}

// Render Menu Items
function renderMenuItems() {
  if (!menuItems) return

  menuItems.innerHTML = ""

  menuData.forEach((category) => {
    const categorySection = document.createElement("div")
    categorySection.className = "menu-category"
    categorySection.id = `category-${category.id}`

    categorySection.innerHTML = `
            <h2 class="menu-category-title">${category.name}</h2>
            <div class="menu-items-grid" id="items-${category.id}"></div>
        `

    menuItems.appendChild(categorySection)

    const itemsGrid = document.getElementById(`items-${category.id}`)

    category.items.forEach((item) => {
      const menuItem = document.createElement("div")
      menuItem.className = "menu-item"
      menuItem.dataset.itemId = item.id

      menuItem.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <h3 class="menu-item-name">${item.name}</h3>
                        <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-actions">
                        <div class="menu-item-tags">
                            ${item.tags.map((tag) => `<span class="menu-item-tag">${tag}</span>`).join("")}
                        </div>
                        <button class="add-to-cart-btn" data-item-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `

      // Add click event to open modal
      menuItem.addEventListener("click", (e) => {
        // Don't open modal if add to cart button was clicked
        if (!e.target.closest(".add-to-cart-btn")) {
          openItemModal(item)
        }
      })

      itemsGrid.appendChild(menuItem)
    })
  })

  // Add click event to add to cart buttons
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn")
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation() // Prevent modal from opening
      const itemId = Number.parseInt(btn.dataset.itemId)
      addToCart(findItemById(itemId), 1)
    })
  })
}

// Find Item by ID
function findItemById(itemId) {
  for (const category of menuData) {
    const item = category.items.find((item) => item.id === itemId)
    if (item) return item
  }
  return null
}

// Open Item Modal
function openItemModal(item) {
  if (!itemModal || !modalBody) return

  modalBody.innerHTML = `
        <div class="modal-item">
            <div class="modal-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h2 class="modal-item-name">${item.name}</h2>
            <div class="modal-item-price">$${item.price.toFixed(2)}</div>
            <p class="modal-item-description">${item.description}</p>
            
            <div class="modal-item-nutrition">
                <h3 class="nutrition-title">Nutrition Information</h3>
                <div class="nutrition-info">
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.calories}</span>
                        <span class="nutrition-label">Calories</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.protein}g</span>
                        <span class="nutrition-label">Protein</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.carbs}g</span>
                        <span class="nutrition-label">Carbs</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.fat}g</span>
                        <span class="nutrition-label">Fat</span>
                    </div>
                </div>
            </div>
            
            ${
              item.options.length > 0
                ? `
                <div class="modal-item-options">
                    <h3 class="options-title">Add Options</h3>
                    <div class="options-list">
                        ${item.options
                          .map(
                            (option, index) => `
                            <div class="option-item">
                                <input type="checkbox" id="option-${index}" data-price="${option.price}">
                                <label for="option-${index}">${option.name}</label>
                                <span class="option-price">+$${option.price.toFixed(2)}</span>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            `
                : ""
            }
            
            <div class="modal-item-quantity">
                <span class="quantity-label">Quantity:</span>
                <div class="quantity-controls">
                    <button class="quantity-btn-modal" id="decreaseQuantity">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-value-modal" id="quantityValue">1</span>
                    <button class="quantity-btn-modal" id="increaseQuantity">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            
            <div class="modal-item-total">
                <span>Total:</span>
                <span id="modalItemTotal">$${item.price.toFixed(2)}</span>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-outline" id="cancelModal">Cancel</button>
                <button class="btn btn-primary" id="addToCartModal">Add to Cart</button>
            </div>
        </div>
    `

  // Show modal
  itemModal.classList.add("active")
  document.body.style.overflow = "hidden"

  // Set up event listeners for modal
  const decreaseQuantityBtn = document.getElementById("decreaseQuantity")
  const increaseQuantityBtn = document.getElementById("increaseQuantity")
  const quantityValue = document.getElementById("quantityValue")
  const modalItemTotal = document.getElementById("modalItemTotal")
  const cancelModalBtn = document.getElementById("cancelModal")
  const addToCartModalBtn = document.getElementById("addToCartModal")
  const optionCheckboxes = document.querySelectorAll('.option-item input[type="checkbox"]')

  let quantity = 1
  let totalPrice = item.price
  let selectedOptions = []

  // Update total price
  function updateTotalPrice() {
    totalPrice = item.price * quantity

    // Add selected options price
    selectedOptions.forEach((option) => {
      totalPrice += option.price * quantity
    })

    modalItemTotal.textContent = `$${totalPrice.toFixed(2)}`
  }

  // Decrease quantity
  if (decreaseQuantityBtn) {
    decreaseQuantityBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--
        quantityValue.textContent = quantity
        updateTotalPrice()
      }
    })
  }

  // Increase quantity
  if (increaseQuantityBtn) {
    increaseQuantityBtn.addEventListener("click", () => {
      quantity++
      quantityValue.textContent = quantity
      updateTotalPrice()
    })
  }

  // Option checkboxes
  optionCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      const optionPrice = Number.parseFloat(checkbox.dataset.price)
      const optionName = checkbox.nextElementSibling.textContent

      if (checkbox.checked) {
        selectedOptions.push({
          name: optionName,
          price: optionPrice,
        })
      } else {
        selectedOptions = selectedOptions.filter((option) => option.name !== optionName)
      }

      updateTotalPrice()
    })
  })

  // Cancel button
  if (cancelModalBtn) {
    cancelModalBtn.addEventListener("click", closeItemModal)
  }

  // Add to cart button
  if (addToCartModalBtn) {
    addToCartModalBtn.addEventListener("click", () => {
      // Create a copy of the item with selected options
      const itemToAdd = {
        ...item,
        selectedOptions: [...selectedOptions],
      }

      addToCart(itemToAdd, quantity)
      closeItemModal()
    })
  }
}

// Close Item Modal
function closeItemModal() {
  if (!itemModal) return

  itemModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Add to Cart
function addToCart(item, quantity) {
  if (!item) return

  // Check if item is already in cart
  const existingItemIndex = cart.items.findIndex(
    (cartItem) =>
      cartItem.id === item.id &&
      JSON.stringify(cartItem.selectedOptions) === JSON.stringify(item.selectedOptions || []),
  )

  if (existingItemIndex !== -1) {
    // Update quantity if item already exists
    cart.items[existingItemIndex].quantity += quantity
  } else {
    // Add new item to cart
    cart.items.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
      selectedOptions: item.selectedOptions || [],
    })
  }

  // Update cart
  updateCart()

  // Show success message
  showToast(`${quantity} x ${item.name} added to cart`)
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

  // Calculate total
  cart.total = cart.subtotal + cart.deliveryFee - cart.discount

  // Update UI
  renderCartItems()
  updateCartSummary()

  // Save cart to localStorage
  saveCart()
}

// Render Cart Items
function renderCartItems() {
  if (!cartItems) return

  if (cart.items.length === 0) {
    // Show empty cart message
    cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <p class="empty-cart-message">Add items from the menu to start your order</p>
            </div>
        `

    // Disable checkout button
    if (checkoutBtn) {
      checkoutBtn.disabled = true
    }

    return
  }

  // Enable checkout button
  if (checkoutBtn) {
    checkoutBtn.disabled = false
  }

  // Render cart items
  cartItems.innerHTML = ""

  cart.items.forEach((item, index) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"

    // Calculate item total
    let itemTotal = item.price * item.quantity
    let optionsText = ""

    // Add selected options
    if (item.selectedOptions && item.selectedOptions.length > 0) {
      item.selectedOptions.forEach((option) => {
        itemTotal += option.price * item.quantity
        optionsText += `<div class="cart-item-option">+ ${option.name}</div>`
      })
    }

    cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                ${optionsText}
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
                <span class="remove-item" data-index="${index}">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </div>
        `

    cartItems.appendChild(cartItem)
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
  if (!cartSubtotal || !deliveryFee || !cartTotal) return

  cartSubtotal.textContent = `$${cart.subtotal.toFixed(2)}`
  deliveryFee.textContent = `$${cart.deliveryFee.toFixed(2)}`
  cartTotal.textContent = `$${cart.total.toFixed(2)}`

  // Show/hide discount row
  if (cart.discount > 0) {
    discountRow.classList.remove("hidden")
    discountAmount.textContent = `-$${cart.discount.toFixed(2)}`
  } else {
    discountRow.classList.add("hidden")
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
}

// Apply Promo Code
function applyPromoCode(code) {
  // In a real app, this would validate the promo code with an API
  // For demo purposes, we'll use a simple check

  if (code.toUpperCase() === "WELCOME50" && !cart.promoApplied) {
    // 50% off discount
    cart.discount = cart.subtotal * 0.5
    cart.promoApplied = true
    updateCart()
    showToast("Promo code applied: 50% off")
    return true
  } else if (code.toUpperCase() === "FREESHIP" && !cart.promoApplied) {
    // Free shipping
    cart.discount = cart.deliveryFee
    cart.promoApplied = true
    updateCart()
    showToast("Promo code applied: Free delivery")
    return true
  } else if (cart.promoApplied) {
    showToast("A promo code has already been applied")
    return false
  } else {
    showToast("Invalid promo code")
    return false
  }
}

// Save Cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))

  // Update cart count in header
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

// Load Cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    cart = JSON.parse(savedCart)
    updateCartSummary()
    renderCartItems()
  }
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

// Setup Event Listeners
function setupEventListeners() {
  // Modal close button
  if (modalClose) {
    modalClose.addEventListener("click", closeItemModal)
  }

  // Close modal when clicking outside
  if (itemModal) {
    itemModal.addEventListener("click", (e) => {
      if (e.target === itemModal) {
        closeItemModal()
      }
    })
  }

  // Apply promo code
  if (applyPromo && promoCode) {
    applyPromo.addEventListener("click", () => {
      const code = promoCode.value.trim()
      if (code) {
        applyPromoCode(code)
      }
    })

    promoCode.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        const code = promoCode.value.trim()
        if (code) {
          applyPromoCode(code)
        }
      }
    })
  }

  // Checkout button
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      // In a real app, this would navigate to the checkout page
      alert("In a real app, this would navigate to the checkout page")
    })
  }
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initRestaurantPage)

