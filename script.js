const container = document.querySelector("#container");
const containerSize = 600;

const button = document.querySelector("#getWH");

let height = 16;
let width = 16;

createGrids(height, width);

button.setAttribute("style" , "background-color: #4681f4; padding: 10px 20px; border-radius: 8px; border: none; color: white; cursor: pointer;")

button.addEventListener("click" , () => {
     height = prompt("Enter row (1-100): ");
     width = prompt("Enter column (1-100): ");
     
     if (height > 100 || height < 1 || width > 100 || width < 1) {
        alert("Please enter between 1-100");
        return;
     }
     createGrids(height, width);
});

function createGrids (height, width) {
    container.innerHTML = "";
    for (let i = 0; i < height * width; i++) {
        const grids = document.createElement("div");
        grids.style.height = `${containerSize / height}px`;
        grids.style.width = `${containerSize / width}px`;
        grids.classList.toggle("grids");
        container.appendChild(grids);

        grids.addEventListener("mouseover", () => {
            grids.style.backgroundColor = `rgb( ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    }
}

