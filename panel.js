document.getElementById("toggle-panel").addEventListener("click", () => {
    const content = document.getElementById("panel-content");
    if (content.style.display === "none") {
        content.style.display = "block";
        document.getElementById("toggle-panel").textContent = "-";
    } else {
        content.style.display = "none";
        document.getElementById("toggle-panel").textContent = "+";
    }
});

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
        document.getElementById(tab.getAttribute("data-tab")).classList.remove("hidden");
    });
});
