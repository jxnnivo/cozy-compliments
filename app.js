const compliments = [
  "You're doing your best and I'm so proud of you 🌷",
  "You're my safe space 🫖",
  "You're growing at your own pace 🍃",
  "You light up my life 🌙",
  "I love you so much 💌",
  "You're enough — just as you are ☁️"
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("getCompliment").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];
    document.getElementById("complimentText").textContent = compliment;
  });
});
