const trails = [];
const trailCount = 20;

for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.width = `${15 - i * 0.5}px`; // Tamanho decrescente
    trail.style.height = `${15 - i * 0.5}px`;
    trail.style.opacity = 1 - i / trailCount; // Opacidade decrescente
    document.body.appendChild(trail);
    trails.push({
        element: trail,
        x: 0,
        y: 0,
        delay: i * 3 // Atraso crescente para o efeito
    });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Atualiza posição do mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animação suave
function animate() {
    for (let i = 0; i < trails.length; i++) {
        const trail = trails[i];
        
        // Interpolação suave com atraso
        trail.x += (mouseX - trail.x) / (10 + i * 0.5);
        trail.y += (mouseY - trail.y) / (10 + i * 0.5);
        
        trail.element.style.left = `${trail.x}px`;
        trail.element.style.top = `${trail.y}px`;
    }
    requestAnimationFrame(animate);
}

animate();

// Redimensionamento responsivo
window.addEventListener('resize', () => {
    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;
});