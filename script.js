// Elementos del DOM
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginSection = document.getElementById('login-section');
const homeSection = document.getElementById('home-section');
const pokemonList = document.getElementById('pokemon-list');
const logoutButton = document.getElementById('logout');
const loginError = document.getElementById('login-error');

// Base URL del backend
const API_URL = 'http://localhost/api';

// Función para iniciar sesión
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Credenciales incorrectas');
        }

        const data = await response.json();
        localStorage.setItem('auth_token', data.token);
        mostrarHome();
    } catch (error) {
        loginError.textContent = error.message;
    }
});

// Función para mostrar la sección Home y consumir la PokéAPI
async function mostrarHome() {
    loginSection.classList.add('hidden');
    homeSection.classList.remove('hidden');

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();

        pokemonList.innerHTML = '';
        data.results.forEach((pokemon) => {
            const li = document.createElement('li');
            li.textContent = pokemon.name;
            pokemonList.appendChild(li);
        });
    } catch (error) {
        console.error('Error al consumir la PokéAPI:', error);
    }
}

// Función para cerrar sesión
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('auth_token');
    homeSection.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

// Comprobar si el usuario ya está autenticado
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        mostrarHome();
    }
});
