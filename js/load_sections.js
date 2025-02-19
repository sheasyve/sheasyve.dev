document.addEventListener("DOMContentLoaded", function () {
    loadSection("projects");
    loadSection("contests");
    loadSection("languages");
    loadSection("tools");
    loadSection("software");
    loadSection("interests");
    loadSection("assignments");
});

function loadSection(section) {
    fetch(`index/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${section}:`, error));
}
