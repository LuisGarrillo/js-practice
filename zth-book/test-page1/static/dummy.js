const changeContent = () => {
    const h4 = document.getElementById("change");
    h4.textContent = "Changed!";
}

function initialize() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", changeContent);
}

document.addEventListener("DOMContentLoaded", initialize)