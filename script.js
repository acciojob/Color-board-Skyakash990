document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");

    for (let i = 0; i < 800; i++) {
        const box = document.createElement("div");
        box.classList.add("square");

        box.addEventListener("mouseover", () => {
            box.classList.add("hovered");
            box.style.backgroundColor = getRandomColor();

            setTimeout(() => {
                box.classList.remove("hovered");
                box.style.backgroundColor = "rgb(29,29,29)";
            }, 1000);
        });

        board.appendChild(box);
    }
});

// Function to generate random colors
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
}
