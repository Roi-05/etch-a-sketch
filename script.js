const container = document.querySelector("#container");
const gridRatio = 16;

    for (let i = 0; i < gridRatio * gridRatio; i++) {
        const grids = document.createElement("div");
        grids.classList.toggle("grids");
        container.appendChild(grids);
    }

const grids = document.querySelectorAll(".grids");

grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = `rgb( ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    });
});
