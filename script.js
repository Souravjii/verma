const modal = document.getElementById('congratsModal');
const congratsText = document.getElementById('congratsText');
const img = document.getElementById('congratsImg');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// "Yes" button logic
yesButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    congratsText.textContent = 'Congratulations! Your date with Potla is confirmed.';
    img.src = 'img2.jpg'; // Ensure the image path is correct
});

// "No" button logic
noButton.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.max(0, x)}px`;
    noButton.style.top = `${Math.max(0, y)}px`;
});
