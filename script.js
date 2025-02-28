const container = document.querySelector("#container");
const gridRatio = 16;

    for (let i = 0; i < gridRatio * gridRatio; i++) {
        const grids = document.createElement("div");
        grids.classList.toggle("grid");
        container.appendChild(grids);
    }

const grids = document.querySelectorAll(".grids");

grids.forEach((grid) => {
    grid.addEventListener("click", () => {
        console.log("Not working idiot!")
        grid.style.backgroundColor = "black";
    });
});