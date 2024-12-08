const body = document.body;
const toggleThemeButton = document.querySelector('.cambiocolor');

// Cambio a modo diurno

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});

// Cambio entre modo nocturno

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Elementos principales
const aumentarBtn = document.getElementById('aumentar');
const disminuirBtn = document.getElementById('disminuir');

const root = document.documentElement;

// Configuración de tamaños
const tamanioInicial = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base')); // Tamaño inicial en rem
const escala = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-step')); // Incremento/decremento en rem (2px)

// Variable para controlar el tamaño actual
let tamanioActual = tamanioInicial;

// Función para actualizar el tamaño de letra
function actualizarTamanio(nuevoTamanio) {
    tamanioActual = nuevoTamanio;
    body.style.fontSize = `${tamanioActual}rem`;
}

// Eventos para los botones
aumentarBtn.addEventListener('click', () => {
  actualizarTamanio(tamanioActual + escala);
});

disminuirBtn.addEventListener('click', () => {
  actualizarTamanio(tamanioActual - escala);
});

