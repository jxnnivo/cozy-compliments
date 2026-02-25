// List of cozy compliments displayed randomly when the button is clicked
const compliments = [
  "You're doing your best and I'm so proud of you 🌷",
  "You're my safe space 🫖",
  "You're growing at your own pace 🍃",
  "You light up my life 🌙",
  "I love you so much 💌",
  "You're enough just as you are ☁️",
  "Your presence feels like soft rain on a quiet morning 🌧️",
  "You deserve rest and warm tea and gentle days ☕",
  "You are becoming everything you dreamed of 🍓",
  "The world feels softer when you're in it 🌸",
  "You’re allowed to take up space 🤍",
  "You make ordinary days feel magical ✨",
  "Your kindness is your superpower 🧁",
  "You are growing, even on days you don’t see it 🌿",
  "Your heart is safe here 🫶",
  "You are worthy of beautiful things 🌷"
];

// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Select button and paragraph elements
  const button = document.getElementById("getCompliment");
  const output = document.getElementById("complimentText");

  // Add click event listener to button
  button.addEventListener("click", () => {

    // Generate a random index based on the compliments array length
    const randomIndex = Math.floor(Math.random() * compliments.length);

    // Select compliment using random index
    const compliment = compliments[randomIndex];

    // Fade out current text before updating
    output.style.opacity = 0;

    // Delay update slightly for smooth transition
    setTimeout(() => {
      output.textContent = compliment;
      output.style.opacity = 1;
    }, 200);
  });
});