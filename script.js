// MOBILE MENU
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuToggle.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// CURRENT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .intro, .product-card, .custom-order, .contact"
);

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});

// HEADER SCROLL EFFECT
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.07)";
    } else {
        header.style.boxShadow = "none";
    }
});

// WHATSAPP PRODUCT ORDER SYSTEM

function orderProduct(productName) {

    const phoneNumber = "91XXXXXXXXXX";

    const message = `Hello BELLA CRUMB! 🍰

I would like to order:

${productName}

Please share more details. Thank you!`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}


// CUSTOM CAKE ORDER SYSTEM

function sendCustomCakeOrder() {

    const phoneNumber = "91XXXXXXXXXX";

    const type = document.getElementById("cakeType").value;
    const flavour = document.getElementById("cakeFlavour").value;
    const size = document.getElementById("cakeSize").value;
    const message = document.getElementById("cakeMessage").value;
    const name = document.getElementById("customerName").value;

    if (!name.trim()) {
        alert("Please enter your name!");
        return;
    }

    const orderMessage = `Hello BELLA CRUMB! 🍰

I want to order a custom cake.

Name: ${name}
Occasion: ${type}
Flavour: ${flavour}
Cake Size: ${size}
Message on Cake: ${message || "No message"}

Please share the details. Thank you!`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`;

    window.open(whatsappURL, "_blank");
}