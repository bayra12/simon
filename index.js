
// Тоглоомын үндсэн container
const gameContainer = document.getElementById("gameContainer");

// Дүрснүүдийн мэдээлэл
const animals = [
  { name: "dove", image: "fly.gif",  y: -70},
  { name: "elephant", image: "elep.gif", y: 300 },
  { name: "monkey", image: "monkey.gif",  y: 170 },
  { name: "rabbit", image: "rabbit1.gif", y: 50},
];
// Дүрснүүдийг үүсгэж, байрлуулах функц
function createAnimals() {
  animals.forEach((animal) => {
    // Animal wrapper
    const animalDiv = document.createElement("div");
    animalDiv.classList.add("animal");
    animalDiv.style.left = `${animal.x}px`;
    animalDiv.style.top = `${animal.y}px`;

    // Зураг нэмэх
    const img = document.createElement("img");
    img.src = animal.image;
    img.alt = animal.name;
    // Товчийг эвенттэй болгох
    animalDiv.addEventListener("click", () => {
      alert(`You clicked on the ${animal.name}!`);
    });
    animalDiv.appendChild(img);
    gameContainer.appendChild(animalDiv);
  });
}
// Тоглоом эхлүүлэх
createAnimals();