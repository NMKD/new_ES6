const span = document.querySelector("#clicker__counter");
const img = document.querySelector(".clicker__cookie");
const spanSpeed = document.querySelector('#clicker__counter_speed');

img.addEventListener('click', function () {
   this.width == 200 ? this.width = 250 : this.width = 200;
   if (spanSpeed.textContent != 59) {
    spanSpeed.textContent = new Date().getSeconds();
    span.textContent++;
   }
   else {
     span.textContent = 0;
     spanSpeed.textContent = 0;
   }
})

