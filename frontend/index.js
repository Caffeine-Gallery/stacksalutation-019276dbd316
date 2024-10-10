import { backend } from 'declarations/backend';

const greetingElement = document.getElementById('greeting');
const refreshButton = document.getElementById('refreshButton');

async function updateGreeting() {
    try {
        const greeting = await backend.greet();
        greetingElement.textContent = greeting;
    } catch (error) {
        console.error('Error fetching greeting:', error);
        greetingElement.textContent = 'Error fetching greeting. Please try again.';
    }
}

refreshButton.addEventListener('click', updateGreeting);

// Initial greeting fetch
updateGreeting();
