const div = document.querySelectorAll(".reveal");

for (const elem of div) {
    this.addEventListener("scroll", function () {
       elem.getBoundingClientRect().top <= 500? elem.classList.add("reveal_active") : false;
    })
}
