const div = document.querySelector(".hello");
const button = document.querySelector(".button");

div.addEventListener("click", e => {
   e.preventDefault;
   e.target.innerText = 'Thk u :)';
})

//выведет объект на котором было нажатие
button.addEventListener("click", function() {
    console.log(this)
 })

 //выведет объект window после клика
button.addEventListener("click", e => {
    console.log(this)
 })

//выдаст true по нажатию кнопки с клавиатуры
document.addEventListener("keydown", function(e) {
    console.log(e instanceof KeyboardEvent);
 })

 document.addEventListener("keydown", function(e) {
    console.log(e.key, e.code);
    console.log(e.key == "f")
 })