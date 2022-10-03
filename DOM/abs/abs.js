const arrRotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let active = arrRotatorCase.findIndex(elem => elem.classList.contains('rotator__case_active'));

arrRotatorCase.forEach((elem) => {
    setInterval(() => {
        getActiveElement(arrRotatorCase);
    }, elem.dataset.speed);
});

let getActiveElement = (arr) => {
    arr.forEach ((item) => {
        delClass (arr);
        item.style.color = item.dataset.color;
    })
};

let delClass = (arr) => {
    arr[active].classList.remove('rotator__case_active');
    active++;
    if (active == arr.length - 1) {
        active = 0;
    }
    arr[active].classList.add('rotator__case_active');
    return active;
};

delClass(arrRotatorCase)
getActiveElement(arrRotatorCase);