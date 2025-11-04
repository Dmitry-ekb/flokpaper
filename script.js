// Product data based on artpapirus.ru
const products = [
    { 
        id: 1, 
        name: "Бархатная бумага Флок Красный", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Насыщенная красная бархатная бумага с эффектом флокирования. Идеально подходит для создания праздничных открыток и упаковки.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Красный"],
        status: "in-stock" // "in-stock", "on-way", "on-order"
    },
    { 
        id: 2, 
        name: "Бархатная бумага Флок Синий", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1584824486537-52f60c5dac8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Глубокий синий цвет с бархатистой текстурой флок. Отлично подходит для деловых приглашений и элегантной упаковки.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Синий"],
        status: "on-way"
    },
    { 
        id: 3, 
        name: "Бархатная бумага Флок Зеленый", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Изумрудный зеленый оттенок бархатной бумаги с текстурой флок. Прекрасный выбор для природных и эко-тематик.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Зеленый"],
        status: "in-stock"
    },
    { 
        id: 4, 
        name: "Бархатная бумага Флок Черный", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Классический черный цвет с эффектом бархатного флока. Создает элегантный и драматический эффект.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Черный"],
        status: "on-order"
    },
    { 
        id: 5, 
        name: "Бархатная бумага Флок Белый", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1584824486537-52f60c5dac8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Чистый белый цвет с бархатной текстурой флок. Идеален для свадебной полиграфии и светлых проектов.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Белый"],
        status: "in-stock"
    },
    { 
        id: 6, 
        name: "Бархатная бумага Флок Золотой", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 580, 
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Роскошный золотой флок с металлическим блеском. Создает праздничное настроение и добавляет шика.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Золотой"],
        status: "in-stock"
    },
    { 
        id: 7, 
        name: "Бархатная бумага Флок Серебряный", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 580, 
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Элегантный серебряный флок с холодным блеском. Подходит для современных и минималистичных дизайнов.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Серебряный"],
        status: "on-way"
    },
    { 
        id: 8, 
        name: "Бархатная бумага Флок Бордовый", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1584824486537-52f60c5dac8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Глубокий бордовый оттенок с бархатной текстурой. Создает благородную и утонченную атмосферу.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Бордовый"],
        status: "in-stock"
    },
    { 
        id: 9, 
        name: "Бархатная бумага Флок Фиолетовый", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Насыщенный фиолетовый цвет с эффектом флокирования. Подходит для творческих и нестандартных проектов.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Фиолетовый"],
        status: "in-stock"
    },
    { 
        id: 10, 
        name: "Бархатная бумага Флок Розовый", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Нежный розовый оттенок с бархатной текстурой. Идеален для женственных и романтичных проектов.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Розовый"],
        status: "on-order"
    },
    { 
        id: 11, 
        name: "Бархатная бумага Флок Оранжевый", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1584824486537-52f60c5dac8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Энергичный оранжевый цвет с текстурой флок. Добавляет яркости и жизнерадостности в проекты.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Оранжевый"],
        status: "in-stock"
    },
    { 
        id: 12, 
        name: "Бархатная бумага Флок Коричневый", 
        density: "230 гр/м2", 
        manufacturer: "Grafix", 
        country: "США", 
        price: 520, 
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
        description: "Натуральный коричневый оттенок с бархатной текстурой. Создает теплую и уютную атмосферу.", 
        texture: "Флок", 
        size: "70x100 см", 
        colors: ["Коричневый"],
        status: "in-stock"
    }
];

// Cart functionality
let cart = [];
let vatMode = 'with-vat';
let vatLocked = false;

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Initialize Yandex Map
function initMap() {
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(function () {
            const map = new ymaps.Map('map', {
                center: [56.838011, 60.597465],
                zoom: 16
            });

            const placemark = new ymaps.Placemark([56.838011, 60.597465], {
                hintContent: 'FLOKPAPER',
                balloonContent: 'г. Екатеринбург, ул. Шаумяна, д. 20'
            });

            map.geoObjects.add(placemark);
        });
    }
}

function loadYandexMaps() {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=ваш_ключ_api&lang=ru_RU';
    script.onload = initMap;
    document.head.appendChild(script);
}

// Generate products
const productsContainer = document.getElementById('products-container');

function renderProducts(productsToRender = products) {
    productsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsContainer.innerHTML = '<div class="no-products"><p>Товары не найдены</p></div>';
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const price = vatMode === 'with-vat' ? product.price : Math.round(product.price / 1.2);
        const vatType = vatMode === 'with-vat' ? 'С НДС' : 'БЕЗ НДС';
        
        // Определяем текст статуса
        let statusText = '';
        let statusClass = '';
        switch(product.status) {
            case 'in-stock':
                statusText = 'В наличии';
                statusClass = 'in-stock';
                break;
            case 'on-way':
                statusText = 'В пути';
                statusClass = 'on-way';
                break;
            case 'on-order':
                statusText = 'Под заказ';
                statusClass = 'on-order';
                break;
        }
        
        productCard.innerHTML = `
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
                    <span class="price">${price} ₽</span>
                    <span class="vat-type">${vatType}</span>
                </div>
                <div class="product-actions">
                    <button class="btn-details" data-id="${product.id}">Подробнее</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
        
        // Product details functionality
        const detailsBtn = productCard.querySelector('.btn-details');
        detailsBtn.addEventListener('click', function() {
            showProductDetails(product.id);
        });
    });
}

// Add to cart function
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    
    if (product.status !== 'in-stock') {
        showNotification('Товар временно недоступен для заказа', 'error');
        return;
    }
    
    const price = vatMode === 'with-vat' ? product.price : Math.round(product.price / 1.2);
    
    if (!vatLocked) {
        vatLocked = true;
        document.querySelectorAll('input[name="vat-toggle"]').forEach(radio => {
            radio.disabled = true;
        });
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: price,
            image: product.image,
            quantity: quantity,
            vatMode: vatMode
        });
    }
    
    updateCartUI();
    showNotification(`Товар добавлен в корзину (${quantity} шт.)`, 'success');
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Корзина пуста</p>';
        cartTotal.textContent = 'Итого: 0 ₽';
        
        vatLocked = false;
        document.querySelectorAll('input[name="vat-toggle"]').forEach(radio => {
            radio.disabled = false;
        });
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
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} ₽</div>
                <div class="cart-item-vat">${item.vatMode === 'with-vat' ? 'С НДС' : 'Без НДС'}</div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-quantity">
                    <button class="cart-quantity-btn minus" data-id="${item.id}">-</button>
                    <input type="text" class="cart-quantity-input" value="${item.quantity}" data-id="${item.id}">
                    <button class="cart-quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <button class="cart-remove-btn" data-id="${item.id}">Удалить</button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
        
        // Add event listeners for quantity buttons
        const minusBtn = cartItem.querySelector('.minus');
        const plusBtn = cartItem.querySelector('.plus');
        const quantityInput = cartItem.querySelector('.cart-quantity-input');
        const removeBtn = cartItem.querySelector('.cart-remove-btn');
        
        minusBtn.addEventListener('click', function() {
            updateQuantity(item.id, -1);
        });
        
        plusBtn.addEventListener('click', function() {
            updateQuantity(item.id, 1);
        });
        
        quantityInput.addEventListener('change', function() {
            const newQuantity = parseInt(this.value);
            if (newQuantity > 0) {
                updateQuantity(item.id, newQuantity - item.quantity);
            }
        });
        
        removeBtn.addEventListener('click', function() {
            removeFromCart(item.id);
        });
    });
    
    cartTotal.textContent = `Итого: ${total} ₽`;
}

// Update quantity function
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        const newQuantity = item.quantity + change;
        
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
        }
    }
}

// Remove from cart function
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('Товар удален из корзины', 'success');
}

// Show product details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const content = document.getElementById('product-detail-content');
    
    const price = vatMode === 'with-vat' ? product.price : Math.round(product.price / 1.2);
    const vatType = vatMode === 'with-vat' ? 'С НДС' : 'БЕЗ НДС';
    
    let statusText = '';
    switch(product.status) {
        case 'in-stock':
            statusText = 'В наличии';
            break;
        case 'on-way':
            statusText = 'В пути';
            break;
        case 'on-order':
            statusText = 'Под заказ';
            break;
    }
    
    content.innerHTML = `
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
                <p><strong>Доступные цвета:</strong> ${product.colors.join(', ')}</p>
                <p><strong>Статус:</strong> ${statusText}</p>
                <p><strong>Тип цены:</strong> ${vatType}</p>
            </div>
            <div class="product-price">
                <span class="price">${price} ₽</span>
            </div>
            <div class="quantity-selector">
                <button class="quantity-btn minus-detail">-</button>
                <input type="text" class="quantity-input" value="1" id="detail-quantity">
                <button class="quantity-btn plus-detail">+</button>
            </div>
            <button class="btn btn-primary add-to-cart-detail" data-id="${product.id}" ${product.status !== 'in-stock' ? 'disabled' : ''}>
                ${product.status === 'in-stock' ? 'Добавить в корзину' : statusText}
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add event listeners for detail modal
    const minusBtn = content.querySelector('.minus-detail');
    const plusBtn = content.querySelector('.plus-detail');
    const quantityInput = content.querySelector('#detail-quantity');
    const addToCartBtn = content.querySelector('.add-to-cart-detail');
    
    minusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = quantity + 1;
    });
    
    if (product.status === 'in-stock') {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            addToCart(product.id, quantity);
            modal.style.display = 'none';
        });
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const backgroundColor = type === 'success' ? '#000000' : '#ff4444';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 15px 20px;
        z-index: 1001;
        font-weight: 400;
        font-size: 13px;
        max-width: 300px;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Modal functionality
const productModal = document.getElementById('product-modal');
const cartModal = document.getElementById('cart-modal');
const closeProductModal = document.getElementById('close-product-modal');
const closeCartModal = document.getElementById('close-cart-modal');
const cartIcon = document.getElementById('cart-icon');

closeProductModal.addEventListener('click', function() {
    productModal.style.display = 'none';
});

closeCartModal.addEventListener('click', function() {
    cartModal.style.display = 'none';
});

cartIcon.addEventListener('click', function() {
    cartModal.style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// VAT toggle functionality
const vatToggle = document.querySelectorAll('input[name="vat-toggle"]');
vatToggle.forEach(radio => {
    radio.addEventListener('change', function() {
        if (!vatLocked) {
            vatMode = this.value;
            renderProducts();
        }
    });
});

// Slider controls
document.querySelector('.slider-next').addEventListener('click', function() {
    stopSlider();
    nextSlide();
    startSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    stopSlider();
    prevSlide();
    startSlider();
});

// Slider dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        stopSlider();
        showSlide(index);
        startSlider();
    });
});

// Pause slider on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', stopSlider);
slider.addEventListener('mouseleave', startSlider);

// Email sending function
async function sendEmail(formData, type) {
    const emailData = {
        service_id: 'your_service_id',
        template_id: 'your_template_id',
        user_id: 'your_user_id',
        template_params: {
            ...formData,
            type: type
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData)
        });

        return response.ok;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

// Order form submission
const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;
    
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    const orderDetails = cart.map(item => 
        `${item.name} - ${item.quantity} шт. x ${item.price} ₽ = ${item.quantity * item.price} ₽ (${item.vatMode === 'with-vat' ? 'С НДС' : 'Без НДС'})`
    ).join('\n');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const formData = {
        'name': name,
        'phone': phone,
        'order_details': orderDetails,
        'total': total + ' ₽',
        'to_email': 'ekbicp@gmail.com'
    };
    
    const success = await sendEmail(formData, 'order');
    
    if (success) {
        alert(`Заказ отправлен!\n\nИмя: ${name}\nТелефон: ${phone}\n\nТовары:\n${orderDetails}\n\nИтого: ${total} ₽\n\nМы свяжемся с вами в ближайшее время.`);
        
        cart = [];
        updateCartUI();
        cartModal.style.display = 'none';
        orderForm.reset();
    } else {
        alert('Произошла ошибка при отправке заказа. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.');
    }
});

// Question form submission
const questionForm = document.getElementById('question-form');
questionForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    const formData = {
        'name': name,
        'phone': phone,
        'to_email': 'ekbicp@gmail.com'
    };
    
    const success = await sendEmail(formData, 'question');
    
    if (success) {
        alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone} в ближайшее время.`);
        questionForm.reset();
    } else {
        alert('Произошла ошибка при отправке вопроса. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
    loadYandexMaps();
    startSlider();
});