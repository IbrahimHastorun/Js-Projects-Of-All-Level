const darkModeButton = document.getElementById("dark-mode-button");
const body = document.querySelector("body")
const darkModeButtonBody = document.querySelector(".button-body");

let darkMode = false;
darkModeButton.addEventListener("click" , () => {
    darkMode == false ? darkMode = true : darkMode = false;
    console.log(darkMode);
    if (darkMode) {
        body.style.backgroundColor = "#000";
        darkModeButtonBody.style.backgroundColor = "#000";
        darkModeButtonBody.style.left = "43px"
    } else {
        body.style.backgroundColor = "#fff";
        darkModeButtonBody.style.backgroundColor = "#fff";
        darkModeButtonBody.style.left = "3px"
    }
});