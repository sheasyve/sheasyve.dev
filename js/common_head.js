document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const commonHeadPath = currentPath.includes("/projects/") ? "../common_head.html" : "common_head.html";

    fetch(commonHeadPath)
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading common head:", error));
});
