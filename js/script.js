const paneles = document.querySelectorAll(".panel");
function removeActiveClass() {
    paneles.forEach(panel => {
        panel.classList.remove("active")
    })
}
paneles.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClass()
        panel.classList.add("active")
    })
})