document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const commonHeadPath = currentPath.includes("/pages/") ? "../common.html" : "common.html";

    fetch(commonHeadPath)
        .then(response => response.text())
        .then(data => {
            document.head.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Error loading common head:", error));
});
