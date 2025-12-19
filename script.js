const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function handleInput(value) {
    if (value === "C") {
        display.value = "";
    } 
    else if (value === "⌫") {
        display.value = display.value.slice(0, -1);
    } 
    else if (value === "=") {
        try {
            display.value = eval(display.value.replace(/x/g, "*"));
        } catch {
            display.value = "Error";
        }
    } 
    else {
        display.value += value;
    }
}

/* Button clicks */
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        handleInput(btn.innerText);
    });
});

/* Keyboard support */
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {
        handleInput(key === "*" ? "x" : key);
    }
    else if (key === "Enter") {
        handleInput("=");
    }
    else if (key === "Backspace") {
        handleInput("⌫");
    }
    else if (key === "Escape") {
        handleInput("C");
    }
});
