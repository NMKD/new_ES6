const timer = document.getElementById('start_timeout');

const timeout = function() {
    timer.textContent != 0 ? timer.textContent-- : alert("You win!");
}

setInterval(timeout, 1000);
