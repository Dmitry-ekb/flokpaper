// Product data with correct image paths
const products = [
    { 
        id: 1, 
        name: "DAINEL SG AZALEE 72 Светло-розовый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG AZALEE 72 Светло-розовый.jpg", 
        description: "Нежная светло-розовая бархатная бумага премиум-качества. Идеально подходит для создания романтичных открыток и упаковки.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Светло-розовый"],
        status: "in-stock"
    },
    { 
        id: 2, 
        name: "DAINEL SG Bordeaux 12 Бордовый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Bordeaux 12 Бордовый.jpg", 
        description: "Насыщенный бордовый цвет с бархатистой текстурой. Создает элегантный и благородный вид.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Бордовый"],
        status: "in-stock"
    },
    { 
        id: 3, 
        name: "DAINEL SG Chamois 04 Коричневый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Chamois 04 Коричневый.jpg", 
        description: "Классический коричневый оттенок с бархатной поверхностью. Идеален для винтажных проектов.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Коричневый"],
        status: "in-stock"
    },
    { 
        id: 4, 
        name: "DAINEL SG Charbon 14 Черный", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Charbon 14 Черный.jpg", 
        description: "Глубокий черный цвет с эффектом бархата. Создает драматический и элегантный эффект.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Черный"],
        status: "in-stock"
    },
    { 
        id: 5, 
        name: "DAINEL SG Coquillage 23 Бежевый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Coquillage 23 Бежевый.jpg", 
        description: "Нежный бежевый оттенок с бархатной текстурой. Подходит для светлых и минималистичных проектов.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Бежевый"],
        status: "in-stock"
    },
    { 
        id: 6, 
        name: "DAINEL SG Dune 02 Тёмно-бежевый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Dune 02 Тёмно-бежевый.jpg", 
        description: "Теплый темно-бежевый цвет с бархатистой поверхностью. Создает уютную атмосферу.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Тёмно-бежевый"],
        status: "in-stock"
    },
    { 
        id: 7, 
        name: "DAINEL SG Forest 125 Тёмно-зелёный", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Forest 125 Тёмно-зелёный.jpg", 
        description: "Глубокий темно-зеленый оттенок, напоминающий лесную зелень. Идеален для природных тем.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Тёмно-зелёный"],
        status: "in-stock"
    },
    { 
        id: 8, 
        name: "DAINEL SG Fuchsia 51 Фуксия", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Fuchsia 51 Фуксия.jpg", 
        description: "Яркий цвет фуксии с бархатной текстурой. Добавляет смелости и энергии в проекты.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Фуксия"],
        status: "in-stock"
    },
    { 
        id: 9, 
        name: "DAINEL SG Iris 127 Синий", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Iris 127 Синий.jpg", 
        description: "Насыщенный синий цвет с бархатистой поверхностью. Создает спокойную и уверенную атмосферу.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Синий"],
        status: "in-stock"
    },
    { 
        id: 10, 
        name: "DAINEL SG Lemon 161 Лимонный", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Lemon 161 Лимонный.jpg", 
        description: "Солнечный лимонный оттенок с бархатной текстурой. Добавляет яркости и свежести.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Лимонный"],
        status: "in-stock"
    },
    { 
        id: 11, 
        name: "DAINEL SG Mauve 53 Сиреневый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Mauve 53 Сиреневый.jpg", 
        description: "Нежный сиреневый цвет с бархатной поверхностью. Создает романтичное настроение.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Сиреневый"],
        status: "in-stock"
    },
    { 
        id: 12, 
        name: "DAINEL SG Moka 15 Тёмно-коричневый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Moka 15 Тёмно-коричневый.jpg", 
        description: "Глубокий темно-коричневый оттенок, напоминающий цвет мокко. Создает теплую атмосферу.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Тёмно-коричневый"],
        status: "in-stock"
    },
    { 
        id: 13, 
        name: "DAINEL SG Muskat 156 Лиловый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Muskat 156 Лиловый.jpg", 
        description: "Изысканный лиловый оттенок с бархатной текстурой. Подходит для творческих проектов.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Лиловый"],
        status: "in-stock"
    },
    { 
        id: 14, 
        name: "DAINEL SG Navy 151 Тёмно-синий", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Navy 151 Тёмно-синий.jpg", 
        description: "Классический темно-синий цвет с бархатистой поверхностью. Идеален для деловых проектов.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Тёмно-синий"],
        status: "in-stock"
    },
    { 
        id: 15, 
        name: "DAINEL SG Neige 08 Белый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Neige 08 Белый.jpg", 
        description: "Чистый белый цвет с бархатной текстурой. Идеален для свадебной полиграфии.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Белый"],
        status: "in-stock"
    },
    { 
        id: 16, 
        name: "DAINEL SG Nuage 41 Светло-серый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Nuage 41 Светло-серый.jpg", 
        description: "Нежный светло-серый оттенок с бархатной поверхностью. Создает современный вид.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Светло-серый"],
        status: "in-stock"
    },
    { 
        id: 17, 
        name: "DAINEL SG Pervenche 55 Тёмно-пурпурный", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Pervenche 55 Тёмно-пурпурный.jpg", 
        description: "Насыщенный темно-пурпурный цвет с бархатной текстурой. Добавляет роскоши проектам.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Тёмно-пурпурный"],
        status: "in-stock"
    },
    { 
        id: 18, 
        name: "DAINEL SG Pink 2831 Розовый", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Pink 2831 Розовый.jpg", 
        description: "Классический розовый цвет с бархатистой поверхностью. Идеален для женственных проектов.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Розовый"],
        status: "in-stock"
    },
    { 
        id: 19, 
        name: "DAINEL SG Pivoine 48 Красный", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 520, 
        image: "images/products/DAINEL SG Pivoine 48 Красный.jpg", 
        description: "Яркий красный цвет с бархатной текстурой. Создает праздничное настроение.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Красный"],
        status: "in-stock"
    },
    { 
        id: 20, 
        name: "DAINEL SG Platine 27 Платина", 
        density: "230 гр/м2", 
        manufacturer: "DAINEL", 
        country: "Франция", 
        price: 580, 
        image: "images/products/DAINEL SG Platine 27 Платина.jpg", 
        description: "Металлический платиновый оттенок с бархатной текстурой. Создает роскошный эффект.", 
        texture: "Бархат", 
        size: "70x100 см", 
        colors: ["Платина"],
        status: "in-stock"
    }
];

// Cart state
let cart = [];
let currentVatType = 'with-vat';

// DOM elements
const productsContainer = document.getElementById('products-container');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCartModal = document.getElementById('close-cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const orderForm = document.getElementById('order-form');
const productModal = document.getElementById('product-modal');
const closeProductModal = document.getElementById('close-product-modal');
const productDetailContent = document.getElementById('product-detail-content');
const vatToggle = document.querySelectorAll('input[name="vat"]');

// Slider elements
const sliderSlides = document.querySelectorAll('.slider-slide');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderDots = document.querySelectorAll('.dot');

// Initialize the application
function init() {
    renderProducts();
    setupEventListeners();
    startSlider();
}

// Render products grid
function renderProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const statusText = getStatusText(product.status);
    const statusClass = getStatusClass(product.status);
    
    card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image}')">
            <div class="product-status ${statusClass}">${statusText}</div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-specs">
                <p>Плотность: ${product.density}</p>
                <p>Производитель: ${product.manufacturer}</p>
                <p>Страна: ${product.country}</p>
            </div>
            <div class="product-price">
                <span class="price">${product.price} ₽</span>
                <span class="vat-type">${currentVatType === 'with-vat' ? 'с НДС' : 'без НДС'}</span>
            </div>
            <div class="product-quantity-selector">
                <button class="quantity-btn minus" data-product-id="${product.id}">-</button>
                <input type="number" class="quantity-input" value="1" min="1" max="99" data-product-id="${product.id}">
                <button class="quantity-btn plus" data-product-id="${product.id}">+</button>
            </div>
            <div class="product-actions">
                <button class="btn-details" data-product-id="${product.id}">Подробнее</button>
                <button class="btn-add-to-cart" data-product-id="${product.id}">В корзину</button>
            </div>
        </div>
    `;
    
    return card;
}

// Get status text
function getStatusText(status) {
    const statusMap = {
        'in-stock': 'В наличии',
        'on-way': 'В пути',
        'on-order': 'Под заказ'
    };
    return statusMap[status] || 'В наличии';
}

// Get status class
function getStatusClass(status) {
    return status;
}

// Setup event listeners
function setupEventListeners() {
    // Cart icon click
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
        renderCart();
    });

    // Close modals
    closeCartModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    closeProductModal.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    // VAT toggle
    vatToggle.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentVatType = e.target.value;
            renderProducts();
        });
    });

    // Order form submission
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitOrder();
    });

    // Question form submission
    document.getElementById('question-form').addEventListener('submit', (e) => {
        e.preventDefault();
        submitQuestion();
    });

    // Delegate events for product actions
    productsContainer.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.classList.contains('btn-add-to-cart')) {
            const productId = parseInt(target.dataset.productId);
            addToCart(productId);
        }
        
        if (target.classList.contains('btn-details')) {
            const productId = parseInt(target.dataset.productId);
            showProductDetails(productId);
        }
        
        if (target.classList.contains('quantity-btn')) {
            const productId = parseInt(target.dataset.productId);
            const input = document.querySelector(`.quantity-input[data-product-id="${productId}"]`);
            
            if (target.classList.contains('plus')) {
                input.value = parseInt(input.value) + 1;
            } else if (target.classList.contains('minus')) {
                if (parseInt(input.value) > 1) {
                    input.value = parseInt(input.value) - 1;
                }
            }
        }
    });

    // Delegate events for cart actions
    cartItems.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.classList.contains('cart-remove-btn')) {
            const productId = parseInt(target.dataset.productId);
            removeFromCart(productId);
        }
        
        if (target.classList.contains('cart-quantity-btn')) {
            const productId = parseInt(target.dataset.productId);
            const cartItem = cart.find(item => item.id === productId);
            const input = document.querySelector(`.cart-quantity-input[data-product-id="${productId}"]`);
            
            if (target.classList.contains('plus')) {
                input.value = parseInt(input.value) + 1;
                cartItem.quantity = parseInt(input.value);
            } else if (target.classList.contains('minus')) {
                if (parseInt(input.value) > 1) {
                    input.value = parseInt(input.value) - 1;
                    cartItem.quantity = parseInt(input.value);
                }
            }
            
            updateCart();
        }
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantityInput = document.querySelector(`.quantity-input[data-product-id="${productId}"]`);
    const quantity = parseInt(quantityInput.value);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCart();
    showNotification('Товар добавлен в корзину');
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart UI
function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartModal.style.display === 'block') {
        renderCart();
    }
}

// Render cart items
function renderCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
        cartTotal.textContent = 'Итого: 0 ₽';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">${item.price} ₽ × ${item.quantity}</div>
                <div class="cart-item-vat">${currentVatType === 'with-vat' ? 'с НДС' : 'без НДС'}</div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-quantity">
                    <button class="cart-quantity-btn minus" data-product-id="${item.id}">-</button>
                    <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" max="99" data-product-id="${item.id}">
                    <button class="cart-quantity-btn plus" data-product-id="${item.id}">+</button>
                </div>
                <button class="cart-remove-btn" data-product-id="${item.id}">Удалить</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `Итого: ${total} ₽`;
}

// Show product details modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    
    productDetailContent.innerHTML = `
        <div class="product-detail-image" style="background-image: url('${product.image}')"></div>
        <div class="product-detail-info">
            <h2 class="product-detail-title">${product.name}</h2>
            <div class="product-detail-specs">
                <p><strong>Описание:</strong> ${product.description}</p>
                <p><strong>Плотность:</strong> ${product.density}</p>
                <p><strong>Текстура:</strong> ${product.texture}</p>
                <p><strong>Размер:</strong> ${product.size}</p>
                <p><strong>Производитель:</strong> ${product.manufacturer}</p>
                <p><strong>Страна:</strong> ${product.country}</p>
                <p><strong>Цвета:</strong> ${product.colors.join(', ')}</p>
            </div>
            <div class="product-price">
                <span class="price">${product.price} ₽</span>
                <span class="vat-type">${currentVatType === 'with-vat' ? 'с НДС' : 'без НДС'}</span>
            </div>
            <div class="quantity-selector">
                <button class="quantity-btn minus" data-product-id="${product.id}">-</button>
                <input type="number" class="quantity-input" value="1" min="1" max="99" data-product-id="${product.id}">
                <button class="quantity-btn plus" data-product-id="${product.id}">+</button>
            </div>
            <button class="btn-add-to-cart" data-product-id="${product.id}" style="width: 100%; margin-top: 20px;">Добавить в корзину</button>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Submit order
function submitOrder() {
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;
    
    if (cart.length === 0) {
        showNotification('Корзина пуста', 'error');
        return;
    }
    
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { name, phone, cart });
    
    showNotification('Заказ успешно отправлен!');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
    orderForm.reset();
}

// Submit question form
function submitQuestion() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // Here you would typically send the question to your backend
    console.log('Question submitted:', { name, phone });
    
    showNotification('Вопрос отправлен! Мы свяжемся с вами в ближайшее время.');
    document.getElementById('question-form').reset();
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--primary)' : 'var(--error)'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Slider functionality
let currentSlide = 0;

function startSlider() {
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Previous button
    sliderPrev.addEventListener('click', prevSlide);
    
    // Next button
    sliderNext.addEventListener('click', nextSlide);
    
    // Dots
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderSlides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderSlides.length) % sliderSlides.length;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    // Update slides
    sliderSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    // Update dots
    sliderDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);