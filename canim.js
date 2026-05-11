// Fonction pour ouvrir l'enveloppe
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const mainWrapper = document.getElementById('mainWrapper');
    
    envelope.classList.add('opened');
    
    setTimeout(() => {
        envelopeContainer.style.display = 'none';
        mainWrapper.style.display = 'block';
        createConfetti();
    }, 800);
}

// Event listener pour ouvrir l'enveloppe au clic
document.addEventListener('DOMContentLoaded', function() {
    const envelopeFlap = document.getElementById('envelopeFlap');
    const envelope = document.querySelector('.envelope');
    
    // Clic sur le flap
    envelopeFlap.addEventListener('click', openEnvelope);
    
    // Clic sur l'enveloppe
    envelope.addEventListener('click', openEnvelope);
    
    // Double clic comme fallback
    document.addEventListener('dblclick', function(e) {
        if (document.getElementById('envelopeContainer').style.display !== 'none') {
            openEnvelope();
        }
    });
});

// Fonction pour créer et animer des confettis
function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Couleurs: blanc, noir et doré
        const colors = ['#d4af37', '#ffffff', '#1a1a1a'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Position aléatoire
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        
        // Taille aléatoire
        const size = Math.random() * 8 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Délai aléatoire
        const delay = Math.random() * 0.5;
        const duration = Math.random() * 3 + 2;
        
        confetti.style.animation = `confetti-fall ${duration}s linear ${delay}s forwards`;
        
        container.appendChild(confetti);
        
        // Supprimer l'élément après l'animation
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Créer des confettis chaque 5 secondes
document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        if (document.getElementById('mainWrapper').style.display !== 'none') {
            createConfetti();
        }
    }, 5000);
});

// Animation au scroll - faire apparaître les éléments
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.message-card, .gallery-item, .love-message, .celebration-section');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease';
        observer.observe(el);
    });
});

// Fonction pour créer une lumière douce au curseur
document.addEventListener('mousemove', function(e) {
    const header = document.querySelector('.header');
    if (header) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        header.style.backgroundPosition = x + '% ' + y + '%';
    }
});

// Créer des effets spéciaux au clic
document.addEventListener('click', function(e) {
    // Créer de petits cœurs au clic
    if (e.target.closest('.message-card, .gallery-item, .love-message, .heart, .celebration-section')) {
        createHeartClick(e.pageX, e.pageY);
    }
});

function createHeartClick(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '1.5rem';
    heart.style.zIndex = '9999';
    
    document.body.appendChild(heart);
    
    // Animer le cœur vers le haut et disparition
    let opacity = 1;
    let posY = y;
    
    const animate = setInterval(() => {
        posY -= 2;
        opacity -= 0.05;
        heart.style.opacity = opacity;
        heart.style.top = posY + 'px';
        
        if (opacity <= 0) {
            clearInterval(animate);
            heart.remove();
        }
    }, 30);
}

// Ajouter des interactions interactives
document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes au survol
    const cards = document.querySelectorAll('.message-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(1deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
});

// Fonction pour créer une lumière douce au curseur
document.addEventListener('mousemove', function(e) {
    const header = document.querySelector('.header');
    if (header) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        header.style.backgroundPosition = x + '% ' + y + '%';
    }
});

// Message de bienvenue dans la console
console.log('%c💕 Mutlu Yıldönümü! 💕', 'font-size: 20px; color: #d4af37; font-weight: bold;');
console.log('%c"Seni çok seviyorum" - Sana çok aşkla...', 'font-size: 14px; color: #1a1a1a; font-style: italic;');
console.log('%cSeninle sonsuza kadar... ❤️', 'font-size: 12px; color: #d4af37;');
