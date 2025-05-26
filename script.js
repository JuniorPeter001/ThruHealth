window.addEventListener("load", function () {
    const preloader = this.document.getElementById("preloader");
    if (preloader) {
        preloader.classList.add("hidden");
        this.setTimeout(() => preloader.style.display = "none", 500);
    }
});