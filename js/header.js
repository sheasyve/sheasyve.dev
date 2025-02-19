document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const headerPath = currentPath.includes("/projects/") ? "../header.html" : "header.html";
    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            document.querySelector(".body").insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Error loading header:", error));
});
