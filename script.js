// ========================================
// MOBILE MENU TOGGLE
// ========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ========================================
// CONTACT FORM HANDLING
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        empresa: document.getElementById('empresa').value,
        paquete: document.getElementById('paquete').value,
        mensaje: document.getElementById('mensaje').value
    };

    // Create WhatsApp message
    const whatsappMessage = createWhatsAppMessage(formData);
    const whatsappURL = `https://wa.me/523340079524?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Show confirmation
    alert('¡Gracias por tu interés! Te estoy redirigiendo a WhatsApp para completar tu solicitud.');

    // Optional: Clear form
    contactForm.reset();
});

function createWhatsAppMessage(data) {
    let message = `🌐 *Nueva Solicitud de Cotización*\n\n`;
    message += `*Nombre:* ${data.nombre}\n`;
    message += `*Email:* ${data.email}\n`;
    message += `*Teléfono:* ${data.telefono}\n`;
    
    if (data.empresa) {
        message += `*Empresa:* ${data.empresa}\n`;
    }
    
    if (data.paquete) {
        const paqueteNames = {
            'landing': 'Landing Page Express - $3,500',
            'profesional': 'Sitio Web Profesional - $8,000',
            'premium': 'Sitio Web Premium - $15,000',
            'personalizado': 'Cotización personalizada'
        };
        message += `*Paquete de interés:* ${paqueteNames[data.paquete] || data.paquete}\n`;
    }
    
    message += `\n*Mensaje:*\n${data.mensaje}`;
    
    return message;
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.package-card, .portfolio-item, .step, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// FORM VALIDATION
// ========================================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });

    input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
            validateInput(input);
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && value === '') {
        showError(input, 'Este campo es obligatorio');
        return false;
    }

    if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(input, 'Por favor ingresa un email válido');
            return false;
        }
    }

    if (input.type === 'tel' && value !== '') {
        const phoneRegex = /^[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
            showError(input, 'Por favor ingresa un teléfono válido');
            return false;
        }
    }

    clearError(input);
    return true;
}

function showError(input, message) {
    input.classList.add('error');
    input.style.borderColor = '#f56565';
    
    let errorMsg = input.parentElement.querySelector('.error-message');
    if (!errorMsg) {
        errorMsg = document.createElement('span');
        errorMsg.className = 'error-message';
        errorMsg.style.color = '#f56565';
        errorMsg.style.fontSize = '0.875rem';
        errorMsg.style.marginTop = '5px';
        errorMsg.style.display = 'block';
        input.parentElement.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
}

function clearError(input) {
    input.classList.remove('error');
    input.style.borderColor = '';
    
    const errorMsg = input.parentElement.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

// ========================================
// PACKAGE CARD CLICK TO SCROLL
// ========================================

document.querySelectorAll('.btn-package').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the package title
        const packageCard = btn.closest('.package-card');
        const packageTitle = packageCard.querySelector('.package-title').textContent;
        
        // Select the corresponding option in the form
        const selectElement = document.getElementById('paquete');
        const options = Array.from(selectElement.options);
        const matchingOption = options.find(option => 
            option.text.includes(packageTitle) || 
            option.text.includes(packageCard.querySelector('.package-price .price').textContent.replace(',', ''))
        );
        
        if (matchingOption) {
            selectElement.value = matchingOption.value;
        }
        
        // Scroll to contact form
        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    });
});

// ========================================
// LOADING PERFORMANCE
// ========================================

// Lazy load images when implemented
document.addEventListener('DOMContentLoaded', () => {
    console.log('Victoria Web Design - Landing page loaded successfully');
    
    // You can add analytics tracking here
    // Example: gtag('event', 'page_view');
});

// ========================================
// SCROLL TO TOP BUTTON (Optional)
// ========================================

// Create scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-to-top';
scrollButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
`;

document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.opacity = '1';
        scrollButton.style.visibility = 'visible';
    } else {
        scrollButton.style.opacity = '0';
        scrollButton.style.visibility = 'hidden';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollButton.addEventListener('mouseenter', () => {
    scrollButton.style.transform = 'translateY(-5px)';
    scrollButton.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
});

scrollButton.addEventListener('mouseleave', () => {
    scrollButton.style.transform = 'translateY(0)';
    scrollButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});
