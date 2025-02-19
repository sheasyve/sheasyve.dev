document.addEventListener("DOMContentLoaded", function () {
    fetch("common_head.html")
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading common head:", error));
});