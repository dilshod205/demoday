// DOM Elements
const profileMenuItems = document.querySelectorAll(".profile-menu-item")
const profileTabs = document.querySelectorAll(".profile-tab")
const avatarUpload = document.getElementById("avatarUpload")
const profileAvatar = document.getElementById("profileAvatar")
const profileName = document.getElementById("profileName")
const profileEmail = document.getElementById("profileEmail")
const personalInfoForm = document.getElementById("personalInfoForm")
const passwordForm = document.getElementById("passwordForm")
const addAddressBtn = document.getElementById("addAddressBtn")
const addressForm = document.getElementById("addressForm")
const cancelAddressBtn = document.getElementById("cancelAddressBtn")
const addPaymentBtn = document.getElementById("addPaymentBtn")
const paymentForm = document.getElementById("paymentForm")
const cancelPaymentBtn = document.getElementById("cancelPaymentBtn")
const togglePasswordBtns = document.querySelectorAll(".toggle-password")

// User Data (In a real app, this would be fetched from an API or localStorage)
let userData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  birthDate: "1990-01-01",
  profilePicture: "img/default-avatar.png",
  addresses: [
    {
      id: 1,
      name: "Home",
      street: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
      isDefault: true,
    },
    {
      id: 2,
      name: "Work",
      street: "456 Office Plaza, Floor 12",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      country: "USA",
      isDefault: false,
    },
  ],
  paymentMethods: [
    {
      id: 1,
      type: "visa",
      lastFour: "4242",
      expiryDate: "12/2025",
      cardholderName: "John Doe",
    },
    {
      id: 2,
      type: "mastercard",
      lastFour: "8888",
      expiryDate: "08/2024",
      cardholderName: "John Doe",
    },
  ],
  orders: [
    {
      id: "12345",
      date: "June 15, 2023",
      time: "7:30 PM",
      restaurant: {
        name: "Burger Palace",
        image: "/placeholder.svg?height=50&width=50",
      },
      items: [
        { name: "Classic Cheeseburger", quantity: 1 },
        { name: "French Fries", quantity: 1 },
      ],
      total: 24.98,
      status: "delivered",
    },
    {
      id: "12344",
      date: "June 10, 2023",
      time: "1:15 PM",
      restaurant: {
        name: "Pizza Heaven",
        image: "/placeholder.svg?height=50&width=50",
      },
      items: [
        { name: "Pepperoni Pizza", quantity: 1 },
        { name: "Garlic Bread", quantity: 1 },
        { name: "Soft Drink", quantity: 1 },
      ],
      total: 32.97,
      status: "delivered",
    },
    {
      id: "12343",
      date: "June 5, 2023",
      time: "8:45 PM",
      restaurant: {
        name: "Sushi World",
        image: "/placeholder.svg?height=50&width=50",
      },
      items: [
        { name: "California Roll Set", quantity: 1 },
        { name: "Miso Soup", quantity: 1 },
      ],
      total: 42.98,
      status: "delivered",
    },
  ],
  favorites: [
    {
      id: 1,
      name: "Burger Palace",
      image: "/placeholder.svg?height=120&width=280",
      rating: 4.8,
      categories: ["Fast Food", "Burgers"],
      deliveryTime: "15-25 min",
      deliveryFee: "$2.99",
    },
    {
      id: 2,
      name: "Pizza Heaven",
      image: "/placeholder.svg?height=120&width=280",
      rating: 4.6,
      categories: ["Pizza", "Italian"],
      deliveryTime: "20-30 min",
      deliveryFee: "$1.99",
    },
    {
      id: 3,
      name: "Sushi World",
      image: "/placeholder.svg?height=120&width=280",
      rating: 4.9,
      categories: ["Sushi", "Japanese"],
      deliveryTime: "25-35 min",
      deliveryFee: "$3.99",
    },
  ],
}

// Initialize Profile Page
function initProfilePage() {
  // Load user data from localStorage if available
  const storedUser = localStorage.getItem("user")
  if (storedUser) {
    const user = JSON.parse(storedUser)
    // Merge stored user data with default data
    userData = { ...userData, ...user }
  }

  // Update profile header
  updateProfileHeader()

  // Fill personal info form
  fillPersonalInfoForm()

  // Set up tab switching
  setupTabSwitching()

  // Set up avatar upload
  setupAvatarUpload()

  // Set up form submissions
  setupFormSubmissions()

  // Set up address and payment forms
  setupAddressForm()
  setupPaymentForm()

  // Set up password toggle
  setupPasswordToggle()
}

// Update Profile Header
function updateProfileHeader() {
  if (profileAvatar) {
    profileAvatar.src = userData.profilePicture || "img/default-avatar.png"
  }

  if (profileName) {
    profileName.textContent = `${userData.firstName} ${userData.lastName}`
  }

  if (profileEmail) {
    profileEmail.textContent = userData.email
  }
}

// Fill Personal Info Form
function fillPersonalInfoForm() {
  if (!personalInfoForm) return

  const firstName = document.getElementById("firstName")
  const lastName = document.getElementById("lastName")
  const phoneNumber = document.getElementById("phoneNumber")
  const email = document.getElementById("email")
  const birthDate = document.getElementById("birthDate")

  if (firstName) firstName.value = userData.firstName || ""
  if (lastName) lastName.value = userData.lastName || ""
  if (phoneNumber) phoneNumber.value = userData.phone || ""
  if (email) email.value = userData.email || ""
  if (birthDate) birthDate.value = userData.birthDate || ""
}

// Setup Tab Switching
function setupTabSwitching() {
  profileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all menu items
      profileMenuItems.forEach((menuItem) => {
        menuItem.classList.remove("active")
      })

      // Add active class to clicked menu item
      item.classList.add("active")

      // Get tab ID
      const tabId = item.dataset.tab

      // Hide all tabs
      profileTabs.forEach((tab) => {
        tab.classList.remove("active")
      })

      // Show selected tab
      const selectedTab = document.getElementById(tabId)
      if (selectedTab) {
        selectedTab.classList.add("active")
      }
    })
  })
}

// Setup Avatar Upload
function setupAvatarUpload() {
  if (!avatarUpload) return

  avatarUpload.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        // Update avatar preview
        if (profileAvatar) {
          profileAvatar.src = event.target.result
        }

        // Update user data
        userData.profilePicture = event.target.result

        // Save to localStorage
        saveUserData()

        // Update header avatar
        const headerAvatar = document.getElementById("userAvatar")
        if (headerAvatar) {
          headerAvatar.src = event.target.result
        }

        // Show success message
        showToast("Profile picture updated successfully")
      }
      reader.readAsDataURL(file)
    }
  })
}

// Setup Form Submissions
function setupFormSubmissions() {
  // Personal Info Form
  if (personalInfoForm) {
    personalInfoForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const phoneNumber = document.getElementById("phoneNumber").value
      const birthDate = document.getElementById("birthDate").value

      // Update user data
      userData.firstName = firstName
      userData.lastName = lastName
      userData.phone = phoneNumber
      userData.birthDate = birthDate

      // Save to localStorage
      saveUserData()

      // Update profile header
      updateProfileHeader()

      // Show success message
      showToast("Personal information updated successfully")
    })
  }

  // Password Form
  if (passwordForm) {
    passwordForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const currentPassword = document.getElementById("currentPassword").value
      const newPassword = document.getElementById("newPassword").value
      const confirmNewPassword = document.getElementById("confirmNewPassword").value

      // Validate inputs
      if (!currentPassword) {
        showToast("Please enter your current password")
        return
      }

      if (newPassword.length < 6) {
        showToast("New password must be at least 6 characters")
        return
      }

      if (newPassword !== confirmNewPassword) {
        showToast("Passwords do not match")
        return
      }

      // In a real app, this would validate the current password with an API
      // For demo purposes, we'll just show a success message

      // Show success message
      showToast("Password updated successfully")

      // Reset form
      passwordForm.reset()
    })
  }
}

// Setup Address Form
function setupAddressForm() {
  if (!addAddressBtn || !addressForm || !cancelAddressBtn) return

  // Show address form
  addAddressBtn.addEventListener("click", () => {
    // Reset form
    document.getElementById("addressFormTitle").textContent = "Add New Address"
    addressForm.reset()

    // Show form
    addressForm.classList.remove("hidden")

    // Hide addresses container
    document.querySelector(".addresses-container").classList.add("hidden")
  })

  // Cancel address form
  cancelAddressBtn.addEventListener("click", () => {
    // Hide form
    addressForm.classList.add("hidden")

    // Show addresses container
    document.querySelector(".addresses-container").classList.remove("hidden")
  })

  // Edit address
  const editAddressBtns = document.querySelectorAll(".edit-address")
  editAddressBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const addressId = Number.parseInt(btn.dataset.id)
      const address = userData.addresses.find((addr) => addr.id === addressId)

      if (address) {
        // Fill form
        document.getElementById("addressFormTitle").textContent = "Edit Address"
        document.getElementById("addressName").value = address.name
        document.getElementById("streetAddress").value = address.street
        document.getElementById("city").value = address.city
        document.getElementById("state").value = address.state
        document.getElementById("zipCode").value = address.zipCode
        document.getElementById("country").value = address.country
        document.getElementById("defaultAddress").checked = address.isDefault

        // Show form
        addressForm.classList.remove("hidden")

        // Hide addresses container
        document.querySelector(".addresses-container").classList.add("hidden")
      }
    })
  })

  // Delete address
  const deleteAddressBtns = document.querySelectorAll(".delete-address")
  deleteAddressBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const addressId = Number.parseInt(btn.dataset.id)

      // Confirm deletion
      if (confirm("Are you sure you want to delete this address?")) {
        // In a real app, this would delete the address via an API
        // For demo purposes, we'll just show a success message
        showToast("Address deleted successfully")
      }
    })
  })

  // Set default address
  const setDefaultAddressBtns = document.querySelectorAll(".set-default-address")
  setDefaultAddressBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const addressId = Number.parseInt(btn.dataset.id)

      // In a real app, this would update the default address via an API
      // For demo purposes, we'll just show a success message
      showToast("Default address updated successfully")
    })
  })

  // Submit address form
  addressForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const addressName = document.getElementById("addressName").value
    const streetAddress = document.getElementById("streetAddress").value
    const city = document.getElementById("city").value
    const state = document.getElementById("state").value
    const zipCode = document.getElementById("zipCode").value
    const country = document.getElementById("country").value
    const isDefault = document.getElementById("defaultAddress").checked

    // Validate inputs
    if (!addressName || !streetAddress || !city || !state || !zipCode || !country) {
      showToast("Please fill in all required fields")
      return
    }

    // In a real app, this would save the address via an API
    // For demo purposes, we'll just show a success message
    showToast("Address saved successfully")

    // Hide form
    addressForm.classList.add("hidden")

    // Show addresses container
    document.querySelector(".addresses-container").classList.remove("hidden")
  })
}

// Setup Payment Form
function setupPaymentForm() {
  if (!addPaymentBtn || !paymentForm || !cancelPaymentBtn) return

  // Show payment form
  addPaymentBtn.addEventListener("click", () => {
    // Reset form
    paymentForm.reset()

    // Show form
    paymentForm.classList.remove("hidden")

    // Hide payment methods container
    document.querySelector(".payment-methods-container").classList.add("hidden")
  })

  // Cancel payment form
  cancelPaymentBtn.addEventListener("click", () => {
    // Hide form
    paymentForm.classList.add("hidden")

    // Show payment methods container
    document.querySelector(".payment-methods-container").classList.remove("hidden")
  })

  // Delete payment method
  const deletePaymentBtns = document.querySelectorAll(".delete-payment")
  deletePaymentBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const paymentId = Number.parseInt(btn.dataset.id)

      // Confirm deletion
      if (confirm("Are you sure you want to delete this payment method?")) {
        // In a real app, this would delete the payment method via an API
        // For demo purposes, we'll just show a success message
        showToast("Payment method deleted successfully")
      }
    })
  })

  // Submit payment form
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const cardNumber = document.getElementById("cardNumber").value
    const expiryDate = document.getElementById("expiryDate").value
    const cvv = document.getElementById("cvv").value
    const cardholderName = document.getElementById("cardholderName").value

    // Validate inputs
    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      showToast("Please fill in all required fields")
      return
    }

    // Validate card number format
    if (!validateCardNumber(cardNumber)) {
      showToast("Please enter a valid card number")
      return
    }

    // Validate expiry date format
    if (!validateExpiryDate(expiryDate)) {
      showToast("Please enter a valid expiry date (MM/YY)")
      return
    }

    // Validate CVV format
    if (!validateCVV(cvv)) {
      showToast("Please enter a valid CVV")
      return
    }

    // In a real app, this would save the payment method via an API
    // For demo purposes, we'll just show a success message
    showToast("Payment method added successfully")

    // Hide form
    paymentForm.classList.add("hidden")

    // Show payment methods container
    document.querySelector(".payment-methods-container").classList.remove("hidden")
  })
}

// Setup Password Toggle
function setupPasswordToggle() {
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

  // Password strength meter
  const newPassword = document.getElementById("newPassword")
  if (newPassword) {
    const strengthMeter = document.querySelector(".strength-meter span")
    const strengthText = document.querySelector(".strength-text span")

    newPassword.addEventListener("input", () => {
      const password = newPassword.value
      const strength = calculatePasswordStrength(password)

      // Update strength meter
      strengthMeter.style.width = `${strength.score * 25}%`
      strengthMeter.style.backgroundColor = strength.color
      strengthText.textContent = strength.label
      strengthText.style.color = strength.color
    })
  }
}

// Calculate Password Strength
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

// Validation Helpers
function validateCardNumber(cardNumber) {
  // Remove spaces and dashes
  const cleanedNumber = cardNumber.replace(/[\s-]/g, "")

  // Check if it contains only digits
  if (!/^\d+$/.test(cleanedNumber)) return false

  // Check length (most card numbers are 13-19 digits)
  if (cleanedNumber.length < 13 || cleanedNumber.length > 19) return false

  return true
}

function validateExpiryDate(expiryDate) {
  // Check format (MM/YY)
  if (!/^\d{2}\/\d{2}$/.test(expiryDate)) return false

  const [month, year] = expiryDate.split("/")
  const currentYear = new Date().getFullYear() % 100 // Get last 2 digits of year
  const currentMonth = new Date().getMonth() + 1 // Months are 0-indexed

  // Check if month is valid
  if (Number.parseInt(month) < 1 || Number.parseInt(month) > 12) return false

  // Check if date is in the past
  if (
    Number.parseInt(year) < currentYear ||
    (Number.parseInt(year) === currentYear && Number.parseInt(month) < currentMonth)
  ) {
    return false
  }

  return true
}

function validateCVV(cvv) {
  // Check if it contains only digits
  if (!/^\d+$/.test(cvv)) return false

  // Check length (most CVVs are 3-4 digits)
  if (cvv.length < 3 || cvv.length > 4) return false

  return true
}

// Save User Data to localStorage
function saveUserData() {
  const userToSave = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    birthDate: userData.birthDate,
    profilePicture: userData.profilePicture,
  }

  localStorage.setItem("user", JSON.stringify(userToSave))
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

// Remove Favorite
const removeFavoriteBtns = document.querySelectorAll(".remove-favorite")
removeFavoriteBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()

    const favoriteId = Number.parseInt(btn.dataset.id)

    // In a real app, this would remove the favorite via an API
    // For demo purposes, we'll just show a success message
    showToast("Restaurant removed from favorites")
  })
})

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", initProfilePage)

