const span = document.querySelector(".date__timer");

const dateTime = function() {
    span.textContent = `День ${new Date().getDay()}, время ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}

setInterval(dateTime, 1000);

