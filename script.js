// Typewriter
// const text = "Happy Birthday Babe 🎉";
// let i = 0;
// function typeWriter() {
//   if (i < text.length) {
//     document.getElementById("typewriter").textContent += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, 100);
//   }
// }
// window.onload = typeWriter;

// Theme toggle

function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    // Toggle icon on the button
    const toggleBtn = document.getElementById("toggle");
    if (document.body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "🌞"; // Light mode icon
    } else {
        toggleBtn.textContent = "🌗"; // Dark mode icon
    }
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.textContent = "💗";
  heart.className = "floating-heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = `${16 + Math.random() * 20}px`;
  heart.style.animationDuration = `${3 + Math.random() * 2}s`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);

// Confetti + Meow Sound on Heading Click
document.getElementById("typewriter").addEventListener("click", () => {
  // Confetti burst
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#ff4d6d', '#f06595', '#845ef7', '#74c0fc', '#ffd43b']
  });

  // Play meow sound
  const audio = new Audio('assets/meow.mp3'); // Adjust path if needed
  audio.play();
});

document.getElementById("cat-button").addEventListener("click", function() {
  const catContainer = document.getElementById("cat-image-container");
  catContainer.innerHTML = `<img src="https://cataas.com/cat?timestamp=${new Date().getTime()}" alt="A random cat">`;
});
const catFacts = [
  "A group of cats is called a clowder.",
  "Cats can rotate their ears 180 degrees.",
  "A cat has been the mayor of an Alaskan town for 20 years.",
  "Cats sleep for 70% of their lives.",
  "Adult cats only meow at humans, not other cats.",
  "The world's oldest cat lived to be 38 years old.",
  "Cats have over 20 muscles to control their ears.",
  "A house cat’s genome is 95.6% tiger.",
  "Cats can’t taste sweetness.",
  "Whiskers help cats detect changes in air currents."
];

document.getElementById("cat-fact-button").addEventListener("click", () => {
  const fact = catFacts[Math.floor(Math.random() * catFacts.length)];
  document.getElementById("cat-fact-display").textContent = fact;
});

const images = document.querySelectorAll(".carousel-img");
const carouselContainer = document.querySelector(".carousel-container");
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

// Click on image to go to next
carouselContainer.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

// Auto-slide every 5 seconds
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 3000);

document.getElementById("cat-jump").addEventListener("click", () => {
    window.open("cats.html", "_blank");
    const audio = new Audio('assets/meow.mp3'); // Adjust path if needed
  audio.play();
});

const prettiestAudio = new Audio("assets/prettiest.mp3");

document.querySelectorAll(".carousel-img").forEach(img => {
    img.addEventListener("mouseenter", () => {
        prettiestAudio.play();
    });

    img.addEventListener("mouseleave", () => {
        prettiestAudio.pause();
    });
});
