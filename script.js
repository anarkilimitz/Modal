document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

document.querySelector(".close-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});
