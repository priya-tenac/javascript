

// Generate a random color
const random_color = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interval_id = null; // Initialize to null

const startchangingcolor = function () {
    if (!interval_id) { // Prevent multiple intervals from running
        interval_id = setInterval(changebgcolor, 1000);
    }

    function changebgcolor() {
        document.body.style.backgroundColor = random_color();
    }
};

const stopchangingcolor = function () {
    clearInterval(interval_id);
    interval_id = null; // Reset interval_id after stopping
};

console.log(random_color());

document.querySelector("#start").addEventListener("click", startchangingcolor);
document.querySelector("#stop").addEventListener("click", stopchangingcolor);
