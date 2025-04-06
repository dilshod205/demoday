// Элементы DOM
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

// Пример данных
const restaurant = {
  id: 1,
  name: "Burger Palace",
  image: "/placeholder.svg?height=300&width=1200",
  rating: 4.8,
  reviewCount: 243,
  categories: ["Фастфуд", "Бургеры", "Американская"],
  priceRange: "$$",
  deliveryTime: "15-25 мин",
  deliveryFee: "$2.99",
  minOrder: "$10",
  address: "123 Main St, New York, NY 10001",
  phone: "(555) 123-4567",
  hours: "10:00 AM - 10:00 PM",
  description:
    "Готовим самые сочные бургеры в городе с 2010 года. Наши котлеты из 100% органической говядины и подаются на свежеиспеченных булочках.",
}

const menuData = [
  {
    id: "burgers",
    name: "Бургеры",
    items: [
      {
        id: 1,
        name: "Классический чизбургер",
        description:
          "Говяжья котлета, сыр чеддер, салат, помидор, лук, соленые огурцы и фирменный соус на бриошь-булочке.",
        price: 8.99,
        image: "https://res.cloudinary.com/grubhub-dev/image/upload/w_960,f_auto/whitelabel/w_burger_cuisine",
        tags: ["Популярный", "Хит продаж"],
        nutrition: {
          calories: 650,
          protein: 35,
          carbs: 40,
          fat: 35,
        },
        options: [
          {
            name: "Дополнительный сыр",
            price: 1.5,
          },
          {
            name: "Бекон",
            price: 2.0,
          },
          {
            name: "Авокадо",
            price: 1.5,
          },
        ],
      },
      {
        id: 2,
        name: "Двойной бекон бургер",
        description: "Две говяжьи котлеты, хрустящий бекон, сыр чеддер, салат, помидор и майонез на бриошь-булочке.",
        price: 12.99,
        image: "https://recipeno.sfo2.cdn.digitaloceanspaces.com/photos/content/678/keto_bacon_double_cheeseburger.jpg",
        tags: ["Острый"],
        nutrition: {
          calories: 950,
          protein: 55,
          carbs: 45,
          fat: 60,
        },
        options: [
          {
            name: "Дополнительный сыр",
            price: 1.5,
          },
          {
            name: "Дополнительный бекон",
            price: 2.0,
          },
        ],
      },
      {
        id: 3,
        name: "Вегетарианский бургер",
        description: "Растительная котлета, салат, помидор, лук, соленые огурцы и веганский майонез на цельнозерновой булочке.",
        price: 9.99,
        image: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
        tags: ["Вегетарианский"],
        nutrition: {
          calories: 450,
          protein: 15,
          carbs: 60,
          fat: 20,
        },
        options: [
          {
            name: "Веганский сыр",
            price: 1.5,
          },
          {
            name: "Авокадо",
            price: 1.5,
          },
        ],
      },
    ],
  },
  {
    id: "sides",
    name: "Гарниры",
    items: [
      {
        id: 4,
        name: "Картофель фри",
        description: "Хрустящая золотистая картошка с фирменной смесью специй.",
        price: 3.99,
        image: "https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg",
        tags: ["Популярный"],
        nutrition: {
          calories: 380,
          protein: 4,
          carbs: 50,
          fat: 18,
        },
        options: [
          {
            name: "Сырный соус",
            price: 1.0,
          },
          {
            name: "Трюфельное масло",
            price: 2.0,
          },
        ],
      },
      {
        id: 5,
        name: "Луковые кольца",
        description: "Толстые луковые кольца в хрустящем кляре.",
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
            name: "Соус для макания",
            price: 0.5,
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Напитки",
    items: [
      {
        id: 6,
        name: "Газировка",
        description: "На выбор: Coca-Cola, Diet Coke, Sprite или Fanta.",
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
            name: "Большой размер",
            price: 1.0,
          },
        ],
      },
      {
        id: 7,
        name: "Милкшейк",
        description: "Сливочный милкшейк из премиального мороженого. Доступные вкусы: шоколад, ваниль, клубника.",
        price: 5.99,
        image: "https://www.layersofhappiness.com/wp-content/uploads/2016/03/black-tap-milkshake-15.jpg",
        tags: ["Популярный"],
        nutrition: {
          calories: 550,
          protein: 10,
          carbs: 75,
          fat: 25,
        },
        options: [
          {
            name: "Взбитые сливки",
            price: 0.5,
          },
          {
            name: "Вишенка сверху",
            price: 0.25,
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    name: "Десерты",
    items: [
      {
        id: 8,
        name: "Шоколадный брауни",
        description: "Теплый шоколадный брауни с ванильным мороженым и шоколадным соусом.",
        price: 6.99,
        image: "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/chocolate-brownies-recipe.png?fit=1080%2C1080&ssl=1",
        tags: ["Хит продаж"],
        nutrition: {
          calories: 650,
          protein: 8,
          carbs: 85,
          fat: 30,
        },
        options: [
          {
            name: "Дополнительное мороженое",
            price: 1.5,
          },
        ],
      },
    ],
  },
]

// Состояние корзины
let cart = {
  items: [],
  subtotal: 0,
  deliveryFee: 2.99,
  discount: 0,
  total: 0,
  promoApplied: false,
}

// Инициализация страницы ресторана
function initRestaurantPage() {
  // Получение ID ресторана из URL
  const urlParams = new URLSearchParams(window.location.search)
  const restaurantId = urlParams.get("id")

  // В реальном приложении здесь был бы запрос данных по ID
  // Для демо используем пример данных

  renderRestaurantHero()
  renderMenuCategories()
  renderMenuItems()

  // Загрузка корзины из localStorage
  loadCart()

  // Настройка обработчиков событий
  setupEventListeners()
}

// Отображение героя ресторана
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
                    <span>(${restaurant.reviewCount} отзывов)</span>
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
                    <span>Доставка: ${restaurant.deliveryFee}</span>
                </div>
            </div>
            <p>${restaurant.description}</p>
        </div>
    `

  restaurantHero.appendChild(heroContent)
}

// Отображение категорий меню
function renderMenuCategories() {
  if (!menuCategories) return

  menuCategories.innerHTML = ""

  // Кнопка "Все"
  const allCategoryBtn = document.createElement("button")
  allCategoryBtn.className = "category-btn active"
  allCategoryBtn.dataset.category = "all"
  allCategoryBtn.textContent = "Все"
  allCategoryBtn.addEventListener("click", () => {
    setActiveCategory("all")
  })
  menuCategories.appendChild(allCategoryBtn)

  // Остальные категории
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

// Установка активной категории
function setActiveCategory(categoryId) {
  const categoryBtns = document.querySelectorAll(".category-btn")
  categoryBtns.forEach((btn) => {
    if (btn.dataset.category === categoryId) {
      btn.classList.add("active")
    } else {
      btn.classList.remove("active")
    }
  })

  // Скролл к выбранной категории
  if (categoryId !== "all") {
    const categorySection = document.getElementById(`category-${categoryId}`)
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" })
    }
  } else {
    // Скролл к началу меню
    menuItems.scrollIntoView({ behavior: "smooth" })
  }
}

// Отображение элементов меню
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

      // Обработчик клика для открытия модального окна
      menuItem.addEventListener("click", (e) => {
        if (!e.target.closest(".add-to-cart-btn")) {
          openItemModal(item)
        }
      })

      itemsGrid.appendChild(menuItem)
    })
  })

  // Обработчики для кнопок добавления в корзину
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn")
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const itemId = Number.parseInt(btn.dataset.itemId)
      addToCart(findItemById(itemId), 1)
    })
  })
}

// Поиск элемента по ID
function findItemById(itemId) {
  for (const category of menuData) {
    const item = category.items.find((item) => item.id === itemId)
    if (item) return item
  }
  return null
}

// Открытие модального окна товара
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
                <h3 class="nutrition-title">Пищевая ценность</h3>
                <div class="nutrition-info">
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.calories}</span>
                        <span class="nutrition-label">Калории</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.protein}g</span>
                        <span class="nutrition-label">Белки</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.carbs}g</span>
                        <span class="nutrition-label">Углеводы</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${item.nutrition.fat}g</span>
                        <span class="nutrition-label">Жиры</span>
                    </div>
                </div>
            </div>
            
            ${
              item.options.length > 0
                ? `
                <div class="modal-item-options">
                    <h3 class="options-title">Дополнительные опции</h3>
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
                <span class="quantity-label">Количество:</span>
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
                <span>Итого:</span>
                <span id="modalItemTotal">$${item.price.toFixed(2)}</span>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-outline" id="cancelModal">Отмена</button>
                <button class="btn btn-primary" id="addToCartModal">В корзину</button>
            </div>
        </div>
    `

  itemModal.classList.add("active")
  document.body.style.overflow = "hidden"

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

  function updateTotalPrice() {
    totalPrice = item.price * quantity

    selectedOptions.forEach((option) => {
      totalPrice += option.price * quantity
    })

    modalItemTotal.textContent = `$${totalPrice.toFixed(2)}`
  }

  if (decreaseQuantityBtn) {
    decreaseQuantityBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--
        quantityValue.textContent = quantity
        updateTotalPrice()
      }
    })
  }

  if (increaseQuantityBtn) {
    increaseQuantityBtn.addEventListener("click", () => {
      quantity++
      quantityValue.textContent = quantity
      updateTotalPrice()
    })
  }

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

  if (cancelModalBtn) {
    cancelModalBtn.addEventListener("click", closeItemModal)
  }

  if (addToCartModalBtn) {
    addToCartModalBtn.addEventListener("click", () => {
      const itemToAdd = {
        ...item,
        selectedOptions: [...selectedOptions],
      }

      addToCart(itemToAdd, quantity)
      closeItemModal()
    })
  }
}

// Закрытие модального окна
function closeItemModal() {
  if (!itemModal) return

  itemModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Добавление в корзину
function addToCart(item, quantity) {
  if (!item) return

  const existingItemIndex = cart.items.findIndex(
    (cartItem) =>
      cartItem.id === item.id &&
      JSON.stringify(cartItem.selectedOptions) === JSON.stringify(item.selectedOptions || []),
  )

  if (existingItemIndex !== -1) {
    cart.items[existingItemIndex].quantity += quantity
  } else {
    cart.items.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
      selectedOptions: item.selectedOptions || [],
    })
  }

  updateCart()
  showToast(`${quantity} x ${item.name} добавлено в корзину`)
}

// Обновление корзины
function updateCart() {
  cart.subtotal = cart.items.reduce((total, item) => {
    let itemTotal = item.price * item.quantity

    if (item.selectedOptions) {
      item.selectedOptions.forEach((option) => {
        itemTotal += option.price * item.quantity
      })
    }

    return total + itemTotal
  }, 0)

  cart.total = cart.subtotal + cart.deliveryFee - cart.discount

  renderCartItems()
  updateCartSummary()
  saveCart()
}

// Отображение элементов корзины
function renderCartItems() {
  if (!cartItems) return

  if (cart.items.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Ваша корзина пуста</p>
                <p class="empty-cart-message">Добавьте товары из меню чтобы начать заказ</p>
            </div>
        `

    if (checkoutBtn) {
      checkoutBtn.disabled = true
    }

    return
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = false
  }

  cartItems.innerHTML = ""

  cart.items.forEach((item, index) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"

    let itemTotal = item.price * item.quantity
    let optionsText = ""

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

// Обновление сводки корзины
function updateCartSummary() {
  if (!cartSubtotal || !deliveryFee || !cartTotal) return

  cartSubtotal.textContent = `$${cart.subtotal.toFixed(2)}`
  deliveryFee.textContent = `$${cart.deliveryFee.toFixed(2)}`
  cartTotal.textContent = `$${cart.total.toFixed(2)}`

  if (cart.discount > 0) {
    discountRow.classList.remove("hidden")
    discountAmount.textContent = `-$${cart.discount.toFixed(2)}`
  } else {
    discountRow.classList.add("hidden")
  }
}

// Уменьшение количества товара
function decreaseItemQuantity(index) {
  if (cart.items[index].quantity > 1) {
    cart.items[index].quantity--
    updateCart()
  } else {
    removeCartItem(index)
  }
}

// Увеличение количества товара
function increaseItemQuantity(index) {
  cart.items[index].quantity++
  updateCart()
}

// Удаление товара из корзины
function removeCartItem(index) {
  cart.items.splice(index, 1)
  updateCart()
}

// Применение промокода
function applyPromoCode(code) {
  if (code.toUpperCase() === "WELCOME50" && !cart.promoApplied) {
    cart.discount = cart.subtotal * 0.5
    cart.promoApplied = true
    updateCart()
    showToast("Промокод применён: скидка 50%")
    return true
  } else if (code.toUpperCase() === "FREESHIP" && !cart.promoApplied) {
    cart.discount = cart.deliveryFee
    cart.promoApplied = true
    updateCart()
    showToast("Промокод применён: Бесплатная доставка")
    return true
  } else if (cart.promoApplied) {
    showToast("Промокод уже применён")
    return false
  } else {
    showToast("Неверный промокод")
    return false
  }
}

// Сохранение корзины в localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))

  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

// Загрузка корзины из localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    cart = JSON.parse(savedCart)
    updateCartSummary()
    renderCartItems()
  }
}

// Показать уведомление
function showToast(message) {
  const toast = document.createElement("div")
  toast.className = "toast"
  toast.textContent = message

  document.body.appendChild(toast)

  setTimeout(() => {
    toast.classList.add("show")
  }, 100)

  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 3000)
}

// Настройка обработчиков событий
function setupEventListeners() {
  if (modalClose) {
    modalClose.addEventListener("click", closeItemModal)
  }

  if (itemModal) {
    itemModal.addEventListener("click", (e) => {
      if (e.target === itemModal) {
        closeItemModal()
      }
    })
  }

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

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      <audio id="audio" src="uzbeki-kushaiut.mp3"> </audio>
    })
  }
}

// Инициализация при загрузке DOM
document.addEventListener("DOMContentLoaded", initRestaurantPage)
