const divParent = document.querySelector("#book");
const controlsSize = document.querySelectorAll(".font-size");
const booksText = document.querySelector(".book__content");

for (let key of controlsSize) {
    key.addEventListener("click", (e) => {
        e.preventDefault();
        deleteClass(controlsSize);
        deleteClassText(booksText);

        e.target.classList.add('font-size_active');

            if (e.target.classList.contains("font-size_big")) {
                booksText.classList.add("font-size_big");
            } else if (e.target.classList.contains('font-size_small')) {
                booksText.classList.add("font-size_small");
            } else {
                '';
            }
    })
}

const deleteClass = (array) => {
    array.forEach(element => {
        element.classList.contains('font-size_active') ? element.classList.remove('font-size_active') : false;
    });
}

const deleteClassText = (element) => {
    if (element.classList.contains("font-size_big")) {
        element.classList.remove("font-size_big");
    }
    else if (element.classList.contains('font-size_small')) {
        element.classList.remove('font-size_small');
    } else {
        '';
    }
}
